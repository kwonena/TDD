const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;

  // 공통적으로 초기화 되는 오브젝트 -> beforeEach 사용
  beforeEach(() => {
    cal = new Calculator();
  });

  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);

    expect(cal.value).toBe(9);
  });

  it("add", () => {
    cal.add(3);

    expect(cal.value).toBe(3);
  });

  it("add should throw an error if value can not be greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("substract", () => {
    cal.substract(3);

    expect(cal.value).toBe(-3);
  });

  it("multiply", () => {
    cal.set(3);
    cal.multiply(3);

    expect(cal.value).toBe(9);
  });

  describe("devides", () => {
    it("0 / 0 === NaN", () => {
      cal.set(0);
      cal.divide(0);

      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);

      expect(cal.value).toBe(Infinity);
    });

    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);

      expect(cal.value).toBe(1);
    });
  });
});
