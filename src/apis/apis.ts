import { RequestInterface } from "../hooks";
import { UserLoginInterface, RegisterInterface } from "../interfaces";

class RequestApi {
  private baseUrl: string = "";
  private creatorToken = (accessToken: string, refreshToken: string) => {
    return { accessToken, refreshToken };
  };
  private creatorUrl = (token: string) => `${this.baseUrl}${token}`;
  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL as string;
  }
  getFAQList(
    query: { type: "driver" },
    accessToken: string,
    refreshToken: string
  ): RequestInterface<unknown, { type: "driver" }> {
    return {
      method: "Get",
      url: this.creatorUrl("api/pasmand/question"),
      header: this.creatorToken(accessToken, refreshToken),
      query: query,
    };
  }
  loginUser(): RequestInterface<UserLoginInterface, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("api/pasmand/user-driver/login/app"),
    };
  }
  registerUser(): RequestInterface<RegisterInterface, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("api/pasmand/user-driver/sms/login/app"),
    };
  }
  getSMSVerifyCode(): RequestInterface<{ nationalCode: string }, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("api/pasmand/user-driver/sms/app"),
    };
  }
  uploadAvatar(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<FormData, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("api/pasmand/user-driver/upload/app"),
      header: this.creatorToken(accessToken, refreshToken),
      reuqestType: "form-data",
    };
  }
  deleteAvatar(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<unknown, unknown> {
    return {
      method: "Delete",
      url: this.creatorUrl("api/pasmand/user-driver/upload/app"),
      header: this.creatorToken(accessToken, refreshToken),
    };
  }
}

export default new RequestApi();
