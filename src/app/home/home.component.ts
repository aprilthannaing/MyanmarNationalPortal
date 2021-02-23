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
    {rate : "MYANMAR KYAT",value:"29 Feb 2021"},
    {rate : "US DOLLAR",value:"1300 USD"},
    {rate : "SINGAPORE",value:"900 SDG"},
    {rate : "MALAYSIA",value:"4.2 MYR"},
    {rate : "INDONESIA",value:"29 Feb 2021"},
    {rate : "YUAN",value:"1300 USD"},
    {rate : "EURO",value:"900 SDG"},
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
