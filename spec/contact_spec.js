describe("contact", function () {

    beforeEach(function () {
        localStorage.setItem("number", 1243);
        document.getElementById("input_content").value = "1236";
    });

    it("should back 4A0B when guess right", function () {
        var guess_number = localStorage.getItem("number");

        expect(compare(guess_number, localStorage.number)).toEqual("4A0B");
    });


    it("should back 2A1B if input 1236 when answer is 1243 ", function () {
        var given_number = localStorage.getItem("number");
        var guess_number = document.getElementById("input_content").value;
        var back_string = compare(guess_number, given_number);

        expect(back_string).toEqual("2A1B");
    });
})