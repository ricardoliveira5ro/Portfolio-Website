import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.css']
})
export class ScrollDownComponent implements OnInit {

  @Input('nextSection') nextSection: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
