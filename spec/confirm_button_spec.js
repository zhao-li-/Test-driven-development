describe("confirm_button", function () {

    beforeEach(function () {
        init_data();
    })

    it("should restart when guess in the seven time", function () {
        var given_number = "1234";
        var wrong_number = "5678"
        for(var i=0;i<7;i++){
            document.getElementById("input_content").value = wrong_number;
            document.getElementById("confirm").click();
        }
        for(var i=1;i<7;i++){
            var guess = document.getElementById("guess"+i).textContent;
            expect(guess).toEqual("");
        }
        var guess6 = document.getElementById("guess6").textContent;
    })

    it("should not react when guess_number length less than 4", function () {
        document.getElementById("input_content").value.length = 3;
        document.getElementById("confirm").click();
        var guess1 = document.getElementById("guess1").textContent;

        expect(guess1).toEqual("");
    })

    it("should not react when guess_number repeat", function () {
        document.getElementById("input_content").value = 1111;
        document.getElementById("confirm").click();
        var guess1 = document.getElementById("guess1").textContent;

        expect(guess1).toEqual("");
    })

    it("should output 2A1B if user guess 1236 while answer is 1243 in the first time", function () {
        document.getElementById("input_content").value = 1236;
        localStorage.setItem("number", 1243);
        document.getElementById("confirm").click();
        var information = document.getElementById("guess1").textContent;

        expect(information).toEqual("第1次尝试：2A1B");
    })

    it("should output lose information if user guess wrong in the sixth time", function () {
        localStorage.setItem("number",5678)
        for(var i=0;i<6;i++){
            document.getElementById("input_content").value = "1234";
            document.getElementById("confirm").click();
        }
        var guesses = [];
        for(var i=1;i<6;i++){
            var guess = document.getElementById("guess"+i).textContent;
            guesses.push(guess);
        }
        var guess6 = document.getElementById("guess6").textContent;

        for(var i=1;i<6;i++){
        expect(guesses[i-1]).toEqual("第"+i+"次尝试：0A0B");
        }
        expect(guess6).toEqual("第6次尝试：0A0B You lose!");
    })

    it("should output succeed information when guess right in the first time", function () {
        var given_number = localStorage.getItem("number")
        document.getElementById("input_content").value = given_number;
        document.getElementById("confirm").click();
        var information = document.getElementById("guess1").textContent;

        expect(information).toEqual("第1次尝试：4A0B  恭喜成功!");
    })

    it("should output succeed information when guess right in the sixth time", function () {
        var given_number = "1234";
        localStorage.number =1234
        var wrong_number = "5678"
        for(var i=0;i<5;i++){
            document.getElementById("input_content").value = wrong_number;
            document.getElementById("confirm").click();
        }
        document.getElementById("input_content").value = given_number;
        document.getElementById("confirm").click();
        var guesses = [];
        for(var i=1;i<6;i++){
            var guess = document.getElementById("guess"+i).textContent;
            guesses.push(guess);
        }
        var guess6 = document.getElementById("guess6").textContent;

        for(var i=1;i<6;i++){
            expect(guesses[i-1]).toEqual("第"+i+"次尝试：0A0B");
        }
        expect(guess6).toEqual("第6次尝试：4A0B  恭喜成功!");
    })

    it("should clear the input content when click confirm_button", function () {
        document.getElementById("input_content").value ="1234"
        document.getElementById("confirm").click()
        var content = document.getElementById("input_content").value;

        expect(content).toEqual("");
    })
})