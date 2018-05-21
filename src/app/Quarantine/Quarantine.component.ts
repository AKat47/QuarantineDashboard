import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Quarantine',
  templateUrl: './Quarantine.component.html',
  styleUrls: ['./Quarantine.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuarantineComponent implements OnInit {

  Quarantines: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/Quarantine').subscribe(data => {
      console.log(data);
      this.Quarantines = data;
    });
  }

}
