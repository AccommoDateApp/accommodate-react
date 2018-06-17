import { apiBaseUrl } from "../config";
import { HttpClient } from "./http";

export class ApiClient extends HttpClient {
  private token?: string;

  constructor(private readonly baseUrl: string) {
    super();
  }

  protected get headers() : Headers {
    const headers = new Headers();

    if (this.token) {
      headers.set("Authorization", `Bearer ${this.token}`);
    }

    return headers;
  }

  public async login(username: string, password: string) : Promise<string> {
    const response = await this.post<string>(`${this.baseUrl}/login`, {
      password,
      username,
    });

    return response;
  }
}

export const api = new ApiClient(apiBaseUrl);
