var player1 = Math.floor(Math.random()*6)+1
var player2 = Math.floor(Math.random()*6)+1

var img1="images/dice"+player1+".png"
var img2="images/dice"+player2+".png"

if (player1>player2){
    document.querySelector('h1').textContent='Player 1 Wins'
}
else if(player1<player2){
    document.querySelector('h1').textContent='Player 2 Wins'
}
else{
    document.querySelector('h1').textContent='Its A Draw'
}

document.querySelectorAll('img')[0].setAttribute('src',img1)
document.querySelectorAll('img')[1].setAttribute('src',img2)


