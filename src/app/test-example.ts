import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDropList} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'test-sorting-example',
  templateUrl: 'test-example.html',
  styleUrls: ['test-example.css'],
})
export class TestSortingExample {
  movies = [
    'Item 1',
       'Item 2',
       'Item 3',
     'Item 4'
  ];

  disabled = true;
  
  isEditable() {
    this.disabled = !this.disabled;
  }
}