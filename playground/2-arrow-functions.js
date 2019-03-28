// const square = function (x){
//     return x*x;
// }

// console.log(square(3));

const event={
    name:"birthday party",
    guestList:["wenlin","ben","nick"],
    printGuestList(){
        console.log("Guest list for "+this.name);
        this.guestList.forEach(guest => {
            console.log(guest+" is attending the "+this.name);
        });
    }
}
event.printGuestList();