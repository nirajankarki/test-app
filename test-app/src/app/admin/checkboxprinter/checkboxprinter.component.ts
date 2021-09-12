import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxprinter',
  templateUrl: './checkboxprinter.component.html',
  styleUrls: ['./checkboxprinter.component.scss']
})
export class CheckboxprinterComponent implements OnInit {
  isChecked = false;
  constructor() { }

  ngOnInit(): void {
  }
checkEd(): void{
    this.isChecked = true;
}
unChecked(): void{
    this.isChecked = false;
}
}
