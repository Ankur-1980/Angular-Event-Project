import { Component, OnInit } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
import { Categories } from 'src/app/interfaces/categories';
import { STATES } from '../../data/states';
import { PAGESIZE } from '../../data/page-size';
import { COUNTRIES } from 'src/app/data/countries';
import { CATEGORIES } from 'src/app/data/categories';
import { States } from 'src/app/interfaces/states';
import { Countries } from 'src/app/interfaces/countries';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  misc: Categories[];
  sports: Categories[];
  music: Categories[];
  artsTheatre: Categories[];
  films: Categories[];
  searchTerm: string;

  states: States[] = STATES;
  countries: Countries[] = COUNTRIES;
  pageSize: number[] = PAGESIZE;
  categories: Categories[] = CATEGORIES;
  segments: any;
  show: any;

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

    this.api.getClassifications().subscribe((data) => {
      this.segments = data['_embedded'].classifications.filter(
        (x) => x.segment
      );
      this.segments.splice(4, 1);
    });
  }

  searchKeywords() {
    return this.api
      .keyWordsSearch(this.searchTerm)
      .subscribe((data) => console.log(data));
  }

  optionValue(x) {
    console.log(x);
  }

  toggleDropDown(checked) {
    this.show = checked.name;
    console.log(this.show);
  }
}
