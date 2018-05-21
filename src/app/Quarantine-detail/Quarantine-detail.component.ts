import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Quarantine-detail',
  templateUrl: './Quarantine-detail.component.html',
  styleUrls: ['./Quarantine-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuarantineDetailComponent implements OnInit {

  Quarantine = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getQuarantineDetail(this.route.snapshot.params['id']);
  }

  getQuarantineDetail(id) {
    this.http.get('/Quarantine/'+id).subscribe(data => {
      this.Quarantine = data;
    });
  }

  deleteQuarantine(id) {
    this.http.delete('/Quarantine/'+id)
      .subscribe(res => {
          this.router.navigate(['/Quarantines']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
