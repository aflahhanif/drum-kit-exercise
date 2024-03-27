/*
document.querySelectorAll("button").forEach(function (clickButton) {
    clickButton.addEventListener("click", function(){
        alert("test");
    });
});
*/

//check for every html button for mouse click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//check for keyboard press
document.addEventListener("keydown", function(sembarang){
    //console.log(event);
    var keyPressed = sembarang.key;
    //sembarang= object parameter yang menampung semua data yang didapatkan listener
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});

//Fungsi teknis yang dijalankan oleh listener ketika kondisi terpenuhi

//Membuat suara
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "s":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        default: console.log(sembarang);
            break;
    }
}

//Memainkan animasi
function buttonAnimation(key) {
    var currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");

    setTimeout(function(){
        currentButton.classList.remove("pressed");
    }, 100);
}