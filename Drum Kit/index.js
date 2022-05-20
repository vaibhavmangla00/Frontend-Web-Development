

for (var i=0;i<document.querySelectorAll('.drum').length;i++){
    var tom1 = new Audio('sounds/tom-1.mp3')
    var tom2 = new Audio('sounds/tom-2.mp3')
    var tom3 = new Audio('sounds/tom-3.mp3')
    var tom4 = new Audio('sounds/tom-4.mp3')
    var snare = new Audio('sounds/snare.mp3')
    var kick = new Audio('sounds/kick-bass.mp3')
    var crash = new Audio('sounds/crash.mp3')

    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var key = this.innerHTML
        sound(key)

    })
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function(event){
        sound(event.key)
    })

}

function sound(key){
    
    switch (key) {
        case 'w':
            tom1.play()
            break;

        case 'a':
            tom2.play()
            break; 
        case 's':
            tom3.play()
            break;
            
        case 'd':
            tom4.play()
            break;
            
        case 'j':
            snare.play()
            break;
            
        case 'k':
            kick.play()
            break;
            
        case 'l':
            crash.play()
            break;
    
        default:
            break;
    }
}