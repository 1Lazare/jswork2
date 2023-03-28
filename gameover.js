let health = 100
let lives = 3

if (health > 0 ) {
    health = true ;  
} else {
    health = false ;
}


if (lives > 0 ) {
    lives = true ; 
} else {
    lives = false;
}

const gameOver = lives || health ;

console.log (gameOver) ; 