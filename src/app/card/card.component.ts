import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input()
  disabled!: boolean;
  @Input()
  myObject!: {
    identifier?: string;
    fImg?: string;
    fTxt?: string;
    bImg?: string;
    bTxt?: string;
    flip?: string;
  };

  flip: string | undefined;

  frontText: string| undefined;
  frontImage: string| undefined;

  backText: string| undefined;
  backImage: string| undefined;
  constructor() { }

  ngOnInit(): void {
    this.frontText = this.myObject.fTxt;
    this.frontImage = this.myObject.fImg;
    this.backText = this.myObject.bTxt;
    this.backImage = this.myObject.bImg;
    this.flip = this.myObject.flip || 'inactive';
  }

   toggleFlip() {
    
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';

}
}

