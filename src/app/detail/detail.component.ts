import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  data: any;
  constructor(private films: FilmsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.films.getSingleFilm(id).subscribe(res => {
        this.data = res;
      })
    });
    
  }

}
