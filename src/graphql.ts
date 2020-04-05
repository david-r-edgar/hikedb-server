
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
}

export class CreateTripInput {
    name?: string;
    startDate?: Date;
    finishDate?: Date;
    hikes?: CreateHikeInput[];
}

export class Hike {
    id?: number;
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
}

export abstract class IMutation {
    abstract createHike(createHikeInput?: CreateHikeInput): Hike | Promise<Hike>;

    abstract createSegment(createSegmentInput?: CreateSegmentInput): Segment | Promise<Segment>;

    abstract createTrip(createTripInput?: CreateTripInput): Trip | Promise<Trip>;
}

export class Segment {
    id?: number;
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
}

export class Trip {
    id?: number;
    name?: string;
    startDate?: Date;
    finishDate?: Date;
    hikes?: Hike[];
}
