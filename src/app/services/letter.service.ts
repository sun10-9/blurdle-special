import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LetterStatus } from '../models/words';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class LetterService { 
  currentLetterPosition: number = 0;
  currentRow: number = 0;
  currentWord: string = '';
  private _wordArray: any[] = [];
  private _receiveLetter: Subject<any> = new Subject<any>();
  private _receiveStatus: Subject<any> = new Subject<any>();

  constructor(private gameService: GameService) {
    this.gameService.getWord().subscribe(word => {
      this.setWordArray(word);
    })
  }

  sendLetter(key: string) {
    if (key === 'Backspace') {
      this.previousLetter();
      this.addLetterToCurrentWord(key);
      this._receiveLetter.next({
        row: this.currentRow,
        letterPos: this.currentLetterPosition,
        key: ''
      });
    } else if (key === 'Enter') {
      this.checkUserInput();
    } else if (this.isDesirableInput(key))  {
      this.addLetterToCurrentWord(key.toUpperCase());
      this._receiveLetter.next({
        row: this.currentRow,
        letterPos: this.currentLetterPosition,
        key: key.toUpperCase()
      });
      this.nextLetter();
    }
  }

  sendStatus(word: string) {
    // iterate through userInput
    for (const [index, letter] of [...word].entries()) {
      const status = this.getLetterStatus(letter, index);
      const letterStatus = {
        row: this.currentRow,
        letterPos: index,
        status
      }
      // console.log('hi1 - status:', status);

      this._receiveStatus.next(letterStatus);
    }
  }
   
  getLetter() {
    return this._receiveLetter.asObservable();
  }

  getStatus() {
    return this._receiveStatus.asObservable();
  }

  isActiveSquare(row: number, pos: number): boolean {
    return this.currentRow === row && this.currentLetterPosition === pos;
  }

  checkUserInput() {
    if (this.hasEnoughLetters(this.currentWord)) {
      if (this.doesWordExist(this.currentWord)) {
        if (this.isWordCorrect(this.currentWord)) {
          // Game is Won
          this.sendStatus(this.currentWord);
          setTimeout(() => {
            this.gameService.gameisWon(true);
          }, 2000);
          
        } else {
          console.error('Try Again');
          this.sendStatus(this.currentWord);
          this.nextRow();
          if (!this.hasMoreRows()) {
            setTimeout(() => {
              this.gameService.gameisWon(false);
            }, 2000);
          }
        }
      } else {
        console.error('Word does not exist');
      }
    } else {
      console.error('Not Enough Letters');
    }
  }

  private getLetterStatus(letterToCheck: string, index: number): string {
    // console.log('----------------------------');
    // console.log('hi6 - checking the letter', letterToCheck);
    // console.log('hi6 - does it exist in word?', this.isInWord(letterToCheck));
    // console.log('hi6 - is it in the array:', this._wordArray, '?', this.isInWordArray(letterToCheck));
    // console.log('hi6 - is it in correct position?', this.isLetterInCorrectPosition(letterToCheck, index));
    // console.log('----------------------------');
    if (this.isInWord(letterToCheck)) { // Does letter exist in word?
      if (this.isInWordArray(letterToCheck)) { // Does letter exist in word Array (duplicates check)
        if (this.isLetterInCorrectPosition(letterToCheck, index)) { // is it in the correct position?
          this.removeLetter(letterToCheck);
          return LetterStatus.GREEN
        } else {
          this.removeLetter(letterToCheck);
          return LetterStatus.YELLOW;
        }
      } else {
        return LetterStatus.GREY;
      }
    } else {
      return LetterStatus.GREY;
    }
  }

  // private setWordArray(word: string) {
  //   this._wordArray = word.split('');
  // }

  private setWordArray(word: string) {
    let wordSplit = word.split('');

    wordSplit.forEach((letter, i) => {
      this._wordArray[i] = { 
        letter, 
        hit: false 
      }
    })
  }

  // private removeLetter(letterToRemove: string) {
  //   this._wordArray = this._wordArray.filter((letter) => letter.toUpperCase() !== letterToRemove.toUpperCase());
  // }

  private removeLetter(letterToRemove: string) {
    let hitOnce = false;
    this._wordArray =
      this._wordArray.map((letterObj) => {
        if (!hitOnce && letterObj.letter.toUpperCase() === letterToRemove.toUpperCase()) {
          letterObj.hit = true;
          hitOnce = true;
        }
        return letterObj;
      });
  }

  private isInWord(letterToCheck: string) {
    return this.gameService.wordToGuess.toUpperCase().includes(letterToCheck.toUpperCase());
  }

  // private isInWordArray(letterToCheck: string) {
  //   return this._wordArray.find((letter) => letter.toUpperCase() === letterToCheck.toUpperCase());
  // }

  private isInWordArray(letterToCheck: string) {
    return this._wordArray.find((letterObj) => letterObj.letter.toUpperCase() === letterToCheck.toUpperCase() && !letterObj.hit);
  }

  private isLetterInCorrectPosition(letterToCheck: string, index: number): boolean {
    return this.getIndexOfLetterInWord(letterToCheck) === index;
  }

  // private getIndexOfLetterInWord(letterToCheck: string) { // NEEDS TO CHANGE: FIND OTHER INDEXES OF FOUND LETTERS
  //   return this.gameService.wordToGuess.split('').findIndex((letter) => letterToCheck.toUpperCase() === letter.toUpperCase());
  // }
  private getIndexOfLetterInWord(letterToCheck: string) { // NEEDS TO CHANGE: FIND OTHER INDEXES OF FOUND LETTERS
    return this._wordArray.findIndex((letterObj: any ) => letterToCheck.toUpperCase() === letterObj.letter.toUpperCase() && !letterObj.hit);
  }

  private nextLetter() {
    if (this.currentLetterPosition < this.gameService.numberOfLetters) {
      this.currentLetterPosition++;
    }
  }

  private previousLetter() {
    if (this.currentLetterPosition <= this.gameService.numberOfLetters &&
      this.currentLetterPosition > 0) {
      this.currentLetterPosition--;
    }
  }

  private nextRow() {
    if (this.hasMoreRows()) {
      this.currentRow++;
      this.currentLetterPosition = 0;
      this.currentWord = '';
      this.setWordArray(this.gameService.wordToGuess);
    }
  }

  private isDesirableInput(input: string): boolean {
    if (input.length > 1) {
      return false;
    }

    const letter = input.charCodeAt(0);
    return (
      (letter >= 97 && letter <= 122) ||
      (letter >= 65 && letter <= 90)
    )
  }  
  
  private addLetterToCurrentWord(letter: string): void {
    if (this.currentLetterPosition >= this.gameService.numberOfLetters) {
      return;
    }
    
    if (letter === 'Backspace') {
      this.currentWord = this.currentWord.slice(0, -1); 
    } else {
      this.currentWord = this.currentWord.concat(letter);
    }
  }

  private hasEnoughLetters(word: string): boolean {
    return word.length === this.gameService.numberOfLetters;
  }

  private isWordCorrect(word: string): boolean {
    return word.toUpperCase() === this.gameService.wordToGuess.toUpperCase();
  }

  private doesWordExist(word: string): boolean {
    return true;
  }

  private hasMoreRows(): boolean {
    return this.currentRow < this.gameService.numberOfRows;
  }
}
