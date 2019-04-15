import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styles: [],
})
export class MovieFormComponent implements OnInit {

  @Input() details;

  constructor() {
  }

  ngOnInit() {
  }


  onSubmit(form) {
    console.log(form);
  }

}
