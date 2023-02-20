import { Player } from "./player1.interface";
import { FieldPosition } from "./player1.interface";
// export type FieldPosition = [number , number];

export function generateRandomNumber(max : number) : number {
     return Math.floor(Math.random() * max);
} 

export function simulateShotOnGoal() : boolean {
    const result = generateRandomNumber(2);
    return result === 0;
}

export function simulatePass(player : Player , fieldPosition : FieldPosition) : void{
     const result = generateRandomNumber(2);
     const isSuccess = result === 0;
       if(isSuccess){
            console.log(`${player.name} , ${fieldPosition} successFully paases`);
       }else{
        console.log(`${player.name} , ${fieldPosition} not a poss :(`);
       }
}
