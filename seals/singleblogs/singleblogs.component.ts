import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-blog',
  templateUrl: './singleblogs.component.html',
  styleUrls: ['./singleblogs.component.css']
})
export class SingleblogsComponent implements OnInit {
  public id;
  public journal;
  data:any;
  constructor(
    public route: ActivatedRoute,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe((result) => {
      console.log(result.id);
      this.id = result.id;
      this.getJournal();
    });
  }

  getJournal() {
    this.http.post('http://localhost:3000/getJournal', {id: this.id} ).subscribe((res:any) => {
      this.journal = res.data;
    })
  }

}