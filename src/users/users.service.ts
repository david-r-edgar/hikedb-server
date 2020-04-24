import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './interfaces/user.interface'

@Injectable()
export class UsersService {
  private users: User[]

  constructor(@InjectModel('User') private userModel: Model<User>) {
    this.findAll().then(users => {
      this.users = users
    })
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username)
  }
}
