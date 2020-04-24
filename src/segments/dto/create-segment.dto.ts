import { Min, Max, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import {
  CreateSegmentInput,
  UpdateSegmentInput,
  DeleteSegmentInput,
  InsertWaypointInput,
  UpdateWaypointInput,
  DeleteWaypointInput,
  WaypointDetailsInput,
} from '../../graphql'

export class CreateSegmentDto extends CreateSegmentInput {
  // @Max(10)
  // indexInDay: number;
}

export class UpdateSegmentDto extends UpdateSegmentInput {}

export class DeleteSegmentDto extends DeleteSegmentInput {}

export class WaypointDetailsDto extends WaypointDetailsInput {
  @Min(-90)
  @Max(90)
  lat: number

  @Min(-180)
  @Max(180)
  lng: number
}

export class InsertWaypointDto extends InsertWaypointInput {
  @ValidateNested({ each: true })
  @Type(() => WaypointDetailsDto)
  waypointDetailsInput: WaypointDetailsDto
}

export class UpdateWaypointDto extends UpdateWaypointInput {}

export class DeleteWaypointDto extends DeleteWaypointInput {}
