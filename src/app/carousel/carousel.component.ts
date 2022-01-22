import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let carousel = {
      interval: 5000,
      keyboard: true,
      pause: 'hover',
      ride: false,
      wrap: true
    }
    
  }

}
