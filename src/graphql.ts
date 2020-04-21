
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Transport {
    Train = "Train",
    Bus = "Bus",
    Taxi = "Taxi",
    Car = "Car",
    Bicycle = "Bicycle",
    Boat = "Boat"
}

export enum Accommodation {
    WildCamp = "WildCamp",
    Campsite = "Campsite",
    Hostel = "Hostel",
    MountainHut = "MountainHut",
    Bothy = "Bothy",
    Hotel = "Hotel",
    BedAndBreakfast = "BedAndBreakfast",
    Bivy = "Bivy"
}

export class WaypointDetailsInput {
    name?: string;
    lat?: number;
    lng?: number;
}

export class CreateSegmentInput {
    primaryDate?: Date;
    indexInDay?: number;
    startDate?: Date;
    finishDate?: Date;
    startLocation?: string;
    finishLocation?: string;
    route?: string;
    weather?: string;
    people?: string;
    lengthKm?: number;
    comments?: string;
    waypoints?: WaypointDetailsInput[];
    tags?: string[];
    hike?: string;
    trip?: string;
}

export class UpdateSegmentDetails {
    primaryDate?: Date;
    indexInDay?: number;
    startDate?: Date;
    finishDate?: Date;
    startLocation?: string;
    finishLocation?: string;
    route?: string;
    weather?: string;
    people?: string;
    lengthKm?: number;
    comments?: string;
    waypoints?: WaypointDetailsInput[];
    tags?: string[];
    hike?: string;
    trip?: string;
}

export class UpdateSegmentInput {
    id?: string;
    patch?: UpdateSegmentDetails;
}

export class DeleteSegmentInput {
    id?: string;
}

export class InsertWaypointInput {
    segmentId?: string;
    waypointDetailsInput?: WaypointDetailsInput;
    insertBefore?: string;
    insertAfter?: string;
}

export class DeleteWaypointInput {
    segmentId?: string;
    waypointId?: string;
}

export class UpdateWaypointInput {
    segmentId?: string;
    waypointId?: string;
    waypointDetailsInput?: WaypointDetailsInput;
}

export class Waypoint {
    id?: string;
    name?: string;
    lat?: number;
    lng?: number;
}

export class Segment {
    id?: string;
    primaryDate?: Date;
    indexInDay?: number;
    startDate?: Date;
    finishDate?: Date;
    startLocation?: string;
    finishLocation?: string;
    route?: string;
    weather?: string;
    people?: string;
    lengthKm?: number;
    comments?: string;
    waypoints?: Waypoint[];
    tags?: string[];
    hike?: string;
    trip?: string;
}

export abstract class IQuery {
    abstract getSegments(): Segment[] | Promise<Segment[]>;

    abstract segment(id: string): Segment | Promise<Segment>;

    abstract getWaypoints(): Waypoint[] | Promise<Waypoint[]>;

    abstract waypoint(id: string): Waypoint | Promise<Waypoint>;
}

export abstract class IMutation {
    abstract createSegment(createSegmentInput?: CreateSegmentInput): Segment | Promise<Segment>;

    abstract updateSegment(updateSegmentInput?: UpdateSegmentInput): Segment | Promise<Segment>;

    abstract deleteSegment(deleteSegmentInput?: DeleteSegmentInput): boolean | Promise<boolean>;

    abstract insertWaypoint(insertWaypointInput?: InsertWaypointInput): Segment | Promise<Segment>;

    abstract updateWaypoint(updateWaypointInput?: UpdateWaypointInput): Segment | Promise<Segment>;

    abstract deleteWaypoint(deleteWaypointInput?: DeleteWaypointInput): Segment | Promise<Segment>;
}
