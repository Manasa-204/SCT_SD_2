function reset() {
    r = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    guess = false;

    document.getElementById("guess").value = "";
    document.getElementById("guess").disabled = false;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}
let r=Math.floor(Math.random()*30)+1;
let guess=false;
let attempts=0;
let maxattempts=5;

function checkguess(){
    
    if(guess||attempts>=maxattempts){
        return;
    }
    let n=Number(document.getElementById("guess").value);
    attempts++;

    if(n === r){
        document.getElementById("message").textContent =
        "🎉 You guessed right! The number was " + r;
    guess = true;
    }
    else if(n<r){
        document.getElementById("message").textContent="Number is greater";
    }
    else{
        document.getElementById("message").textContent="Number is lower"
    }
    document.getElementById("attempts").textContent =
        "Attempts left: " + (maxattempts - attempts);
    
        if (!guess && attempts == maxattempts) {
            document.getElementById("message").textContent =
                "😞 Oops! Better luck next time. The number was " + r;
    }
}
