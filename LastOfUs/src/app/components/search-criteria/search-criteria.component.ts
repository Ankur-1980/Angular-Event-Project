import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
import { Categories } from 'src/app/interfaces/categories';
import { STATES } from '../../data/states';
import { PAGESIZE } from '../../data/page-size';
import { COUNTRIES } from 'src/app/data/countries';
import { CATEGORIES } from 'src/app/data/categories';
import { States } from 'src/app/interfaces/states';
import { Countries } from 'src/app/interfaces/countries';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  states: States[] = STATES;
  countries: Countries[] = COUNTRIES;
  pageSize: number[] = PAGESIZE;
  segments: any;
  show: any;

  filterForm: FormGroup;
  formValues: string[];
  filterResults: string[];

  searchTerm: string;
  genreID: string = '';
  stateID: string = '';
  posts: number = 25;
  countryID: string = '';
  segmentID: string = '';

  @Output() filterSearch = new EventEmitter<string[]>();

  constructor(private formBuilder: FormBuilder, private api: TMapiService) {}

  ngOnInit(): void {
    this.api.getClassifications().subscribe((data) => {
      this.segments = data['_embedded'].classifications.filter(
        (x) => x.segment
      );
      this.segments.splice(4, 1);

      this.segments = data['_embedded'].classifications
        .filter((x) => x.segment)
        .map((x) => {
          const { _embedded } = x.segment;
          return _embedded.genres;
        });
      this.misc = this.segments[0];
      this.sports = this.segments[1];
      this.music = this.segments[2];
      this.artsTheatre = this.segments[3];
      this.films = this.segments[4];
    });

    this.filterForm = this.formBuilder.group({
      searchBar: [''],
      categoryID: [''],
      genreID: [''],
      stateID: [''],
      countryID: [''],
      numberOfPosts: ['25'],
    });
  }
  searchKeywords() {
    this.api
      .keyWordsSearch(this.searchTerm)
      .subscribe((data) => (this.filterResults = data['_embedded'].events));

    return this.filterSearch.emit(this.filterResults);

    // this.filterForm.valueChanges.subscribe((value) => {
    //   this.searchFilter();
    // });

    // this.filterForm.valueChanges.subscribe((value) => console.log(value));
  }

  optionValue(x) {
    console.log(x);
  }

  toggleDropDown(checked) {
    this.show = checked.name;
    console.log(checked.id);

    console.log(this.show);
  }

  searchFilter() {
    this.api.filterSearch(this.filterForm.value).subscribe((data) => {
      this.filterSearch.emit(data['_embedded'].events);
    });
  }

  resetForm() {
    this.filterForm.reset();
  }
}
