// stub : 기존 인터페이스를 사용해 구현된 코드이며 진짜 코드에 적용 가능
// mock이 아닌 실제로 구현된 클래스
class StubProductClient {
  async fetchItems() {
    return [
      { item: "Milk", available: true },
      { item: "banana", available: false },
    ];
  }
}

module.exports = StubProductClient;
