import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Data } from 'app/models/data.model';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string | undefined;
  public valuesList: Array<Data> = [];
  public valuesListGenres: Array<Data> = [];
  private routeSub!: Subscription;
  private valueSub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  //First method callend when rendering
  ngOnInit(): void {
    this.routeSub = this.activateRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchValues('metacrit', params['game-search']);
      } else {
        this.searchValues('metacrit');
      }
      this.genreValues();
    });
  }

  searchValues(sort: string, search?: string): void {
    this.valueSub = this.httpService
      .getValuesList(sort, search,'games')
      .subscribe((values: APIResponse<Data>) => {
        this.valuesList = values.results;
        console.log(this.valuesList);
      });
  }
  searchByGenreValues(genre:string):void{
    this.valueSub = this.httpService
    .getValuesList(genre, '','games')
    .subscribe((values: APIResponse<Data>) => {
      this.valuesList = values.results;
      console.log(this.valuesList);
    });
  }

  genreValues(): void {
    this.valueSub = this.httpService
      .getValuesList('', '', 'genres')
      .subscribe((values: APIResponse<Data>) => {
        this.valuesListGenres = values.results;
        console.log(this.valuesListGenres);
      });
  }

  openValueDetails(id: string): void {
    //Navigate to a page and pass an id
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    if (this.valueSub) {
      this.valueSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
