import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilmsService } from 'src/app/films.service';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styles: ['.container { display: flex; justify-content: space-between } .right, .left { width: 50%; }'],
})
export class MovieFormComponent implements OnInit {

  @Input() data;
  form: FormGroup;

  constructor(private films: FilmsService) {
    this.createForm();
  }

  ngOnInit() {
    this.data.subscribe(data => {
      this.form.patchValue({
        title: data.title,
        director: data.director,
        release: data.release_date,
      });
    });

  }

  createForm() {
    this.form = new FormGroup({
      'title': new FormControl(''),
      'director': new FormControl(''),
      'release': new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.form.value);
    const { value } = this.form;
    this.films.postSingleFilm(value).subscribe(response => {
      alert(`Post success!`);
    });
  }

}
