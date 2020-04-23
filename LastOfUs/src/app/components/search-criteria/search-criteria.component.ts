import { Component, OnInit } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
import { ActivatedRoute } from '@angular/router';
import { Catergories } from 'src/app/interfaces/catergories';
import { Countries } from 'src/app/interfaces/countries';
import { States } from 'src/app/interfaces/states';
import { PAGESIZE } from 'src/app/data/page-size';
import { COUNTRIES } from 'src/app/data/countries';
import { STATES } from 'src/app/data/state';
import { CATEGORIES } from 'src/app/data/catergories';


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

  states: States[] = STATES;
  countries: Countries[] = COUNTRIES;
  pageSize: number[] = PAGESIZE;
  categories: Catergories[] = CATEGORIES;

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
