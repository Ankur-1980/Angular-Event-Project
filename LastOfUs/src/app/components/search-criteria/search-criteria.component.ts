import { Component, OnInit } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
import { Categories } from 'src/app/interfaces/categories';

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
    return this.api.keyWordsSearch(x).subscribe((data) => console.log(data));
  }

  optionValue(x) {
    console.log(x);
  }
}
