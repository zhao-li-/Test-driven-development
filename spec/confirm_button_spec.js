describe("confirm_button", function () {

    beforeEach(function () {
        init_data();
    })

    it("should make guess_count increase", function () {
        var before_count = parseInt(localStorage.getItem("guess_count"));
        confirm_data();
        var after_count = parseInt(localStorage.getItem("guess_count"));

        expect(before_count).toEqual(after_count - 1);
    })

    it("should be false when guess more than seven times", function () {
        localStorage.setItem("guess_count", 6);

        expect(make_illegal_no_alert()).toBeUndefined();
    })

    it("should be false when guess_number length less than 4", function () {
        document.getElementById("input_content").value.length = 3;

        expect(make_illegal_no_alert()).toBeUndefined();
    })

    it("should be false when guess_number repeat", function () {
        document.getElementById("input_content").value = 1111;

        expect(make_illegal_no_alert()).toBeUndefined();
    })

    it("should back 2A1B information when guess 1236 for 1243", function () {
        document.getElementById("input_content").value = 1236;
        localStorage.setItem("number", 1243);
        confirm_data();
        var information = document.getElementById("guess1").textContent;

        expect(information).toEqual("第1次尝试：2A1B");
    })

    it("should back lose information when guess wrong", function () {
        confirm_data();
        confirm_data();
        confirm_data();
        confirm_data();
        confirm_data();
        confirm_data();
        var information = document.getElementById("guess6").textContent;

        expect(information).toEqual("第6次尝试：0A0B You lose!");
    })

    it("should back succeed information when guess right", function () {
        var given_number = localStorage.getItem("number")
        document.getElementById("input_content").value = given_number;
        confirm_data();
        var information = document.getElementById("guess1").textContent;

        expect(information).toEqual("第1次尝试：4A0B  恭喜成功!");
    })

    it("should clear the input content", function () {
        confirm_data();
        var content = document.getElementById("input_content").value;

        expect(content).toEqual("");
    })
})