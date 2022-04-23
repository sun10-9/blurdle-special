import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  href: string;
  gameId: string | null;

  constructor(
    private gameService: GameService
  ) { }
  

  ngOnInit(): void {
    console.log(window.location.href);

    this.gameId = this.getGameId();
    
  }

  setGameParameters(str: string) {
    console.log('hi1 - start!');
    this.gameService.getNewWordToGuess(str);
  }

  getGameId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('game');
  }

  startGame() {
    this.setGameParameters(this.gameId!);
  }

}
