import { Min } from 'class-validator';
import { CreateTripInput } from '../../graphql.schema';

// export class CreateTripDto extends CreateTripInput {
// }

export class CreateTripDto {
  readonly name: string
}
