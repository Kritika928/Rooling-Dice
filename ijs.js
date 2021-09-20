var guess = Math.floor(Math.random()*100) +1 
var count= parseInt(0)
var target = 30
function calc()
{
    if (document.getElementById("number").value === '')
    count+=1
    player1 = document.getElementById("player1")
    player2 = document.getElementById("player2")
    if (count%2 == 0)
    {
        document.getElementById("ans").innerHTML = "Given a number"
        return false
        var dice2 = Math.floor(Math.random()*6) +1 
        player2.value =  parseInt(player2.value)+  dice2
        if (player2.value  >= target)
        {
            document.getElementById("ans").innerHTML = "Player 2 Wins"
            docu
        }
    }
    if (count%2 != 0)
    {
       
        var dice1 = Math.floor(Math.random()*6) +1 
        player1.value =  parseInt(player1.value)+  dice1
        if (player2.value  >= target)
        {
            document.getElementById("ans").innerHTML = "Player 1 Wins"
        }


    }

    var n= parseInt( document.getElementById("number").value)


    if ( n > 100 && n <=0)
    {
    document.getElementById("ans").innerHTML = "Guess a number between 1 to 100"
        return false
    }
    else if (n === guess)
    document.getElementById("ans").innerHTML = "Bingo !! You Won  &#128526"
    else if (n > guess)
    document.getElementById("ans").innerHTML = "So close ! Try a lesser number &#128517"
    else if (n < guess)
    document.getElementById("ans").innerHTML = "So close ! Try a greater number &#128517"
    else
    document.getElementById("ans").innerHTML = "Try next time !!"
    return false
}