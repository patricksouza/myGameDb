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
export class HomeComponent implements OnInit {
  public sort: string | undefined;
  public valuesList: Array<Data> = [];

  constructor(
    private httpService: HttpService,
    private activateRoute: ActivatedRoute
  ) {}

  //First method callend when rendering
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.searchGames('metacrit', params['game-search']);
    });
  }

  searchGames(sort: string, search?: string): void {
    this.httpService
      .getValuesList(sort)
      .subscribe((values: APIResponse<Data>) => {
        this.valuesList = values.results;
        console.log(this.valuesList);
      });
  }
}
