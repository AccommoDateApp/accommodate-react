type RequestMethod = "get" | "post" | "put" | "delete";

export class HttpClient {
  protected get headers() : Headers {
    const headers = new Headers();

    headers.set("Content-Type", "application/json");

    return headers;
  }

  protected async get<T>(url: string) : Promise<T> {
    return await this.request<T>("get", url);
  }

  protected async post<T>(url: string, body?: FormData | any) : Promise<T> {
    return await this.request<T>("post", url, body);
  }

  protected async put<T>(url: string, body?: any) : Promise<T> {
    return await this.request<T>("put", url, body);
  }

  protected async delete<T>(url: string) : Promise<T> {
    return await this.request<T>("delete", url);
  }

  private async request<T>(method: RequestMethod, url: string, body?: any) : Promise<T> {
    const response = await fetch(url, {
      body: JSON.stringify(body),
      headers: this.headers,
      method,
    });

    const json = await response.json();
    const isErrorMessage = typeof json === "object" && json.message && json.name;

    if (!response.ok || isErrorMessage) {
      throw json;
    }

    return json;
  }
}
