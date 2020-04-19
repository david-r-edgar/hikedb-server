
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum HikeType {
    DayHike = "DayHike",
    Camping = "Camping",
    Hostelling = "Hostelling",
    NightHike = "NightHike",
    GuidedTour = "GuidedTour",
    Challenge = "Challenge"
}

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

export class CreateHikeInput {
    name?: string;
    startDate?: Date;
    finishDate?: Date;
    type?: HikeType;
    tags?: string[];
    segments?: CreateSegmentInput[];
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
    hikeName?: string;
    tripName?: string;
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
    hikeName?: string;
    tripName?: string;
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

export class CreateTripInput {
    name?: string;
    startDate?: Date;
    finishDate?: Date;
    hikes?: CreateHikeInput[];
}

export class Hike {
    id?: string;
    name?: string;
    startDate?: Date;
    finishDate?: Date;
    type?: HikeType;
    tags?: string[];
    segments?: Segment[];
}

export abstract class IQuery {
    abstract getHikes(): Hike[] | Promise<Hike[]>;

    abstract hike(id: string): Hike | Promise<Hike>;

    abstract getSegments(): Segment[] | Promise<Segment[]>;

    abstract segment(id: string): Segment | Promise<Segment>;

    abstract getTrips(): Trip[] | Promise<Trip[]>;

    abstract trip(id: string): Trip | Promise<Trip>;

    abstract getWaypoints(): Waypoint[] | Promise<Waypoint[]>;

    abstract waypoint(id: string): Waypoint | Promise<Waypoint>;
}

export abstract class IMutation {
    abstract createHike(createHikeInput?: CreateHikeInput): Hike | Promise<Hike>;

    abstract createSegment(createSegmentInput?: CreateSegmentInput): Segment | Promise<Segment>;

    abstract updateSegment(updateSegmentInput?: UpdateSegmentInput): Segment | Promise<Segment>;

    abstract deleteSegment(deleteSegmentInput?: DeleteSegmentInput): boolean | Promise<boolean>;

    abstract insertWaypoint(insertWaypointInput?: InsertWaypointInput): Segment | Promise<Segment>;

    abstract updateWaypoint(updateWaypointInput?: UpdateWaypointInput): Segment | Promise<Segment>;

    abstract deleteWaypoint(deleteWaypointInput?: DeleteWaypointInput): Segment | Promise<Segment>;

    abstract createTrip(createTripInput?: CreateTripInput): Trip | Promise<Trip>;
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
    hikeName?: string;
    tripName?: string;
}

export class Trip {
    id?: string;
    name?: string;
    startDate?: Date;
    finishDate?: Date;
    hikes?: Hike[];
}
