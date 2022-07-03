import { Component, OnInit , ElementRef } from '@angular/core';
import { Router , RouterLinkActive } from '@angular/router';
import * as $ from 'jquery';


function activeSidebarElement() {

  let oldPages = document.getElementsByClassName("hovered");
  
  for (const oldPage in oldPages) {
    if (Object.prototype.hasOwnProperty.call(oldPages, oldPage)) {
      const element = oldPages[oldPage];
      element.classList.remove("hovered");
    }
  }


  let objects = $("app-sidebar > ul > li > .active");
  for (var obj of objects) {
    obj.parentElement?.classList.add("hovered");
  }
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  list:any

  constructor(private elementRef:ElementRef , private router:Router) {
    document.addEventListener("click",activeSidebarElement)
   }




  ngOnInit(): void {


  }



}
