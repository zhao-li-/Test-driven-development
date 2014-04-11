function should_not_repeated(number) {
    var string_number = number.toString();
    var thousands = string_number.substring(0, 1);
    var hundreds = string_number.substring(1, 1);
    var tens = string_number.substring(2, 1);
    var single = string_number.substring(3, 1);
    if (thousands != hundreds && thousands != tens && thousands != single && hundreds != tens && hundreds != single && tens != single) {
        return true;
    }
}
function should_one_random_num() {
    var start_number_count = 0;
    var end_number_count = 0;
    for (var i = 0; i < 1000000; i++) {
        var number = random_a_number();
        if (number == 1234) {
            start_number_count++;
        }
        if (number == 9876) {
            end_number_count++;
        }
    }
    if (start_number_count > 100 && start_number_count < 300 && end_number_count > 100 & end_number_count < 300) {
        return true;
    }
}