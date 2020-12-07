import {Component, OnInit} from '@angular/core';


interface Activity {
  image: string;
  alt: string;
  type: string;
  level: string;
  description: string;
}

interface ActivityType {
  code: string;
  value: string;
}

interface ActivityLevel {
  code: string;
  value: string;
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  activities: Activity[] = [
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Zaawansowany',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/breakdance.jpg',
      alt: 'breakdance',
      type: 'Breakdance',
      level: 'Początkujący',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/jazz.jpg',
      alt: 'jazz',
      type: 'Jazz',
      level: 'Średni',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/jazz.jpg',
      alt: 'jazz',
      type: 'Jazz',
      level: 'Zaawansowany',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Początkujący',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/salsa.jpg',
      alt: 'salsa',
      type: 'Salsa',
      level: 'Zaawansowany',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/breakdance.jpg',
      alt: 'breakdance',
      type: 'Breakdance',
      level: 'Zaawansowany',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/tango.jpg',
      alt: 'tango',
      type: 'Tango',
      level: 'Średni',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
    {
      image: 'assets/image/salsa.jpg',
      alt: 'salsa',
      type: 'Salsa',
      level: 'Początkujący',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel vehicula ex. Phasellus placerat justo eu mauris cursus, at bibendum magna condimentum. Vivamus ipsum ante, gravida nec ligula ac, bibendum placerat purus. Nunc imperdiet sem et turpis sodales, nec convallis dui mollis. Vivamus venenatis neque a sem ullamcorper, vitae porta justo rhoncus. Donec ullamcorper metus purus, nec blandit lorem rutrum vel. Sed varius consequat lacinia. Ut consectetur mi sed iaculis finibus. Ut placerat, nulla ac commodo congue, risus lorem interdum velit, et venenatis orci quam sagittis orci. Donec porta vitae libero fermentum cursus. Aenean feugiat felis quis turpis iaculis laoreet vel quis augue.'
    },
  ]
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

  activityTypes: ActivityType[] = [
    {code: 'S', value: 'Salsa'},
    {code: 'T', value: 'Tango'},
    {code: 'J', value: 'Jazz'},
    {code: 'B', value: 'Breakdance'}
  ];
  activityLevels: ActivityLevel[] = [
    {code: 'B', value: 'Początkujący'},
    {code: 'I', value: 'Średni'},
    {code: 'A', value: 'Zaawansowany'}
  ];

  immutableArray = this.activities;
  selectedType: string = '';
  selectedLevel: string = '';
  

  filterActivities(): void {
    const type: ActivityType = this.activityTypes.find(type => type.code === this.selectedType);
    const level: ActivityLevel = this.activityLevels.find(level => level.code === this.selectedLevel);
    this.activities = this.immutableArray
      .filter(activity => this.matchType(activity, type))
      .filter(activity => this.matchLevel(activity, level));
  }

  matchType(activity: Activity, type: ActivityType): boolean {
    if (type === undefined) return true;
    if (type.value === activity.type) return true;
    return false;
  }

  matchLevel(activity: Activity, level: ActivityLevel): boolean {
    if (level === undefined) return true;
    if (level.value === activity.level) return true;
    return false;
  }
}
