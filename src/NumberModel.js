function random_a_number() {
    var numbers = [];
    for(var i=0;i<4;i++){
        var number = parseInt(Math.random() * 10);
    }
    return numbers[0] * 1000 + numbers[1] * 100 + numbers[2] * 10 + numbers[3];
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