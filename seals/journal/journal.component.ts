import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public valid = true;
  public blogs = [];

  constructor(
    public fb: FormBuilder,
    public http: HttpClient,
    public router: Router
    ) { }

  ngOnInit() {
    this.getData();

    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  getData() {
    this.http.get('http://localhost:3000/getData')
      .subscribe((result: any) => {
        console.log(result);
        this.blogs = result.data;
      }, (err) => {
        console.log(err);
      });
  }

  onSubmit() {
    if (this.form.valid) {
      this.valid = true;
      this.sendData();
    } else {
      this.valid = false;
      console.log('erros');
    }
  }

  sendData() {
    this.submitted = true;

    this.http.post('http://localhost:3000/addNewBlog', this.form.value)
      .subscribe((result) => {
        this.submitted = false;
        this.form.reset();
        this.getData();
        console.log(result);
      }, (err) => {
        this.submitted = false;
        console.log(err);
      });
  }

  viewBlog(id) {
    console.log(id);
    this.router.navigate(['/blogs', id]);
  }

}

