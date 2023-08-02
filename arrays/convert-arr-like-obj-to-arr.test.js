const {
  convertToArrayMethod1,
  convertToArrayMethod2,
  convertToArrayMethod3,
  convertToArrayMethod4,
  convertToArrayMethod5,
  convertToArrayMethod6,
  convertToArrayMethod7,
} = require("./convert-arr-like-obj-to-arr");

const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

describe("Convert Array Like Object to Array", () => {
  it("convertToArrayMethod1 should convert array-like object to array", () => {
    const expected = ["a", "b", "c"];
    expect(convertToArrayMethod1(arrayLike)).toEqual(expected);
  });

  it("convertToArrayMethod2 should throw type error", () => {
    const fn = () => {
      convertToArrayMethod2(arrayLike);
    };
    expect(fn).toThrow(TypeError);
    expect(fn).toThrow("arrayLike is not iterable");
  });

  it("convertToArrayMethod3 should throw type error", () => {
    const fn = () => {
      convertToArrayMethod3(arrayLike);
    };
    expect(fn).toThrow(TypeError);
    expect(fn).toThrow("arrayLike is not iterable");
  });

  it("convertToArrayMethod4 should convert array-like object to array", () => {
    const expected = ["a", "b", "c"];
    expect(convertToArrayMethod4(arrayLike)).toEqual(expected);
  });

  it("convertToArrayMethod5 should convert array-like object to array", () => {
    const expected = ["a", "b", "c"];
    expect(convertToArrayMethod5(arrayLike)).toEqual(expected);
  });

  it("convertToArrayMethod6 should convert array-like object to array", () => {
    const expected = ["a", "b", "c", 3];
    expect(convertToArrayMethod6(arrayLike)).toEqual(expected);
  });

  it("convertToArrayMethod7 should convert array-like object to array", () => {
    const expected = ["a", "b", "c"];
    expect(convertToArrayMethod7(arrayLike)).toEqual(expected);
  });
});
