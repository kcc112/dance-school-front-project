import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-list-instructors',
  templateUrl: './listInstructors.component.html',
  styleUrls: ['./listInstructors.component.css']
})
export class ListInstructorsComponent implements OnInit {

  public instructors;

  constructor(private router: Router) {
      this.instructors = [
              {
                  'id': '1',
                  'name': 'Henryk Brzeziński',
                  'age': '27',
                  'image': 'assets/image/instructors/brzezinski.jpg',
                  'activity_type' : 'Salsa',
                  'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet risus in nunc luctus, a vulputate erat dapibus. Aliquam pulvinar vehicula pellentesque. Phasellus condimentum elit euismod ante vestibulum sollicitudin. Duis convallis facilisis diam a maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam justo diam, tempor vel faucibus eget, convallis vel sapien. Morbi luctus nisl elit, vitae vehicula urna dictum sed. Nunc scelerisque semper nisi in commodo. Curabitur semper porta dui at euismod. Aliquam risus lorem, sollicitudin a nisl sed, laoreet fermentum velit.'
              },
              {
                  'id': '2',
                  'name': 'Bartosz Cieślak',
                  'age': '31',
                  'image': 'assets/image/instructors/cieslak.jpg',
                  'activity_type' : 'Kizomba',
                  'description': 'Nullam pretium dapibus imperdiet. Morbi sit amet dolor in enim egestas fermentum et vitae erat. Nullam auctor felis ac lacus aliquet, vel semper ex fermentum. Nulla vulputate tempor laoreet. In convallis eu turpis id egestas. Quisque in eros pellentesque, fermentum sem nec, mattis eros. Aenean commodo, sem a mattis maximus, felis lacus aliquet lectus, ut elementum ligula urna at enim. Suspendisse potenti. Nulla hendrerit turpis purus, vel euismod nisi vestibulum nec. Nam eu tristique mauris, et imperdiet elit. Donec varius justo nisl, vel euismod mi euismod id. Pellentesque vel laoreet risus. Cras pulvinar eleifend neque, eu tincidunt justo pulvinar ut.'
              },
              {
                  'id': '3',
                  'name': 'Kinga Malinowska',
                  'age': '18',
                  'image': 'assets/image/instructors/malinowska.jpg',
                  'activity_type' : 'Taniec towarzyski',
                  'description': 'Nullam pretium dapibus imperdiet. Morbi sit amet dolor in enim egestas fermentum et vitae erat. Nullam auctor felis ac lacus aliquet, vel semper ex fermentum. Nulla vulputate tempor laoreet. In convallis eu turpis id egestas. Quisque in eros pellentesque, fermentum sem nec, mattis eros. Aenean commodo, sem a mattis maximus, felis lacus aliquet lectus, ut elementum ligula urna at enim. Suspendisse potenti. Nulla hendrerit turpis purus, vel euismod nisi vestibulum nec. Nam eu tristique mauris, et imperdiet elit. Donec varius justo nisl, vel euismod mi euismod id. Pellentesque vel laoreet risus. Cras pulvinar eleifend neque, eu tincidunt justo pulvinar ut.'
              },
          ];
  }

  ngOnInit(): void {
  }

  goToInstructorDetails(id) {
      this.router.navigate(['/instructor', id]);
  }
}
