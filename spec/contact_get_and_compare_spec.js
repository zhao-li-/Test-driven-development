describe("contact_get_and_compare",function(){

    beforeEach(function(){
        init_data();
    })

    it("should back 4A0B when guess right",function(){
        var given_number = localStorage.getItem("number");

        expect(compare(given_number,given_number)).toEqual("4A0B");
    })

    it("should back 2A1B when guess 1236 for 1243 ", function () {
        var back_string = compare("1236", "1243")

        expect(back_string).toEqual("2A1B");
    });
})