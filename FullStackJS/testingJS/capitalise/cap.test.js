const cap = require('./cap');

test("hello will be Hello", ()=> {
    expect(cap("hello")).toEqual("Hello");
})