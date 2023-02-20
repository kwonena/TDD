class ProductService {
  constructor(productClient) {
    // 클래스 내부에서 스스로 의존성을 정의하면 defendency injection
    // 필요한 것은 외부로부터 받아오는 것이 더 좋음
    // this.productClient = new ProductClient();
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((item) => item.filter((item) => item.available));
  }
}

module.exports = ProductService;
