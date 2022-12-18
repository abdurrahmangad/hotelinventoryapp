export interface Room{
    availableRooms:number;
    bookedRooms:number;
    totalRooms:number;
}

export interface RoomList{
    roomNumber:number;
    roomType:string;
    amenities:string;
    photos:string;
    price: number;
    checkinTime: Date;
    checkoutTime: Date;
}