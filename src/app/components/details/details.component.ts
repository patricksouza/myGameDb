import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { HttpService } from 'app/services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  valueRating = 0;
  valueID!: string;
  value!: Data;
  routeSub!: Subscription;
  valueSub!: Subscription;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.valueID = params['id'];
      this.getValueDetails(this.valueID);
    });
  }
  getValueDetails(id: string): void {
    this.valueSub = this.httpService
      .getValueDetails(id)
      .subscribe((value: Data) => {
        this.value = value;
      });
  }
  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }
}
