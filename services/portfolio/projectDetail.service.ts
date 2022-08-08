import { BaseService } from "../base.service";
import { AxiosResponse } from "axios";

class PortfolioDetailService extends BaseService {
  baseUrl = "projects";

  public getProject(id: string): Promise<AxiosResponse<ProjectDetail>> {
    return this.getById(id);
  }
}

export default new PortfolioDetailService();
