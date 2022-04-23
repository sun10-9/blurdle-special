import { Component, HostListener, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { LetterService } from 'src/app/services/letter.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
    this.letterService.sendLetter(event.key);
  }
  
  constructor(
    private letterService: LetterService,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

}
