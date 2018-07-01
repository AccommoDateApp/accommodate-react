import { apiBaseUrl } from "../config";
import { Biography, UserMode } from "../state/biography";
import { MatchedPair, UserMatches } from "../state/match";
import { PowerUp, Purchase } from "../state/store";
import { HttpClient } from "./http";

export class ApiClient extends HttpClient {
  private readonly tokenLocalStorageKey = "api_token";

  protected get token() : string {
    const token = localStorage.getItem(this.tokenLocalStorageKey);

    if (!token) {
      return "";
    }

    return token;
  }

  protected set token(value: string) {
    localStorage.setItem(this.tokenLocalStorageKey, value);
  }

  public get isLoggedIn() : boolean {
    return !!this.token;
  }

  constructor(protected readonly baseUrl: string) {
    super();
  }

  protected get headers() : Headers {
    const headers = super.headers;

    if (this.token) {
      headers.set("Authorization", `Bearer ${this.token}`);
    }

    return headers;
  }

  public async login(email: string, password: string) : Promise<void> {
    this.token = await this.post<string>(`${this.baseUrl}/users/login`, {
      email,
      password,
    });
  }

  public async logout() : Promise<void> {
    this.token = "";
  }

  public async signup(email: string, password: string, mode: UserMode) : Promise<boolean> {
    return await this.post<boolean>(`${this.baseUrl}/users/signup`, {
      email,
      mode,
      password,
    });
  }

  public async fetchBio(id?: string) {
    if (id) {
      return await this.get<Biography>(`${this.baseUrl}/bio/${id}`);
    }

    return await this.get<Biography>(`${this.baseUrl}/bio`);
  }

  public async updateBio(bio: Partial<Biography>) {
    return await this.put<Biography>(`${this.baseUrl}/bio`, bio);
  }

  public async fetchPowerUps() : Promise<PowerUp[]> {
    return await this.get<PowerUp[]>(`${this.baseUrl}/powerups/store`);
  }

  public async purchasePowerUp(purchase: Purchase) : Promise<PowerUp[]> {
    return await this.post<PowerUp[]>(`${this.baseUrl}/powerups/store`, purchase);
  }

  public async fetchUserPowerups() : Promise<PowerUp[]> {
    return await this.get<PowerUp[]>(`${this.baseUrl}/powerups`);
  }

  public async usePowerUp(id: string) : Promise<PowerUp[]> {
    return await this.delete<PowerUp[]>(`${this.baseUrl}/powerups/${id}`);
  }

  public async uploadProfileImage(image: File) : Promise<any> {
    const form = new FormData();

    form.set("image", image);

    return await this.post<any>(`${this.baseUrl}/images/profile`, form);
  }

  public async uploadRealEstateImage(realEstateId: string, image: File) : Promise<any> {
    const form = new FormData();

    form.set("id", realEstateId);
    form.set("image", image);

    return await this.post<any>(`${this.baseUrl}/images/realestate`, form);
  }

  public async createRealEstate() : Promise<Biography> {
    return await this.post<Biography>(`${this.baseUrl}/bio/realestate`);
  }

  public async createMatch(matchedPair: MatchedPair) : Promise<boolean> {
    const url = `${this.baseUrl}/match/create`;
    const payload = {
      realEstateID: matchedPair.realEstate.id.toString(),
      tenantUserID: matchedPair.tenant.id.toString(),
    };
    await this.post<boolean>(url, payload);
    return true;
  }

  public async rejectMatch(matchedPair: MatchedPair) : Promise<boolean> {
    const url = `${this.baseUrl}/match/reject`;
    const payload = {
      realEstateID: matchedPair.realEstate.id.toString(),
      tenantUserID: matchedPair.tenant.id.toString(),
    };
    await this.post<boolean>(url, payload);
    return true;
  }

  public async fetchUserMatches() : Promise<UserMatches> {
    return await this.get<UserMatches>(`${this.baseUrl}/match/`);
  }
}

export const api = new ApiClient(apiBaseUrl);
