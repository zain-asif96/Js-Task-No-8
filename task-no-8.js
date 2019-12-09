function num_into_time(num) {
    // check if value is number
    if (typeof num !== 'number') {
        return false;
    }

    // if value is number then,
    var hours = Math.floor(num / 60);
    var minutes = num % 60;

    return hours + ":" + minutes;

}

console.log(num_into_time(852));
console.log(num_into_time("abs22bxbb"));
console.log(num_into_time(99));