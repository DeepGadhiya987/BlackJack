document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackstand);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);
let youscore=0;
let dealerscore=0;
let cardpicker=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let cardscore=[2,3,4,5,6,7,8,9,10,10,10,10,11,1];
let win=0;
let lost=0;
let draw=0;
let turnOver=false;
let isStand=false;

function blackjackHit(){
    document.querySelector('#blackjack-result').innerHTML='Lets Play';
document.querySelector('#blackjack-result').style.color='black';
if(isStand==false){
    if(youscore<=21){
    let num=Math.floor(Math.random()*cardpicker.length);
    let cardImage=document.createElement('img');
    cardImage.src='cards/'+cardpicker[num]+'.png';
    document.querySelector('#your-box').appendChild(cardImage);
    if(cardpicker[num]==='A'){
        if(youscore+cardscore[num] <= 21){
            youscore+=cardscore[num];}
        else{
            youscore+=cardscore[num+1];
        }
    }
        
    else{
        youscore+=cardscore[num];}
    if(youscore<=21){
    document.getElementById("your-blackjack-result").innerHTML=youscore
    }
    else{
        document.getElementById("your-blackjack-result").innerHTML='Bust';
        document.getElementById("your-blackjack-result").style.color='red'
    }
    }
    
}

}
function blackjackDeal(){
    if(turnOver==true){
    winner();
    let yourImages=document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');
    for(let i=0;i<yourImages.length;i++){
        yourImages[i].remove();
    }
    for(let i=0;i<dealerImages.length;i++){
        dealerImages[i].remove();
    }
    document.getElementById("your-blackjack-result").innerHTML=0
    youscore=0;
    document.getElementById("your-blackjack-result").style.color='white';

    document.getElementById("dealer-blackjack-result").innerHTML=0
    dealerscore=0;
    document.getElementById("dealer-blackjack-result").style.color='white';
    isStand=false;
    turnOver=false;
    
    }   
}


function blackjackstand(){
    isStand=true; 
    while(dealerscore<18){  
    
        let num=Math.floor(Math.random()*cardpicker.length);
        let cardImage=document.createElement('img');
        cardImage.src='cards/'+cardpicker[num]+'.png';
        document.querySelector('#dealer-box').appendChild(cardImage);
        if(cardpicker[num]==='A'){
            if(dealerscore+cardscore[num] <= 21){
                dealerscore+=cardscore[num];}
            else{
                dealerscore+=cardscore[num+1];
            }
        }
            
        else{
            dealerscore+=cardscore[num];}
            
        if(dealerscore<=21){
        document.getElementById("dealer-blackjack-result").innerHTML=dealerscore
        }
        else{
            document.getElementById("dealer-blackjack-result").innerHTML='Bust';
            document.getElementById("dealer-blackjack-result").style.color='red'
        }
        }
        turnOver=true;
    
}


function winner(){
    
    if(youscore>21 && dealerscore<=21){
        lost+=1;
        document.querySelector('#losses').innerHTML=lost;
        document.querySelector('#blackjack-result').innerHTML='You Lost';
        document.querySelector('#blackjack-result').style.color='red';
        
    }
    else if(youscore<=21 && dealerscore<=21 && youscore<dealerscore){
        lost+=1;
        document.querySelector('#losses').innerHTML=lost;
        document.querySelector('#blackjack-result').innerHTML='You Lost';
        document.querySelector('#blackjack-result').style.color='red';
        
    }

    else if(youscore>21 && dealerscore>21){
        draw+=1;
        document.querySelector('#draws').innerHTML=draw;
        document.querySelector('#blackjack-result').innerHTML='Its a Tie';
        document.querySelector('#blackjack-result').style.color='Black';
        
    }
    
    else if(youscore==dealerscore){
        draw+=1;
        document.querySelector('#draws').innerHTML=draw;
        document.querySelector('#blackjack-result').innerHTML='Its a Tie';
        document.querySelector('#blackjack-result').style.color='Black';
        
    }

    else if(youscore<=21 && dealerscore>21){
        win+=1;
        document.querySelector('#winss').innerHTML=win;
        document.querySelector('#blackjack-result').innerHTML='You Won';
        document.querySelector('#blackjack-result').style.color='green';
        
    }
    
    
    else if(youscore>dealerscore){
        win+=1;
        document.querySelector('#winss').innerHTML=win;
        document.querySelector('#blackjack-result').innerHTML='You Won';
        document.querySelector('#blackjack-result').style.color='green';
        
    }
}

