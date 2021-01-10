//change bg color
function color(value) {
    document.body.style.backgroundColor=value;
    
}
function colorXO(value) {

    var tds = document.getElementsByTagName("td");

    for(var i = 0, j = tds.length; i < j; ++i)
       tds[i].style.color = value;

}


function colorbgXO(value) {

    var trr = document.getElementsByTagName("tr");

    for(var i = 0, j = trr.length; i < j; ++i)
       trr[i].style.color = value;

}

//var tds = document.getElementsByTagName("td");
//for(var i = 0, j = tds.length; i < j; ++i)
    //document.td.style.color = "red";
//دي شغاااااااااااااااااله
    //document.getElementById('3').classList.add('blueCell')

//----------------------------------------------------------


var result= [
    '','','','',
    '','','','',
    '','','','',
    '','','',''
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
    }else{
    return (p1V.innerHTML === 'o') ? 'Player 1 (O) is winner!' : 'Player 2 (O) is winner!'
    }
    
}

function emptyCell(){
    for(let i=0 ; i<16; i++){
        if(!document.getElementById(i).innerHTML){
        document.getElementById(i).innerHTML="-"
            }
    }  
}

function getResult(){
//  0   1   2   3
//  4   5   6   7
//  8   9  10  11
// 12  13  14  15

//rows
var row1  = result[0] + result[1] + result[2]
var row11 = result[1] + result[2] + result[3]

var row2  = result[4] + result[5] + result[6]
var row22 = result[5] + result[6] + result[7]

var row3  = result[8] + result[9] + result[10]
var row33 = result[9] + result[10] + result[11]

var row4  = result[12] + result[13] + result[14]
var row44 = result[13] + result[14] + result[15]

//  0   1   2   3
//  4   5   6   7
//  8   9  10  11
// 12  13  14  15


//col
var col1 = result[0] + result[4] + result[8]
var col11= result[4] + result[8] + result[12]




var col2= result[1] + result[5] + result[9]
var col22= result[5] + result[9] + result[13]




var col3= result[2] + result[6] + result[10]
var col33= result[6] + result[10] + result[14]



var col4= result[3] + result[7] + result[11]
var col44= result[7] + result[11] + result[15]


//  0   1   2   3
//  4   5   6   7
//  8   9  10  11
// 12  13  14  15


//sqr
var sqr1= result[1] + result[6] + result[11]
var sqr11= result[0] + result[5] + result[10]
var sqr111= result[5] + result[10] + result[15]
var sqr1111= result[4] + result[9] + result[14]


var sqr2= result[2] + result[5] + result[8]
var sqr22= result[3] + result[6] + result[9]
var sqr222= result[6] + result[9] + result[12]
var sqr2222= result[7] + result[10] + result[13]






    //rows
    if(checkMatch(row1)){
        document.getElementById('labe').innerHTML = winnerResult(row1);
        document.getElementById('table').classList.add('done');
        document.getElementById('reload').style.display= 'block';
        emptyCell()

        return
    }
    if(checkMatch(row11)){
        document.getElementById('labe').innerHTML = winnerResult(row11);
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
    if(checkMatch(row22)){
        document.getElementById('labe').innerHTML = winnerResult(row22)
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

    
    if(checkMatch(row33)){
        document.getElementById('labe').innerHTML = winnerResult(row33)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
        if(checkMatch(row4)){
            document.getElementById('labe').innerHTML = winnerResult(row4)
            document.getElementById('table').classList.add('done')
            document.getElementById('reload').style.display= 'block';
            emptyCell()
            return
            }
    
        
        if(checkMatch(row44)){
            document.getElementById('labe').innerHTML = winnerResult(row44)
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
    if(checkMatch(col11)){
        document.getElementById('labe').innerHTML = winnerResult(col11)
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
    
    if(checkMatch(col22)){
        document.getElementById('labe').innerHTML = winnerResult(col22)
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
    
    if(checkMatch(col33)){
        document.getElementById('labe').innerHTML = winnerResult(col33)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    
        if(checkMatch(col4)){
            document.getElementById('labe').innerHTML = winnerResult(col4)
            document.getElementById('table').classList.add('done')
            document.getElementById('reload').style.display= 'block';
            emptyCell()
            return
            }
        
        if(checkMatch(col44)){
            document.getElementById('labe').innerHTML = winnerResult(col44)
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
    if(checkMatch(sqr11)){
        document.getElementById('labe').innerHTML = winnerResult(sqr11)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    if(checkMatch(sqr111)){
        document.getElementById('labe').innerHTML = winnerResult(sqr111)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    if(checkMatch(sqr1111)){
        document.getElementById('labe').innerHTML = winnerResult(sqr1111)
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

    if(checkMatch(sqr22)){
        document.getElementById('labe').innerHTML = winnerResult(sqr22)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }
    if(checkMatch(sqr222)){
        document.getElementById('labe').innerHTML = winnerResult(sqr222)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }

    if(checkMatch(sqr2222)){
        document.getElementById('labe').innerHTML = winnerResult(sqr2222)
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        }



    if(is3(row1) && is3(row11) && is3(row2) && is3(row22) && is3(row3) && is3(row33) &&is3(row4) && is3(row44) && is3(col1) && is3(col2) && is3(col3) && is3(col11) && is3(col22) && is3(col33)&& is3(col4) && is3(col44)  && is3(sqr1) &&is3(sqr11) &&is3(sqr111) &&is3(sqr1111) && is3(sqr2)&& is3(sqr22)&& is3(sqr222)&& is3(sqr2222)){
        document.getElementById('labe').innerHTML = "No Winner!"
        document.getElementById('table').classList.add('done')
        document.getElementById('reload').style.display= 'block';
        emptyCell()
        return
        } else {
        document.getElementById('labe').innerHTML = "Continue..."
        return 
     

    }


}
