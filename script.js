function evenOrOdd(){
    var x = document.getElementById('first').value;
    var wordDisplay;
   if(x == ""){
       wordDisplay = "Please enter your number";
    }else if(x%2 ==0){
        wordDisplay = "The number is Even";
    }else{
        wordDisplay = "The number is Odd";
    }
    document.getElementById('result').innerHTML= wordDisplay;
}