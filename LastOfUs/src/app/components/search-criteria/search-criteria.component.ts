import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
<<<<<<< HEAD
import { Catergories } from 'src/app/interfaces/catergories';
import { Countries } from 'src/app/interfaces/countries';
import { States } from 'src/app/interfaces/states';
import { PAGESIZE } from 'src/app/data/page-size';
import { COUNTRIES } from 'src/app/data/countries';
import { STATES } from 'src/app/data/state';
import { CATEGORIES } from 'src/app/data/categories';


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

  countryId = '';
  segmentId = '';
  searchTerm: string;
  genreId = '';
  stateId = '';
  categoryId: string;
  eventPost: number = 25;
  events;
=======
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
>>>>>>> origin/master

  states: States[] = STATES;
  countries: Countries[] = COUNTRIES;
  pageSize: number[] = PAGESIZE;
<<<<<<< HEAD
  categories: Catergories[] = CATEGORIES;
=======
  categories: Categories[] = CATEGORIES;
>>>>>>> origin/master
  segments: any;
  show: any;

  filterResults: string[];

<<<<<<< HEAD
  @Output() filterSearch = new EventEmitter<string[]>()


  constructor(private api: TMapiService) { }
=======
  searchTerm: string;
  genreID: string = '';
  stateID: string = '';
  posts: number = 25;
  countryID: string = '';
  segmentID: string = '';

  @Output() filterSearch = new EventEmitter<string[]>();

  constructor(private api: TMapiService) {}
>>>>>>> origin/master

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
<<<<<<< HEAD

=======
>>>>>>> origin/master
    this.api.getClassifications().subscribe((data) => {
      this.segments = data['_embedded'].classifications.filter(
        (x) => x.segment
      );
      this.segments.splice(4, 1);
<<<<<<< HEAD
    })
  }

  opValue(g) {
    console.log(g);
=======
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
>>>>>>> origin/master
  }

  toggleDropDown(checked) {
    this.show = checked.name;
<<<<<<< HEAD
    console.log(this.show);

  }

  searchKeys() {
    this.api.searchKeys(this.searchTerm).subscribe((data) => (this.filterResults = data['_embedded'].events));
    return this.filterSearch.emit(this.filterResults);
  }

  getGenreId(value) {
    this.genreId = value;
=======
    console.log(checked.id);

    console.log(this.show);
  }

  getCategoryId(value) {
    this.segmentID = value;
>>>>>>> origin/master
    this.searchFilter();
  }

  getStateId(value) {
<<<<<<< HEAD
    this.stateId = value;
    this.searchFilter();
  }

  getCategoryId(value) {
    this.segmentId = value;
    this.searchFilter();
  }

  getCountryId(value) {
    this.countryId = value;
=======
    this.stateID = value;
    console.log(this.stateID);
    this.searchFilter();
  }

  getGenreID(value) {
    this.genreID = value;
    this.searchFilter();
  }

  getCountryID(value) {
    this.countryID = value;
>>>>>>> origin/master
    this.searchFilter();
  }

  searchFilter() {
<<<<<<< HEAD
    this.api.filterSearch(this.genreId, this.stateId, this.eventPost, this.countryId, this.segmentId
    ).subscribe((data) => {
      this.filterResults = data['_embedded'];
      console.log('response', data);
    });
=======
    this.api
      .filterSearch(
        this.genreID,
        this.stateID,
        this.posts,
        this.countryID,
        this.segmentID
      )
      .subscribe((data) => (this.filterResults = data['_embedded'].events));
>>>>>>> origin/master

    return this.filterSearch.emit(this.filterResults);
  }
}
