// list = readInput();
// displayStats(list);
const list = [];
while(true) {
    var inputNum = Number(prompt("Enter an integer (a negative integer to quit):"))
    if (!isInt(inputNum)) continue; //not integer 

    // list.push(inputNum)
    // if (inputNum < 0) {
    //     alert(list)
    //     displayStats(inputNum);
    //     break;
    // }
    


    if (inputNum > 0 ) {
        list.push(inputNum);
    } else if (inputNum < 0) {
        displayStats(inputNum);
        alert(avg);
        break;
    }
    
    // negative integer
    

        
    // showPrimes(inputNum);   
}

function isInt(n) {
    return n % 1 == 0;
}

  
function displayStats(n) {
    list.forEach(x => {
        sum += x;
    });
    avg = sum / list.length;
    
    // let minNum = Math.min.apply(Math, list);
    // let maxNum = Math.max.apply(Math, list);
    
    // display = alert('negative int already' + 'and positive int = ' + list + 'min = ' + maxNum)


    // alert('sum = ' + sum + 'avg = ' + avg)
    return avg;
}