import { Component, Input, OnInit } from '@angular/core';

import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {

  @Input() article: Article

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  domain(): string {
    try {
      const link: string = this.article.link.split('//')[1];
      return link.split('/')[0];
    } catch (err) {
      return null;
    }
  }

  ngOnInit() {
  }

}
