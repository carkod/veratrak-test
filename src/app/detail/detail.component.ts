import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  filmData: any;
  constructor(private films: FilmsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.filmData = this.films.getSingleFilm(id);
    });
  }

}
