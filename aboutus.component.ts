import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  a:string="Html";
  b:string="CSS";
  c:string="JavaScript";
  d:string="Node.Js";
  e:string="Express";
  f:string="Angular";
  g:string="MongoDB";

  constructor() { }

  ngOnInit(): void {
  }

}
