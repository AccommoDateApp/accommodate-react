import { apiBaseUrl } from "../config";
import { Profile } from "../state/profile";
import { HttpClient } from "./http";

export class ApiClient extends HttpClient {
  private readonly tokenLocalStorageKey = "api_token";

  private get token() : string {
    const token = localStorage.getItem(this.tokenLocalStorageKey);

    if (!token) {
      return "";
    }

    return token;
  }

  private set token(value: string) {
    localStorage.setItem(this.tokenLocalStorageKey, value);
  }

  public get isLoggedIn() : boolean {
    return !!this.token;
  }

  constructor(private readonly baseUrl: string) {
    super();
  }

  protected get headers() : Headers {
    const headers = super.headers;

    if (this.token) {
      headers.set("Authorization", `Bearer ${this.token}`);
    }

    return headers;
  }

  public async login(email: string, password: string) : Promise<boolean> {
    try {
      this.token = await this.post<string>(`${this.baseUrl}/users/login`, {
        email,
        password,
      });

      return true;
    } catch {
      // ignore the login error
    }

    return false;
  }

  public async logout() : Promise<void> {
    this.token = "";
  }

  public async signup(email: string, password: string) : Promise<boolean> {
    try {
      this.token = await this.post<string>(`${this.baseUrl}/users/signup`, {
        email,
        password,
      });

      return true;
    } catch (error) {
      throw error;
    }
  }

  public async updateBio(bio: Profile) {
    return await this.put<Profile>(`${this.baseUrl}/users/me`, bio);
  }
}

export const api = new ApiClient(apiBaseUrl);
