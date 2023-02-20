import { simulatePass, simulateShotOnGoal } from "./functioans";
import { Player } from "./player1.interface";
import { FieldPosition } from "./player1.interface";

type FootballEvents = "ShotOnGoal" | "SuccessfullPass" ;

export class FootballGame{

    homeTeam : Player[] = [];
    awayTeam : Player[] = [];
    duratioan : number = 120 ;
    events : FootballEvents[] = [];
  
    isPlaying(){
        console.log("started Football game ....");
    }

    getRandomPlayer(playerScore : Player)  {
         Math.floor(Math.random() * playerScore.score);
    }

    getRandomFieldPosition(fieldPosition : FieldPosition) {
         Math.floor(Math.random() * fieldPosition[0])
    }

    updateGame(player : Player , point : number , event : FootballEvents){
        player.score += point ;
        this.events.push(event);
    }

    PrintEvents() {
       console.log('List of events:');
        this.events.forEach((event, index) => {
       console.log(`${index + 1}. ${event}`);
    })
    }
}
  const team1 = [
    new Player('Cristiano Ronaldo', 'Forward'),
    new Player('Lionel Messi', 'Forward'),
    new Player('Neymar Jr.', 'Midfield'),
    new Player('Virgil van Dijk', 'Defense'),
    new Player('Manuel Neuer', 'Goalkeeper')
    ];
    const team2 = [
    new Player('Robert Lewandowski', 'Forward'),
    new Player('Kylian Mbappe', 'Forward'),
    new Player('Kevin De Bruyne', 'Midfield'),
    new Player('Sergio Ramos', 'Defense'),
    new Player('Alisson Becker', 'Goalkeeper')
    ];
    const game = new FootballGame(team1 ,team2 , 3);
    
    while(game.isPlaying()){
        const PassSuccess = simulatePass( game.getRandomPlayer() , game.getRandomFieldPosition() );
            if(PassSuccess){
                const ShotSuccess = simulateShotOnGoal();
                if(ShotSuccess){
                    game.updateGame( name , 1 , 'ShotOnGoal' );
                }else{
                    console.log("shot missed :(");
                }
            } 
    }

