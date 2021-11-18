var hotel = {
    name : 'Quay',
    rooms : 40,
    booked : 25,
    checkAvailability : function (){
        return this.rooms - this.booked;
    }
};
var elNamee = document.getElementById('hotelName');
elNamee.textContent = hotel.name;

var elRoom = document.getElementById( 'rooms');
elRoom.textContent = hotel.checkAvailability();
