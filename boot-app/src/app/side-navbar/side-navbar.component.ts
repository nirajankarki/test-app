import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  collapse(): any{
    $('#sidebar').toggleClass('active');
  }

}
