describe("restart_button", function () {

    beforeEach(function () {
        localStorage.clear();
    })

    it("should random a number and localStorage it", function () {
        document.getElementById("restart").click();

        expect(localStorage.number).toBeDefined();
    })

    it("should set guess_count to 0", function () {
        document.getElementById("restart").click();

        expect(localStorage.guess_count).toEqual("0");
    })

    it("should clear the label text", function () {
        document.getElementById("restart").click();

        for (var i = 1; i < 7; i++) {
            expect(document.getElementById("guess" + i).textContent).toEqual("");
        }
    })
})