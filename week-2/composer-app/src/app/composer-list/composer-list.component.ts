import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Composer[]
  constructor() {
    this.composers = [
      new Composer("Antonio Vivaldi", "Classical"),
      new Composer("Joe Schmo", "jazz"),
      new Composer("Ed Sheeran", "folk"),
      new Composer("Elvis", "rock"),
      new Composer("Ludwig Beethoven", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}

class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}
