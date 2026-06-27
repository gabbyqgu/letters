/* ====== DRAGGABLE ELEMENTS!!!! WEEEEEEEEEEEEEEEEEEE =====*/
//each element is added to the class 'draggable'
const draggables = document.querySelectorAll(".draggable"); //finds ALL elements w/ the class 'draggable' as a LIST

draggables.forEach(function(draggable) { 
    //kinda like for i in range(); goes thru each element 1 at a time and calls it a 'draggable'
    let offsetX; //defining variables
    let offsetY;
    // *** addEventListener(what event to listen for, what code to run)
    draggable.addEventListener("mousedown", 
        function() { //when the element get clicked down run this function
            offsetX = event.clientX - draggable.offsetLeft; //subtracting gives how far from the left edge of image
            offsetY = event.clientY - draggable.offsetTop; //distance from top edge 
            document.addEventListener("mousemove", move); //every mouse movement the move function runs(like constantly)
    })
    document.addEventListener("mouseup", 
        function() {
        document.removeEventListener("mousemove", move);
    })

    function move(event) { // moves the image to where the mouse is
    draggable.style.left = event.clientX - offsetX + "px"; // by subtracting the offset there isn't like a jump
    draggable.style.top = event.clientY - offsetY + "px";
    }

});

/*=====oooo spooky dissapearing text ====*/
const button = document.querySelectorAll(".reveal-btn"); /* put the btn into the variable button, query returns list */
button.forEach(function(button) {
    button.addEventListener("click", function() {
        const message = button.nextElementSibling;
        if (message.style.display === "block") { /* is the display block(box)? if yes then the code runs */
            message.style.display = "none"; /* hide it!*/ 
        }
        else {
            message.style.display = "block";
        }
});

});

