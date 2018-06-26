import { apiBaseUrl } from "../config";
import { ApiClient } from "./client";

export class MatchingClient extends ApiClient {
  public async acceptPotentialMatch(email: string) : Promise<string> {
    // TODO: Call API here
    const message = "Potential Match Accepted: " + email;
    console.log(message);
    return message;
  }

  public async rejectPotentialMatch(email: string) : Promise<string> {
    // TODO: Call API here
    const message = "Potential Match Rejected: " + email;
    console.log(message);
    return message;
  }
}

export const matchingApi = new MatchingClient(apiBaseUrl);
