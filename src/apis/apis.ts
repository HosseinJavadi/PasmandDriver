import { RequestInterface } from "../hooks";
import { UserLoginInterface, RegisterInterface } from "../interfaces";

class RequestApi {
  private baseUrl: string = "";
  private creatorToken = (token: string) => `bearer ${token}`;
  private creatorUrl = (token: string) => `${this.baseUrl}${token}`;
  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL as string;
  }
  getFAQList(
    query: { type: "driver" },
    token: string
  ): RequestInterface<unknown, { type: "driver" }> {
    return {
      method: "Get",
      url: this.creatorUrl("api/pasmand/question"),
      header: { token: this.creatorToken(token) },
      query: query,
    };
  }
  loginUser(): RequestInterface<UserLoginInterface, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("api/pasmand/user-driver/login/app"),
    };
  }
  verifyCode(): RequestInterface<{ nationalCode: string }, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("api/pasmand/user-driver/sms/app"),
    };
  }
}

export default new RequestApi();
