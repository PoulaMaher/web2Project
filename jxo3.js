//change bg color
function color(value) {
    document.body.style.backgroundColor=value;
    
}
function colorXO(value) {

    var tds = document.getElementsByTagName("td");

    for(var i = 0, j = tds.length; i < j; ++i)
       tds[i].style.color = value;

}




//var tds = document.getElementsByTagName("td");
//for(var i = 0, j = tds.length; i < j; ++i)
    //document.td.style.color = "red";
//دي شغاااااااااااااااااله
    //document.getElementById('3').classList.add('blueCell')

//----------------------------------------------------------


var result= [
    '','','',
    '','','',
    '','',''
]

var random = Math.round(Math.random());
var starter = random === 0 ? 'x' : 'o' ;
var p1V = document.getElementById('p1V');
p1V.innerHTML = random === 0 ? 'x' : 'o' ;
var p2V = document.getElementById('p2V').innerHTML = random === 0 ? 'o' : 'x' ;

function clickTd(index){
    if(document.getElementById(index).innerHTML){
        return;
    }
    document.getElementById(index).innerHTML= starter;
    document.getElementById(index).classList.add('click')
    result[index] = starter;
    starter = starter === 'x' ? 'o' : 'x' ;
    console.log(getResult()); 
}

function checkMatch(str){
    return str.toLowerCase() == "xxx" || str.toLowerCase() == "ooo"
}

function is3(str) {

    return str.length == 3;

}

function winnerResult(str){

    if('xxx' === str.toLowerCase()){
        console.log("p1V.innerHTML" , p1V.innerHTML)
        return (p1V.innerHTML === 'x') ? 'Player 1 (X) is winner!' : 'Player 2 (X) is winner!'
    }
    return (p1V.innerHTML === 'o') ? 'Player 1 (O) is winner!' : 'Player 2 (O) is winner!'

}


//--------------------------------

function emptyCell(){
    for(let i=0 ; i<16; i++){
        if(!document.getElementById(i).innerHTML){
        document.getElementById(i).innerHTML="-"
            }
    }  
}

function getResult(){
// 0  1  2
// 3  4  5
// 6  7  8

//rows
var row1= result[0] + result[1] + result[2]
var row2= result[3] + result[4] + result[5]
var row3= result[6] + result[7] + result[8]

//col
var col1= result[0] + result[3] + result[6]
var col2= result[1] + result[4] + result[7]
var col3= result[2] + result[5] + result[8]



//sqr
var sqr1= result[0] + result[4] + result[8]
var sqr2= result[2] + result[4] + result[6]

    //rows
    if(checkMatch(row1)){
        document.getElementById('labe').innerHTML = winnerResult(row1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    
    if(checkMatch(row2)){
        document.getElementById('labe').innerHTML = winnerResult(row2)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    
    if(checkMatch(row3)){
        document.getElementById('labe').innerHTML = winnerResult(row3)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    //col
    if(checkMatch(col1)){
        document.getElementById('labe').innerHTML = winnerResult(col1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    
    if(checkMatch(col2)){
        document.getElementById('labe').innerHTML = winnerResult(col2)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    
    if(checkMatch(col3)){
        document.getElementById('labe').innerHTML = winnerResult(col3)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    if(checkMatch(sqr1)){
        document.getElementById('labe').innerHTML = winnerResult(sqr1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    
    if(checkMatch(sqr2)){
        document.getElementById('labe').innerHTML = winnerResult(sqr2)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    if(is3(row1) && is3(row2) && is3(row3) && is3(col1) && is3(col2) && is3(col3) && is3(sqr1) && is3(sqr2)){
        document.getElementById('labe').innerHTML = "No Winner!"
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';

        return
        } else {
        document.getElementById('labe').innerHTML = "Continue..."
        return
    }

}
