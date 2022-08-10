function displayStats(n) {
    list.forEach(x => {
        sum += x;
    });
    avg = sum / list.length;
    
    // let minNum = Math.min.apply(Math, list);
    // let maxNum = Math.max.apply(Math, list);
    
    // display = alert('negative int already' + 'and positive int = ' + list + 'min = ' + maxNum)


    // alert('sum = ' + sum + 'avg = ' + avg)
    return console.log(avg);
}

displayStats();

// const arr = [1, 2, 3, 4, 5];
// var sum = 0;
// arr.forEach(function(num) { sum += num });
// average = sum / arr.length;
// console.log(average);