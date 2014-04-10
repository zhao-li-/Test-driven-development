describe("Num", function () {


    beforeEach(function () {

    });

    it("should be four random no-repeat digits ", function () {
        var num = Num();
        console.log(num);
        var judge = num.judge();
        expect(judge).toBeTruthy();
    });

});