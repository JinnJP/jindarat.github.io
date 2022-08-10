//main
let list  = readInput(); //variable to keep fucntion
displayStats(list);

//to read input when user entered 
function readInput() {
    let numList = [];
    while(true) {
        let numInput = Number(prompt("Enter an integer (a negative interger to quite):"));
        if (!isInt(numInput)) continue;  //check int
        if (numInput > 0) {
            numList.push(numInput);
            continue;
        } else {
            return numList;
        }
    }
}

//check int
function isInt(n) {
    return n % 1 == 0;
}

function averageNum(n) {
    let total = 0;
    for (let i = 0; i < n.length; i++) {
        total += n[i];
    }
    let avg = !n.length ? "0" : (total / n.length).toFixed(2);  //decimal 2 points
    return avg;
}

function minNum(n) {
    let minNum = !n.length ? "0" : Math.min(...n);
    return minNum;
}

function maxNum(n) {
    let maxNum = !n.length ? "0" : Math.max(...n);
    return maxNum;
}

function displayStats(list) {
    alert('For the list '+ list + ', the average is ' + averageNum(list) + ', the minimum is ' + minNum(list) + ', and the maximum is ' + maxNum(list));
}



