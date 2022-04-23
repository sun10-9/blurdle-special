import { Component, Input, OnInit } from '@angular/core';
import { Letter, LetterStatus } from 'src/app/models/words';
import { LetterService } from 'src/app/services/letter.service';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  letter: Letter;
  @Input() rowNumber: number;
  @Input() numberOfLetters: number;
  numberOfLettersArray: number[];
  
  constructor() { }

  ngOnInit(): void {
    this.letter = {
      letter: '',
      status: LetterStatus.EMPTY
    } 

    this.numberOfLettersArray = Array(this.numberOfLetters).fill(0).map((x, i) => i);
    
  }

}
