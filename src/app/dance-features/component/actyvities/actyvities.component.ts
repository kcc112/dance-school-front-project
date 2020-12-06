import {Component, OnInit} from '@angular/core';


interface Activiti {
  image: string;
  alt: string;
  type: string;
  level: string;
  description: string;
}

@Component({
  selector: 'app-actyvities',
  templateUrl: './actyvities.component.html',
  styleUrls: ['./actyvities.component.css']
})
export class ActyvitiesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  array: Activiti[] = [
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Zaawansowany',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Zaawansowany',
      description: 'aLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Zaawansowany',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Zaawansowany',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Zaawansowany',
      description: 'aLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Zaawansowany',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Zaawansowany',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Zaawansowany',
      description: 'aLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Salsa',
      level: 'Początkujący',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
  ]

  immutableArray = this.array;
  selectedType: string = '';
  selectedLevel: string = '';
  
  sortLevel(): void {
    if (this.selectedLevel === 'P') this.array = this.immutableArray.filter(activiti => activiti.level === 'Początkujący')
    if (this.selectedLevel === 'Z') this.array = this.immutableArray.filter(activiti => activiti.level === 'Zaawansowany')
    this.selectedType = ''
  }

  sortType(): void {
    if (this.selectedType === 'T') this.array = this.immutableArray.filter(activiti => activiti.type === 'Tango')
    if (this.selectedType === 'S') this.array = this.immutableArray.filter(activiti => activiti.type === 'Salsa')
    this.selectedLevel = ''
  }
}
