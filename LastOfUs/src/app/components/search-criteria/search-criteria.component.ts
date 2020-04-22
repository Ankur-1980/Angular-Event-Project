import { Component, OnInit } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Catergories } from 'src/app/interfaces/catergories';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  misc: Catergories[];
  sports: Catergories[];
  artsTheatre: Catergories[];
  music: Catergories[];
  films: Catergories[];

  constructor(private api: TMapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getClassifications().subscribe((data) => {
      const genresArray = data['_embedded'].classifications
        .filter((x) => x.segment)
        .map((x) => {
          const { _embedded } = x.segment;
          return _embedded.genres;
        });
      this.misc = genresArray[0];
      this.sports = genresArray[1];
      this.music = genresArray[2];
      this.artsTheatre = genresArray[3];
      this.films = genresArray[5];
    });
  }

  searchKeys(x) {
    console.log(x);
  }

  opValue(g) {
    console.log(g);
  }
}
