import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelname:string = 'ritz';
  numberOfRooms:number = 35;
  hideRooms:boolean = false;


 toggle(){
  this.hideRooms = !this.hideRooms;
 } 
}
