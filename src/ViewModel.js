function init_data(){
    localStorage.setItem("number",random_a_number());
    localStorage.setItem("guess_count",0)
    for(var i=1;i<7;i++){
        document.getElementById("guess"+ i).textContent = "";
    }
}

function confirm_data(){
    var guess_count = parseInt(localStorage.getItem("guess_count")) +1;
    if(guess_count>6){
        return;
    }
    localStorage.setItem("guess_count",guess_count);
    var guess_number = document.getElementById("input_content").value;
    var given_number = localStorage.getItem("number");
    var tips = compare(guess_number,given_number);
    var succeed = "";
    if(tips == "4A0B"){
        succeed ="  恭喜成功!"
    }
    if(tips !="4A0B" &&guess_count ==6){
        succeed = " You lose!"
    }
    document.getElementById("guess"+guess_count).textContent = "第"+guess_count+"次尝试："+tips+succeed;
    document.getElementById("input_content").value = "";
}

