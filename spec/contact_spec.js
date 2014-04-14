describe("contact", function () {

    beforeEach(function () {
        localStorage.setItem("number", 1243);
        document.getElementById("input_content").value = "1236";
    });

    it("should back 4A0B when guess right", function () {
        var guess_number = localStorage.getItem("number");

        expect(compare(guess_number, localStorage.number)).toEqual("4A0B");
    });
})