import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {img: "assets/images/categories/category2.jpg"},
    {img: "assets/images/categories/category3.jpg"},
    {img: "assets/images/categories/category4.jpg"},
    {img: "assets/images/categories/category5.jpg"}
  ];
  exchange = [
    {rate : "Myanmar",value:"29 Feb 2021"},
    {rate : "US Dollor",value:"1300 USD"},
    {rate : "Singapore",value:"900 SDG"},
    {rate : "Malaysia",value:"4.2 MYR"},
    {rate : "Myanmar",value:"29 Feb 2021"},
    {rate : "US Dollor",value:"1300 USD"},
    {rate : "Singapore",value:"900 SDG"},
  ]
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": false,
    "nextArrow": false,
    "prevArrow": false,
    autoplay: true,
  };
  constructor() { }
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
  ngOnInit(): void {
  }

}
