const fetchProduct = require("../async.js");

describe("Async", () => {
  // 비동기 코드를 동기적으로 작성하면 에러 없이 끝났을 때 오류라고 받아들이지 않음
  it("async", () => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  // 수동적으로 done 콜백함수를 인자로 사용
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
    done();
  });

  // 간편하게 사용하는 방법
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  // await 사용하기
  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  // resolve -> 비동기라서 return을 해주어야 함
  it("async-resolves", async () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  // reject
  it("async-reject", async () => {
    return expect(fetchProduct("error")).rejects.toEqual("network error");
  });
});
