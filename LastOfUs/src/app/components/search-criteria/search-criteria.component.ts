import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  searchTerm: string;
  getCategoryID: string;
  stateID: string;

  states: States[] = STATES;
  countries: Countries[] = COUNTRIES;
  pageSize: number[] = PAGESIZE;
  categories: Categories[] = CATEGORIES;
  segments: any;
  show: any;
  filterResults: string[];

  @Output() filterSearch = new EventEmitter<string[]>();
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
    this.api
      .keyWordsSearch(this.searchTerm)
      .subscribe((data) => (this.filterResults = data['_embedded'].events));

    return this.filterSearch.emit(this.filterResults);
  }

  optionValue(x) {
    console.log(x);
  }

  toggleDropDown(checked) {
    this.show = checked.name;
    console.log(this.show);
  }
  filterList(paraMeter) {}

  getCategoryId(value) {
    this.genre(value);
  }

  getStateId(value) {
    this.stateID = value;
    console.log(this.stateID);
  }
  getGenreId(value) {
    this.genreID = value;
    this.searchFilter();
  }

  getCountry(value) {}
  searchFilter() {
    this.api
      .filterSearch(
        this.searchTerm,
        this.genreID,
        this.stateID,
        this.posts,
        this.countryID,
        this.segment
      )
      .subscribe((data) => (this.filterResults = data['_embedded'].events));
    return this.filterSearch.emit;
  }
}
