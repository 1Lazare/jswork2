let availableRooms = 5 ; 
let roomPrices = 300 ;
let userRoomCount = 3 ; 

let discount = userRoomCount * roomPrices * 20/100 ;



let userBalance = 800 ; 
let userHasDiscount = true ; 
 
if (userHasDiscount)  {
    userRoomCount >= 2 ;
    discount = userRoomCount * roomPrices * 20/100 ; 
} else  {
    userRoomCount < 2 ; 
    discount = 0 ;
}


const paymentComplete = userBalance >= userRoomCount * roomPrices - discount;

console.log (paymentComplete) ; 
