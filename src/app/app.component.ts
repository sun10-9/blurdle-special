import { Component } from '@angular/core';
import { FiveLetterWords, FourLetterWords, SevenLetterWords, SixLetterWords } from './models/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: boolean = true;
  title = 'Blurdle';

  constructor() { }

  ngOnInit(): void {
  }
}
