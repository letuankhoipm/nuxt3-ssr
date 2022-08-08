import { environment } from "@/environment/environment.prod";
import axios, { AxiosResponse } from "axios";

export class BaseService {
  private _apiUrl = environment.API_URL;
  protected baseUrl;

  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
  }

  public get<TResp = any, TPayload = any>(
    payload?: TPayload
  ): Promise<AxiosResponse<TResp>> {
    return axios.get(`${this._apiUrl}/${this.baseUrl}`, { params: payload });
  }
  public getById<TResp = any, TPayload = string>(
    id: string
  ): Promise<AxiosResponse<TResp>> {
    return axios.get(`${this._apiUrl}/${this.baseUrl}/${id}`);
  }

  public post<TResp = any, TPayload = any>(payload?: TPayload): Promise<TResp> {
    return axios.post(`${this._apiUrl}/${this.baseUrl}`, {
      ...payload,
    });
  }
}
