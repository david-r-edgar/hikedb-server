const bcrypt = require('bcrypt')
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pw: string): Promise<any> {
    const user = await this.usersService.findOne(username)
    if (user) {
      const { hash, userId, username } = user
      const passwordMatchesHashed = await bcrypt.compare(pw, hash)
      if (passwordMatchesHashed) {
        return {
          userId,
          username
        }
      }
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
