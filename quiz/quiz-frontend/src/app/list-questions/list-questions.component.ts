import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {

  //question = {};
  questions = {};

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQuestions().subscribe(res => {
      this.questions = res;
    });
  }

}
