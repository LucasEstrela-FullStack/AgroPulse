type ApiClientOptions = {
  baseUrl: string;
};

export class ApiClient {
  constructor(private readonly options: ApiClientOptions) {}

  async get<TResponse>(path: string): Promise<TResponse> {
    const response = await fetch(`${this.options.baseUrl}${path}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json() as Promise<TResponse>;
  }
}
