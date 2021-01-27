
window.addEventListener('deviceorientation', handleOrientation);


function handleOrientation(eventData){
    let alpha, beta, gamma;
 
    alpha = Math.round(eventData.alpha);

    beta = Math.round(eventData.beta);

    gamma = Math.round(eventData.gamma);
    

    doSomething(alpha, beta, gamma);     
}   


function doSomething(alpha, beta, gamma){
    showDataColor(alpha, beta, gamma);
    activateVoice(alpha, beta, gamma); 
    showMyImage(alpha, beta, gamma);     
}

function showDataColor(alpha, beta, gamma){

    document.getElementById('beta').innerHTML = beta;
    document.getElementById('gamma').innerHTML = gamma;
    document.getElementById('alpha').innerHTML = alpha;

  
    document.body.style.background = `rgb(150, ${Math.abs(gamma)*5}, 150)`;
}

function activateVoice(alpha, beta, gamma){
    
    if(alpha > 120){
        let myTxt = "Hello, rotate me!";  
        sayItLoud(myTxt);

        document.getElementById('voice').innerHTML = myTxt;
        }
    else{
     
        document.getElementById('voice').innerHTML = "";
        }
}

function showMyImage(alpha, beta, gamma){
  
    if(beta > 40){
        document.getElementById('myImage').src = "rotate.png"; 
        }
        else {
            document.getElementById('myImage').src = "";
        }
}