function init_data() {
    localStorage.setItem("number", random_a_number());
    localStorage.setItem("guess_count", 0)
    for (var i = 1; i < 7; i++) {
        document.getElementById("guess" + i).textContent = "";
    }
}

function judge_not_repeated(string_number) {
    var thousands = string_number.substring(0, 1);
    var hundreds = string_number.substring(1, 2);
    var tens = string_number.substring(2, 3);
    var single = string_number.substring(3, 4);
    if (thousands != hundreds && thousands != tens && thousands != single && hundreds != tens && hundreds != single && tens != single) {
        return true;
    }
}

function make_illegal_no_alert() {
    var guess_count = parseInt(localStorage.getItem("guess_count")) + 1;
    if (guess_count > 6) {
        document.getElementById("input_content").value = "";
        init_data();
        return;
    }
    var string_number = document.getElementById("input_content").value;
    if (string_number.length < 4) {
        return;
    }
    if (!judge_not_repeated(string_number)) {
        return;
    }
    return true;
}

function make_illegal() {
    var guess_count = parseInt(localStorage.getItem("guess_count")) + 1;
    if (guess_count > 6) {
        alert("你已经尝试失败，请重新开始");
        document.getElementById("input_content").value = "";
        init_data();
        return;
    }
    var string_number = document.getElementById("input_content").value;
    if (string_number.length < 4) {
        alert("请输入４位数字");
        return;
    }
    if (!judge_not_repeated(string_number)) {
        alert("请保证数字不重复");
        return;
    }
    return true;
}

function confirm_click() {
    if (make_illegal()) {
        confirm_data();
    }
}

function confirm_data() {
    var guess_count = parseInt(localStorage.getItem("guess_count")) + 1;
    localStorage.setItem("guess_count", guess_count);
    var guess_number = document.getElementById("input_content").value;
    var given_number = localStorage.getItem("number");
    var tips = compare(guess_number, given_number);
    var succeed = "";
    if (tips == "4A0B") {
        succeed = "  恭喜成功!"
    }
    if (tips != "4A0B" && guess_count == 6) {
        succeed = " You lose!"
    }
    document.getElementById("guess" + guess_count).textContent = "第" + guess_count + "次尝试：" + tips + succeed;
    document.getElementById("input_content").value = "";
}

