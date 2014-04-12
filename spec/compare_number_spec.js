describe("compare_number", function () {

    it("should back 0A0B when guess 1234 for 5678 ", function () {
        var back_string = compare("1234", "5678")
        expect(back_string).toEqual("0A0B");
    });

    it("should back 0A4B when guess 1234 for 4321 ", function () {
        var back_string = compare("1234", "4321")
        expect(back_string).toEqual("0A4B");
    });

    it("should back 4A0B when guess 1234 for 1234 ", function () {
        var back_string = compare("1234", "1234")
        expect(back_string).toEqual("4A0B");
    });

    it("should back 2A2B when guess 1234 for 1243 ", function () {
        var back_string = compare("1234", "1243")
        expect(back_string).toEqual("2A2B");
    });

    it("should back 0A0B when guess 5678 for 1243 ", function () {
        var back_string = compare("5678", "1243")
        expect(back_string).toEqual("0A0B");
    });

    it("should back 2A1B when guess 1236 for 1243 ", function () {
        var back_string = compare("1236", "1243")
        expect(back_string).toEqual("2A1B");
    });

    it("should back 0A3B when guess 2435 for 1243 ", function () {
        var back_string = compare("2435", "1243")
        expect(back_string).toEqual("0A3B");
    });

    it("should back 3A0B when guess 1246 for 1243 ", function () {
        var back_string = compare("1246", "1243")
        expect(back_string).toEqual("3A0B");
    });
});