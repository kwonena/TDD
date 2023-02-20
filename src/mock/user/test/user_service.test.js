const UserService = require("../user_service");
const UserClient = require("../user_client");

jest.mock("../user_client");

describe("Login", () => {
  const login = jest.fn(async () => "success");

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("Loged In", async () => {
    await userService.login("ena", "ena");

    expect(login.mock.calls.length).toBe(1);
  });

  // 이미 로그인이 되어있는 상황 가정
  it("Already Loged In", async () => {
    await userService.login("ena", "ena");
    await userService.login("ena", "ena");

    expect(login.mock.calls.length).toBe(1);
  });
});
