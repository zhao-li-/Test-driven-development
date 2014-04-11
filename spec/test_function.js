function should_not_repeated(number){
    var num = number.toString();
    var thousands = num.substring(0,1);
    var hundreds = num.substring(1,1);
    var tens = num.substring(2,1);
    var single = num.substring(3,1);
    if(thousands!=hundreds && thousands!=tens && thousands!=single && hundreds!=tens && hundreds!=single && tens!=single){
        return true;
    }
}
function should_one_random_num(){
    var start_num_count =0;
    var end_num_count = 0;
    for (var i=0;i<1000000;i++){
        var num = random_a_number();
        if(num == 1234){
            start_num_count ++;
        }
        if(num == 9876){
            end_num_count ++;
        }
    }
    console.log(start_num_count);
    console.log(end_num_count);
    if(start_num_count>100 && start_num_count <300 &&end_num_count>100 &end_num_count<300){
        return true;
    }
}