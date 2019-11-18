import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  firstName : string  = "Hoa";
  lastName  : string  = "Pham";
  email     : string  = "hoaphamdn@gmail.com";
  age       : number  = 20;
  isMarried : boolean = true;
  image     : string  = "https://img.thuthuatphanmem.vn/uploads/2018/09/22/hinh-anh-de-thuong-ve-tinh-yeu_120156131.jpg";
  linkURL   : string  = "https://zingmp3.vn/";
  constructor() { }

  ngOnInit() {
  }

}
