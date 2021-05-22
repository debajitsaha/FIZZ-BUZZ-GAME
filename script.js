function play()
{
    var n =document.getElementById("num").value;
     if(n%15==0)
    {
        alert("Fizz-Buzz!!")
    }
  else if(n%3==0)
    {
        alert("Fizz")
    }
    else if(n%5==0)
    {

        alert("Buzz")
    }
    
    else{
        alert(n)
    }
    
}