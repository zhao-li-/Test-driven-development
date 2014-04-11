function random_a_number(){
    var numbers = [];
    var thousand = parseInt(Math.random()*9 +1);
    numbers.push(thousand);
    while (numbers.length<4){
        var number = parseInt(Math.random()*10);
        if(!_.contains(numbers,number)){
            numbers.push(number);
        }
    }
    return numbers[0]*1000+numbers[1]*100+numbers[2]*10+numbers[3];
}