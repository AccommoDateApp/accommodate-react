type RequestMethod = "get" | "post" | "put" | "delete";

export class HttpClient {
  protected get headers() : Headers {
    return new Headers();
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
      body,
      headers: this.headers,
      method,
    });

    return await response.json();
  }
}
