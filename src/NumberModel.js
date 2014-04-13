function random_a_number() {
    var numbers = [];
    while(numbers.length<4){
        var number = parseInt(Math.random() * 10).toString();
        if(!_.contains(numbers,number)){
            numbers.push(number)
        }
    }
    return numbers[0] + numbers[1]  + numbers[2] + numbers[3];
}

function compare(guess_number, given_number) {
    var guess_numbers = [];
    var given_numbers = [];
    for (var i = 0; i < 4; i++) {
        guess_numbers.push(guess_number.substring(i, i + 1));
        given_numbers.push(given_number.substring(i, i + 1));
    }
    var count_a = 0;
    var all_b = 0;
    for (var l = 0; l < 4; l++) {
        if (guess_numbers[l] == given_numbers[l]) {
            count_a++;
        }
    }
    for (var i = 0; i < 4; i++) {
        if (_.contains(guess_numbers, given_numbers[i])) {
            all_b++;
        }
    }
    var count_b = all_b - count_a;
    return count_a + "A" + count_b + "B"
}