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
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','',''
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
    for(let i=0 ; i<25; i++){
        if(!document.getElementById(i).innerHTML){
        document.getElementById(i).innerHTML="-"
            }
    }  
}

function getResult(){
//  0   1   2   3   4
//  5   6   7   8   9
// 10  11  12  13  14
// 15  16  17  18  19
// 20  21  22  23  24

//rows
var row1_1= result[0] + result[1] + result[2]
var row1_2= result[1] + result[2] + result[3]
var row1_3= result[2] + result[3] + result[4]

var row2_1= result[5] + result[6] + result[7]
var row2_2= result[6] + result[7] + result[8]
var row2_3= result[7] + result[8] + result[9]

var row3_1= result[10] + result[11] + result[12]
var row3_2= result[11] + result[12] + result[13]
var row3_3= result[12] + result[13] + result[14]

var row4_1= result[15] + result[16] + result[17]
var row4_2= result[16] + result[17] + result[18]
var row4_3= result[17] + result[18] + result[19]

var row5_1= result[20] + result[21] + result[22]
var row5_2= result[21] + result[22] + result[23]
var row5_3= result[22] + result[23] + result[24]



//col
var col1_1= result[0] + result[5] + result[10]
var col1_2= result[5] + result[10] + result[15]
var col1_3= result[10] + result[15] + result[20]

var col2_1= result[1] + result[6] + result[11]
var col2_2= result[6] + result[11] + result[16]
var col2_3= result[11] + result[16] + result[21]

var col3_1= result[2] + result[7] + result[12]
var col3_2= result[7] + result[12] + result[17]
var col3_3= result[12] + result[17] + result[22]

var col4_1= result[3] + result[8] + result[13]
var col4_2= result[8] + result[13] + result[18]
var col4_3= result[13] + result[18] + result[23]

var col5_1= result[4] + result[9] + result[14]
var col5_2= result[9] + result[14] + result[19]
var col5_3= result[14] + result[19] + result[24]




//sqr
var sqr1_1= result[2] + result[8] + result[14]


var sqr2_1= result[1] + result[7] + result[13]
var sqr2_2= result[7] + result[13] + result[19]


var sqr3_1= result[0] + result[6] + result[12]
var sqr3_2= result[6] + result[12] + result[18]
var sqr3_3= result[12] + result[18] + result[24]


var sqr4_1= result[5] + result[11] + result[17]
var sqr4_2= result[11] + result[17] + result[23]

var sqr5_1= result[10] + result[16] + result[22]







//sqrY2
var sqrY1_1= result[2] + result[6] + result[10]


var sqrY2_1= result[3] + result[7] + result[11]
var sqrY2_2= result[7] + result[11] + result[15]


var sqrY3_1= result[4] + result[8] + result[12]
var sqrY3_2= result[8] + result[12] + result[16]
var sqrY3_3= result[12] + result[16] + result[20]


var sqrY4_1= result[9] + result[13] + result[17]
var sqrY4_2= result[13] + result[17] + result[21]

var sqrY5_1= result[14] + result[18] + result[22]








    //rows
    if(checkMatch(row1_1)){
        document.getElementById('labe').innerHTML = winnerResult(row1_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row1_2)){
        document.getElementById('labe').innerHTML = winnerResult(row1_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row1_3)){
        document.getElementById('labe').innerHTML = winnerResult(row1_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    //--------------------
    if(checkMatch(row2_1)){
        document.getElementById('labe').innerHTML = winnerResult(row2_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row2_2)){
        document.getElementById('labe').innerHTML = winnerResult(row2_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row2_3)){
        document.getElementById('labe').innerHTML = winnerResult(row2_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }


    //--------------------
    if(checkMatch(row3_1)){
        document.getElementById('labe').innerHTML = winnerResult(row3_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row3_2)){
        document.getElementById('labe').innerHTML = winnerResult(row3_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row3_3)){
        document.getElementById('labe').innerHTML = winnerResult(row3_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    //--------------------
    if(checkMatch(row4_1)){
        document.getElementById('labe').innerHTML = winnerResult(row4_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row4_2)){
        document.getElementById('labe').innerHTML = winnerResult(row4_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row4_3)){
        document.getElementById('labe').innerHTML = winnerResult(row4_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
//--------------------
    if(checkMatch(row5_1)){
        document.getElementById('labe').innerHTML = winnerResult(row5_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row5_2)){
        document.getElementById('labe').innerHTML = winnerResult(row5_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(row5_3)){
        document.getElementById('labe').innerHTML = winnerResult(row5_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }

        


    //col
    
    if(checkMatch(col1_1)){
        document.getElementById('labe').innerHTML = winnerResult(col1_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col1_2)){
        document.getElementById('labe').innerHTML = winnerResult(col1_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col1_3)){
        document.getElementById('labe').innerHTML = winnerResult(col1_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    //--------------------
    if(checkMatch(col2_1)){
        document.getElementById('labe').innerHTML = winnerResult(col2_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col2_2)){
        document.getElementById('labe').innerHTML = winnerResult(col2_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col2_3)){
        document.getElementById('labe').innerHTML = winnerResult(col2_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }


    //--------------------
    if(checkMatch(col3_1)){
        document.getElementById('labe').innerHTML = winnerResult(col3_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col3_2)){
        document.getElementById('labe').innerHTML = winnerResult(col3_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col3_3)){
        document.getElementById('labe').innerHTML = winnerResult(col3_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    //--------------------
    if(checkMatch(col4_1)){
        document.getElementById('labe').innerHTML = winnerResult(col4_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col4_2)){
        document.getElementById('labe').innerHTML = winnerResult(col4_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col4_3)){
        document.getElementById('labe').innerHTML = winnerResult(col4_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
//--------------------
    if(checkMatch(col5_1)){
        document.getElementById('labe').innerHTML = winnerResult(col5_1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col5_2)){
        document.getElementById('labe').innerHTML = winnerResult(col5_2);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    if(checkMatch(col5_3)){
        document.getElementById('labe').innerHTML = winnerResult(col5_3);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
    }
    








    //sqr
    if(checkMatch(sqr1_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqr1_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }


    if(checkMatch(sqr2_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqr2_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
        
    if(checkMatch(sqr2_2)){
        document.getElementById('labe').innerHTML = winnerResult(sqr2_2)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }

    if(checkMatch(sqr3_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqr3_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
        
    if(checkMatch(sqr3_2)){
        document.getElementById('labe').innerHTML = winnerResult(sqr3_2)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }        
    if(checkMatch(sqr3_3)){
        document.getElementById('labe').innerHTML = winnerResult(sqr3_3)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }

    if(checkMatch(sqr4_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqr4_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
        
    if(checkMatch(sqr4_2)){
        document.getElementById('labe').innerHTML = winnerResult(sqr4_2)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }

    if(checkMatch(sqr5_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqr5_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    




    //sqrY
    if(checkMatch(sqrY1_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqrY1_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }


    if(checkMatch(sqrY2_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqrY2_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
        
    if(checkMatch(sqrY2_2)){
        document.getElementById('labe').innerHTML = winnerResult(sqrY2_2)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }

    if(checkMatch(sqrY3_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqrY3_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
        
    if(checkMatch(sqrY3_2)){
        document.getElementById('labe').innerHTML = winnerResult(sqrY3_2)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }        
    if(checkMatch(sqrY3_3)){
        document.getElementById('labe').innerHTML = winnerResult(sqrY3_3)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }

    if(checkMatch(sqrY4_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqrY4_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
        
    if(checkMatch(sqrY4_2)){
        document.getElementById('labe').innerHTML = winnerResult(sqrY4_2)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }

    if(checkMatch(sqrY5_1)){
        document.getElementById('labe').innerHTML = winnerResult(sqrY5_1)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    













    

    if(
      is3(row1_1) && is3(row1_2) && is3(row1_3) 
    &&is3(row2_1) && is3(row2_2) && is3(row2_3)
    &&is3(row3_1) && is3(row3_2) && is3(row3_3)
    &&is3(row4_1) && is3(row4_2) && is3(row4_3)
    &&is3(row5_1) && is3(row5_2) && is3(row5_3)

    &&is3(col1_1) && is3(col1_2) && is3(col1_3)
    &&is3(col2_1) && is3(col2_2) && is3(col2_3)
    &&is3(col3_1) && is3(col3_2) && is3(col3_3)
    &&is3(col4_1) && is3(col4_2) && is3(col4_3)
    &&is3(col5_1) && is3(col5_2) && is3(col5_3)

    &&is3(sqr1_1)
    &&is3(sqr2_1) &&is3(sqr2_2)
    &&is3(sqr3_1) &&is3(sqr3_2) &&is3(sqr3_3)
    &&is3(sqr4_1) &&is3(sqr4_2)
    &&is3(sqr5_1)

    &&is3(sqrY1_1)
    &&is3(sqrY2_1) &&is3(sqrY2_2)
    &&is3(sqrY3_1) &&is3(sqrY3_2) &&is3(sqrY3_3)
    &&is3(sqrY4_1) &&is3(sqrY4_2)
    &&is3(sqrY5_1)
    
    
    ){
        document.getElementById('labe').innerHTML = "No Winner!"
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';

        return
        } else {
        document.getElementById('labe').innerHTML = "Continue..."
        return
    }

}
