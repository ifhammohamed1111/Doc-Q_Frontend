var toggle=false;
var div = document.getElementById("setIcons");


 

const handleMenu = ()=>{
    console.log("ho")
 
    if(toggle===true){
        div.style.display="block";
         
        div.style.alignItems="center"; 
       
        toggle=false;
    }else{
        div.style.display="none";
        console.log(div)
        toggle=true;
    } 
}


// time slots js
let selectedSlot = null;

    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            // Remove previous selection
            if (selectedSlot) {
                selectedSlot.classList.remove('selected');
            }
            // Highlight the selected slot
            slot.classList.add('selected');
            selectedSlot = slot;

            document.querySelectorAll('.time-slot').forEach(otherSlot => {
                if (otherSlot !== slot) {
                    otherSlot.style.opacity = '0.5';
                }
                if (otherSlot == slot) {
                    otherSlot.style.opacity = '10';
                }

                
            });
        });
    });

    document.getElementById('book-btn').addEventListener('click', () => {
        if (selectedSlot) {
            if (selectedSlot.dataset.booked) {
                alert('This slot is already booked!');
            } else {
                alert('Booking successful!');
                selectedSlot.dataset.booked = true;
            }
        } else {
            alert('Please select a time slot before booking.');
        }
    });



