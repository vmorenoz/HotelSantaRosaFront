import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() sticky : boolean = false
  @HostListener("window:scroll", ['$event']) onScroll(e: Event) {
    this.scrollTop = this.getYPosition(e)
  }

  scrollTop = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  getYPosition(e : any) : number{
    return e.target.scrollingElement.scrollTop ? e.target.scrollingElement.scrollTop : 0
  }

}
