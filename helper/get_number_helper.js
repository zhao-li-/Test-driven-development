function should_not_repeated(string_number) {
    var thousands = string_number.substring(0, 1);
    var hundreds = string_number.substring(1, 2);
    var tens = string_number.substring(2, 3);
    var single = string_number.substring(3, 4);
    if (thousands != hundreds && thousands != tens && thousands != single && hundreds != tens && hundreds != single && tens != single) {
        return true;
    }
}

function should_one_random_number() {
    var numbers = [];
    for (var i = 0; i < 1000; i++) {
        numbers.push(random_a_number())
    }
    var grouped_numbers = _.groupBy(numbers, function (number) {
        return parseInt(number)
    })
    var counted_numbers = _.map(grouped_numbers, function (value, key) {
        return {"number": key, "count": value.length}
    })
    return !_.find(counted_numbers, function (counted_number) {
        return counted_number.count > 10
    })

}