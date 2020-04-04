
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTripInput {
    name?: string;
}

export abstract class IQuery {
    abstract getTrips(): Trip[] | Promise<Trip[]>;

    abstract trip(id: string): Trip | Promise<Trip>;
}

export abstract class IMutation {
    abstract createTrip(createTripInput?: CreateTripInput): Trip | Promise<Trip>;
}

export class Trip {
    id?: number;
    name?: string;
}
