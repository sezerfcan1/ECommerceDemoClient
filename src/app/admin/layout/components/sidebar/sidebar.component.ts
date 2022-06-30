import { Component, OnInit  ,ElementRef, Renderer2, OnDestroy } from '@angular/core';

let list = document.querySelectorAll("li");



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit , OnDestroy {

  constructor(private renderer2: Renderer2,) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  private unlistener:any

  ngOnInit(): void {

    this.unlistener = this.renderer2.listen("document", "mousemove", event => {
      console.log(`I am detecting mousemove at ${event.pageX}, ${event.pageY} on Document!`);
    });

    list.forEach(element => {
      element.addEventListener('mouseover',this.activeLink);
    })
  }

  activeLink = () => {
    list.forEach(element => {
      element.classList.remove('hovered');
      element.classList.add('hovered');
    });



    
  }

}
