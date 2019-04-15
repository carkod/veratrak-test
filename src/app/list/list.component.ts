import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data: any;

  constructor(private films: FilmsService) { }

  ngOnInit() {
    this.films.getFilms().subscribe(res => {
      const { results } = res;
      this.data = results;
    })
  }

}
