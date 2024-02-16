import { RequestInterface } from "../hooks";
import {
  UserLoginInterface,
  RegisterInterface,
  BaseResponseInterface,
} from "../interfaces";
import {
  RequestConfirmInputInterface,
  TimesheetInterface,
} from "../interfaces/Timesheet";

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
  getTimeSheets(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<unknown, unknown> {
    return {
      method: "Get",
      url: this.creatorUrl("api/pasmand/user-driver/request"),
      header: this.creatorToken(accessToken, refreshToken),
    };
  }
  setTimeSheetRequest(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<{ timeSheetRequest: string }, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("api/pasmand/user-driver/request"),
      header: this.creatorToken(accessToken, refreshToken),
    };
  }
  getTimeSheetsDone(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<unknown, unknown> {
    return {
      method: "Get",
      url: this.creatorUrl("api/pasmand/user-driver/done"),
      header: this.creatorToken(accessToken, refreshToken),
    };
  }
  activeTimeSheetRequest(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<unknown, unknown> {
    return {
      method: "Get",
      url: this.creatorUrl("api/pasmand/user-driver/active/request"),
      header: this.creatorToken(accessToken, refreshToken),
    };
  }
  saveActiveTimeSheetRequest(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<{ timeSheetRequest: string }, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("api/pasmand/user-driver/active/request"),
      header: this.creatorToken(accessToken, refreshToken),
    };
  }
  getRequestInformation(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<unknown, { id: string }> {
    return {
      method: "Get",
      url: this.creatorUrl("api/pasmand/request/Information"),
      header: this.creatorToken(accessToken, refreshToken),
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
  getCategories(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<unknown, unknown> {
    return {
      method: "Get",
      url: this.creatorUrl("api/pasmand/user-driver/categories"),
      header: this.creatorToken(accessToken, refreshToken),
    };
  }
  setRequestFinal(
    accessToken: string,
    refreshToken: string
  ): RequestInterface<RequestConfirmInputInterface, unknown> {
    return {
      method: "Post",
      url: this.creatorUrl("api/pasmand/user-driver/final/request"),
      header: this.creatorToken(accessToken, refreshToken),
    };
  }
  getGeoInformation(): RequestInterface<unknown, { lat: number; lon: number }> {
    return {
      method: "Get",
      url: `https://map.ir/reverse`,
      header: {
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFhZDdlZWZkNTdkZDljYWMzZDQ0MDkzYWRkMTQzNGY2MWUxZTE3MjhmNGMwZDNjZjc1NmZmYjY3MjNiZDk4NTNkODE0MjA1NDM2MzI2ZTA5In0.eyJhdWQiOiIyNTYxMyIsImp0aSI6IjFhZDdlZWZkNTdkZDljYWMzZDQ0MDkzYWRkMTQzNGY2MWUxZTE3MjhmNGMwZDNjZjc1NmZmYjY3MjNiZDk4NTNkODE0MjA1NDM2MzI2ZTA5IiwiaWF0IjoxNzA0MTkxNjA5LCJuYmYiOjE3MDQxOTE2MDksImV4cCI6MTcwNjY5NzIwOSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Qou-QPNso-ALvjyssb7RP4bX4ZA2xsyoHk5Shl-H-3Q7iXBXf7hlmj62FisHo88SKgQmqJZUCkjPC2dAxyOIxGDUvhQvvJKdlAeKhApT3G-Ua3_84lAAdbUa7Ao64ZuVgTjO2fYdcN76T3G18BM5-BsSfcpetUi-ppHZwtMS7_p438JEi7ddm2Q4nKprTS-INjGTmueThieQzOvjBBc5xzo5LdTG4jmxEAW7XEK8m2cjLnWHZjbJky1H3PTPetwZjjWBg1zB32mVItlJU5Jlv21LVcS1GlbB-hYlOaKa2iUrpMACMb8i1Hn_krSdaxCRYQA1Ot0l4_TWOEQg5cFAsA",
      },
    };
  }
}

export default new RequestApi();
