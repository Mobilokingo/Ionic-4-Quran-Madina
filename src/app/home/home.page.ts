import { Component, ViewChildren, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// @Component({
//   selector: 'app-home',
//   template: `
//     <ion-slides pager="true" [options]="slideOpts">
//       <ion-slide>
//         <h1>Slide 1</h1>
//       </ion-slide>
//       <ion-slide>
//         <h1>Slide 2</h1>
//       </ion-slide>
//       <ion-slide>
//         <h1>Slide 3</h1>
//       </ion-slide>
//     </ion-slides>
//   `
// })

export class HomePage  {

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  private koko = 1;

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() {
  }

  ionViewDidLoad(){
    
    //alert( this.koko);

  } 

  ionViewDidEnter(){
    
    this.koko = parseInt(localStorage.getItem("QuranPage"));
    //alert(this.koko );
    this.slides.slideTo(this.koko);
  }
  

  



}
