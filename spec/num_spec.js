describe("Num", function () {

    var num = random_a_number();

    it("should be one number ", function () {
        expect(num).not.toBeNaN();
    });
    it("should be four digit numbers ", function () {
        expect(num.toString().length).toEqual(4);
    });

    it("should not repeated", function () {
        var not_repeated = should_not_repeated(num);
        expect(not_repeated).toBeTruthy();
    });
    it("should be one random number ", function () {
        var is_random_number = should_one_random_num();
        expect(is_random_number).toBeTruthy();
    });
});