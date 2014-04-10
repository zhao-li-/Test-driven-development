function Num(){
    var nums = [];
    var thousand = parseInt(Math.random()*9 +1);
    nums.push(thousand);
    while (nums.length<4){
        var num = parseInt(Math.random()*10);
        if(!_.contains(nums,num)){
            nums.push(num);
        }
    }
    return nums[0]*1000+nums[1]*100+nums[2]*10+nums[3];
}
Num.prototype.judge = function(){
//    if(){
//        return true;
//    }
}