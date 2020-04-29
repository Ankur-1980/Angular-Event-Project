import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
import { Categories } from 'src/app/interfaces/categories';
import { STATES } from '../../data/states';
import { PAGESIZE } from '../../data/page-size';
import { COUNTRIES } from 'src/app/data/countries';

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

  pageSize: string[] = PAGESIZE;

  segments: any;
  filterForm: FormGroup;
  formValues: string[];

  categorySwitch = '';

  @Output() filterSearch = new EventEmitter<string[]>();

  constructor(private fb: FormBuilder, private api: TMapiService) {}

  ngOnInit(): void {
    this.api.getClassifications().subscribe((data) => {
      this.segments = data['_embedded'].classifications.filter(
        (x) => x.segment
      );
      this.segments.splice(4, 1);

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

    this.filterForm = this.fb.group({
      searchBar: [''],
      categoryID: [''],
      genreID: [''],
      stateID: [''],
      countryID: [''],
      numberOfPosts: ['20'],
    });
    // // testing for reactive form changes
    //     this.filterForm.valueChanges.subscribe((value) => console.log(value))
  }

  resetForm() {
    this.api.sendClickEvent();
    this.filterForm.reset();
  }

  searchFilter() {
    this.api.filterSearch(this.filterForm.value).subscribe((data) => {
      if (data._embedded) {
        this.filterSearch.emit(data['_embedded'].events);
      } else {
        this.filterSearch.emit([]);
      }
    });
  }
}
