
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

export class CreateHikeInput {
    name?: string;
    startDate?: Date;
    finishDate?: Date;
    type?: HikeType;
    tags?: string[];
    segments?: CreateSegmentInput[];
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
    tags?: string[];
    comments?: string;
    waypoints?: WaypointDetailsInput[];
}

export class UpdateSegmentInput {
    id?: string;
    patch?: CreateSegmentInput;
}

export class CreateTripInput {
    name?: string;
    startDate?: Date;
    finishDate?: Date;
    hikes?: CreateHikeInput[];
}

export class WaypointDetailsInput {
    name?: string;
    lat?: number;
    lng?: number;
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

    abstract updateSegment(updateSegmentInput?: UpdateSegmentInput): Segment | Promise<Segment>;

    abstract createTrip(createTripInput?: CreateTripInput): Trip | Promise<Trip>;
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
    tags?: string[];
    comments?: string;
    waypoints?: Waypoint[];
}

export class Trip {
    id?: string;
    name?: string;
    startDate?: Date;
    finishDate?: Date;
    hikes?: Hike[];
}

export class Waypoint {
    id?: string;
    name?: string;
    lat?: number;
    lng?: number;
}
