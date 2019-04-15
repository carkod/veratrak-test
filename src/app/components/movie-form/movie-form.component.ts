import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styles: [],
})
export class MovieFormComponent implements OnInit {

  model = {
    title: '',
    director: '',
    release: '',
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
  }

}
