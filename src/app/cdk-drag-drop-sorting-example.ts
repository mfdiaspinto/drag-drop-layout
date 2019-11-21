import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDropList} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope'
  ];
  disabled = true;
  isEditable() {
    this.disabled = !this.disabled;
  }
}

@Component({
  selector: 'test-example',
  template: '<button>AAA</button>',
})
export class TestExample {
  
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */