import { Component, Input, OnInit } from '@angular/core';
import { iif, of } from 'rxjs';
import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { Letter, LetterStatus } from 'src/app/models/words';
import { LetterService } from 'src/app/services/letter.service';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() squareLetter: Letter = { letter: '', status: LetterStatus.EMPTY };
  @Input() squarePosition: number = -1;
  @Input() rowNumber: number = -1;

  letter: string;
  status: string;
  
  constructor(private letterService: LetterService) { }

  ngOnInit(): void {
    this.letterService.getLetter().pipe(
      mergeMap(letter => 
        iif(() => 
          this.letterService.isActiveSquare(this.rowNumber, this.squarePosition),
            of(letter)
        )
      )
    ).subscribe(letter => {
      if (letter) {
        this.squareLetter.letter = letter.key;
        this.rowNumber = letter.row;
        this.squarePosition = letter.letterPos;
        this.letter = letter.key;
      }
    });

    this.letterService.getStatus().pipe(
      mergeMap(letterStatus =>
        iif(() =>
          letterStatus.row === this.rowNumber && letterStatus.letterPos === this.squarePosition,
          of(letterStatus)
        )
      )
    ).subscribe( status => {
      if (status) {
        this.status = status.status;
      }
    })
  }

}
