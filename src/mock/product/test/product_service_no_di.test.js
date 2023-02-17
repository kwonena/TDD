const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

// mock : 구현 사항 없이 원하는 부분만 부분적으로 가짜 함수로 구현
// mock 함수를 사용하겠다고 명시
jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "banana", available: false },
  ]);

  // ProdectClient의 fetchItems 함수를 test 코드의 fetchItems 함수로 대체
  // mockImplementation를 사용해 대체할 수 있음
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("only available items", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
