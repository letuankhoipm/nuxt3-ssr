import { BaseService } from "../base.service";
import { AxiosResponse } from "axios";

class PortfolioService extends BaseService {
  public baseUrl = "projects/all";

  public getProjects(): Promise<AxiosResponse<ProjectAll>> {
    let payload = {
      queryOptions: {
        page: 0,
        size: 10,
      },
    };
    return this.post(payload);
  }
}

export default new PortfolioService();
