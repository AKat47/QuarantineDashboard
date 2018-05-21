import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Quarantine-create',
  templateUrl: './Quarantine-create.component.html',
  styleUrls: ['./Quarantine-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuarantineCreateComponent implements OnInit {

  Quarantine = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveQuarantine() {
    this.http.post('/Quarantine', this.Quarantine)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/Quarantine-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
