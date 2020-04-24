import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
import { ActivatedRoute } from '@angular/router';
import { Catergories } from 'src/app/interfaces/catergories';
import { Countries } from 'src/app/interfaces/countries';
import { States } from 'src/app/interfaces/states';
import { PAGESIZE } from 'src/app/data/page-size';
import { COUNTRIES } from 'src/app/data/countries';
import { STATES } from 'src/app/data/state';
import { CATEGORIES } from 'src/app/data/catergories';
import { BucketListService } from 'src/app/services/bucket-list.service';


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
  segment = '';
  searchTerm: string;
  genreId = '';
  stateId = '';
  getCategoryId: string;
  eventPost: number = 25;

  states: States[] = STATES;
  countries: Countries[] = COUNTRIES;
  pageSize: number[] = PAGESIZE;
  categories: Catergories[] = CATEGORIES;
  segments: any;
  show: any;

  filterResults: string[];

  @Output() filterSearch = new EventEmitter<string[]>()


  constructor(private api: TMapiService, private route: ActivatedRoute, ) { }

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
    })
  }

  opValue(g) {
    console.log(g);
  }

  toggleDropDown(checked) {
    this.show = checked.name;
    console.log(this.show);

  }

  searchKeys() {
    this.api.searchKeys(this.searchTerm).subscribe((data) => (this.filterResults = data['_embedded'].events));
    console.log('SearchKeys working?');
    return this.filterSearch.emit(this.filterResults);
  }

  getGenreId(value) {
    this.genreId = value;
  }

  getStateId(value) {
    this.stateId = value;
  }

  filterState(state): any {
  }


}

