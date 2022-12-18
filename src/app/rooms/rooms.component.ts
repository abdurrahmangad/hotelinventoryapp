import { Component } from '@angular/core';
import { Room, RoomList} from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelname:string = 'ritz';
  numberOfRooms:number = 35;
  hideRooms:boolean = false;


  rooms : Room = {
    availableRooms:0,
    bookedRooms:5,
    totalRooms:15  
  };

  roomList: RoomList[] =[
    {
      roomNumber:0,
      roomType:'room ',
      amenities:'test ',
      photos:'test.jpg',
      price: 134,
      checkinTime: new Date('11-Nov-2015'),
      checkoutTime: new Date('11-Nov-2015')
    },
    {
      roomNumber:1,
      roomType:'room ',
      amenities:'test ',
      photos:'test.jpg',
      price: 134,
      checkinTime: new Date('11-Nov-2015'),
      checkoutTime: new Date('11-Nov-2015')
    },
    {
      roomNumber:2,
      roomType:'room ',
      amenities:'test ',
      photos:'test.jpg',
      price: 134,
      checkinTime: new Date('11-Nov-2015'),
      checkoutTime: new Date('11-Nov-2015')
    },
    {
      roomNumber:3,
      roomType:'room ',
      amenities:'test ',
      photos:'test.jpg',
      price: 134,
      checkinTime: new Date('11-Nov-2015'),
      checkoutTime: new Date('11-Nov-2015')
    }

  ]
  constructor() {

  }

  ngOnInit() {

  }
 toggle(){
  this.hideRooms = !this.hideRooms;
 } 
}
