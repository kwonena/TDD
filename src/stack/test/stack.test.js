const Stack = require("../stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push item", () => {
    stack.push("바나나");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throws error", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });

    it("return last item", () => {
      stack.push("바나나");
      stack.push("사과");

      expect(stack.pop()).toBe("사과");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("throws error", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    });

    it("item stay", () => {
      stack.push("바나나");
      stack.push("사과");

      expect(stack.peek()).toBe("사과");
      expect(stack.size()).toBe(2);
    });
  });
});
