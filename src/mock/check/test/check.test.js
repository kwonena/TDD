const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  // beforeEach를 사용해 같은 값으로 초기화
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // 한 번은 호출되어야 한다는 뜻
    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);

    expect(onFail.mock.calls.length).toBe(0);

    // calls의 첫번째로 호출된 함수의 첫번째 인자
    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");
  });

  it("should call onSuccess when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
  });
});
