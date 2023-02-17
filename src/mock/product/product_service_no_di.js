const ProductClient = require("./product_client");

class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((item) => item.filter((item) => item.available));
  }
}

module.exports = ProductService;
