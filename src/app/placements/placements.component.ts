import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  slider:any

  constructor() { 
  }

  images = [
      "../../assets/images/ban1.jpg",
      "../../assets/images/ban2.jpg",
      "../../assets/images/ban3.jpg",
      "../../assets/images/ban4.jpg"
  ];

  i = 0;

  ngOnInit(): void {
    this.slider = <HTMLImageElement>document.getElementsByName("slideimage")[0]
    this.slides();
    setInterval(() => {
          this.slides(); 
          console.log('Exec')
          }, 5000);
  }

  slides() {
    this.slider.src=this.images[this.i];
    if(this.i<(this.images.length-1)){
        this.i++;
    }
    else{
        this.i=0
    }
  }

}
