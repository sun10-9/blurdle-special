import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  activeRow: number = 1;
  numberOfRows: number[] = [];
  gameDetails: any;
  gameisOver: boolean = false;
  numberOfLetters: number;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // set number of Rows;
    this.gameService.getWord().subscribe(() => {
      this.gameDetails = this.gameService.getGameDetails();
      this.numberOfRows = Array(this.gameDetails.rows).fill(0).map((x, i) => i);
      this.numberOfLetters = this.gameDetails.number;
    })
    
  }

  isGameOver() {
    // this.
  }



}
