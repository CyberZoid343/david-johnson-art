import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { 
    this.titleService.setTitle('David Johnson Art')
    this.metaService.addTags([
      {name: 'description', content: ''},
      {name: 'author', content: ''},
      {name: 'keywords', content: ''},
    ])
  }

  ngOnInit(): void {
  }

}
