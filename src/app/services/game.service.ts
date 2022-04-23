import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FiveLetterWords, FourLetterWords, LengthOfWords, Letter, LetterStatus, SevenLetterWords, SixLetterWords } from '../models/words';
import { LetterService } from './letter.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  isOnMenu: boolean = true;
  numberOfLetters: number = 5;
  numberOfRows: number = 6;
  private wordChanged$: Subject<string> = new Subject<string>();
  private _wordToGuess: string = '';
  

  set wordToGuess(word: string) {
    this._wordToGuess = word;
    this.wordChanged$.next(word);
  }

  get wordToGuess() {
    return this._wordToGuess;
  }

  constructor() { }

  getWord() {
    return this.wordChanged$;
  }  

  onMenu(isMenu: boolean) {
    this.isOnMenu = isMenu;
  }

  getGameDetails() {
    return {
      number: this.numberOfLetters,
      rows: this.numberOfRows,
      word: this.wordToGuess
    }
  }

  gameisWon(won: boolean) {
    if (won) {
      window.alert(`GAME IS OVER! YOU WON!`);
    } else {
      window.alert(`GAME IS OVER! YOU LOST! THE WORD: ${this.wordToGuess}`);
    }
  }

  getNewWordToGuess(str: string) {
    /**
      Forme
      Braque
      Perspective
     */
    let word = '';
    
    switch (str) {
      case 'xoafl':
        word = 'Forme';
        break;
      case '13kfj':
        word = 'Braque';
        break;
      case 'eqfun':
        word = 'Perspective';
        break;
    }

    this.setGameDetails(word);
  }

  private setGameDetails(word: string) {
    // console.log('hi1 - CHOSEN WORD (', word.length, ',', word, ')');
    this.numberOfLetters = word.length;
    this.numberOfRows = this.numberOfLetters + 1;
    this.wordToGuess = word;
  }
  

  

  

}


