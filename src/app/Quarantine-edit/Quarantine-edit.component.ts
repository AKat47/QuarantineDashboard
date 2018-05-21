import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Quarantine-edit',
  templateUrl: './Quarantine-edit.component.html',
  styleUrls: ['./Quarantine-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuarantineEditComponent implements OnInit {

  Quarantine: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQuarantine(this.route.snapshot.params['id']);
  }

  getQuarantine(id) {
    this.http.get('/Quarantine/'+id).subscribe(data => {
      this.Quarantine = data;
    });
  }

  updateQuarantine(id) {
    this.Quarantine.updated_date = Date.now();
    this.http.put('/Quarantine/'+id, this.Quarantine)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/Quarantine-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
