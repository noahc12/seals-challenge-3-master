import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

public form: FormGroup;   

constructor(
public fb: FormBuilder
) {
  console.log('constructur run')
  const date = new Date();
 }

  ngOnInit() {
    this.form = this.fb.group({
      date: [new Date(),]
    })
  }
  public journal =[
    {
      title: 'SEALS Day 1',
      date: 'sdjsd',
      content: [
        ['paragraph one', 'paragraph 2'],
      ]
      
    }
  ]
}
