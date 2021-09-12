import {Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Project} from '../../project';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnChanges {
  @Input() currentInput: Project;
  @Input() num: number;
  @Output() editProject = new EventEmitter();
  @Output() deleteProject = new EventEmitter();
  @ContentChild('selectionBox') selectionBox;
  // hideShowTable = false;
  constructor(public projectService: ProjectService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('..................onchanges');
    // tslint:disable-next-line:forin
    for (const proName in changes){
      const chg = changes[proName];
      const cur = JSON.stringify(chg.currentValue);
      const prev = JSON.stringify(chg.previousValue);
      console.log(`${proName}: currentValue = ${cur},
        previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
  }
  onEditClick(event, num): any {
    this.editProject.emit({event, num});
    console.log(this.editProject.emit({event, num}));
  }
  onDeleteClick(event, num): void{
    this.deleteProject.emit( {event, num} );
  }
  // showHide(): void{
  //   this.hideShowTable = !this.hideShowTable;
  // }
  onSelectAll(b: boolean): void {
    if (b){
      this.selectionBox.checkEd();
    } else {
      this.selectionBox.unChecked();
    }
  }
}
