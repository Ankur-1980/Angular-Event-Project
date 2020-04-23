import { Component, OnInit } from '@angular/core';
import { TMapiService } from 'src/app/services/tmapi.service';
import { Categories } from 'src/app/interfaces/categories';
import { STATES } from 'src/app/data/states';
import { PAGESIZE } from 'src/app/data/page-size';
import { COUNTRIES } from 'src/app/data/countries';
import { CATEGORIES } from 'src/app/data/categories';
import { Countries } from 'src/app/interfaces/countries';
import { States } from 'src/app/interfaces/states';
@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  sports: Categories[];
  music: Categories[];
  misc: Categories[];
  artsTheatre: Categories[];
  films: Categories[];

  states: States[] = STATES;
  countries: Countries[] = COUNTRIES;
  pageSize: number[] = PAGESIZE;
  categories: Categories[] = CATEGORIES;

  constructor(private api: TMapiService) {}

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
  searchKeywords(x) {
    console.log(x);
  }

  optionValue(x) {
    console.log(x);
  }
}
