export type PlayerPosition = "Forward" | "Midfield" | "Defense" | "GOalkeeper" ;
export type FieldPosition = [number , number];

export interface Player {
    name : string ;
    position : PlayerPosition ;
    score : number ;
    fieldPosition? : FieldPosition ;
}