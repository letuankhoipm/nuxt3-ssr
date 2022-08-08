import { BaseService } from "../base.service";
import { AxiosResponse } from "axios";

class PortfolioService extends BaseService {
  baseUrl = "projects/all";

  public getProjects(): Promise<AxiosResponse<ProjectAll>> {
    let payload = {
      // filter: {
      //   id: {
      //     equals: 1,
      //     in: [0],
      //     notIn: [0],
      //     lt: 0,
      //     lte: 0,
      //     gt: 0,
      //     gte: 0,
      //   },
      //   published: false,
      // },
      queryOptions: {
        page: 0,
        size: 10,
        // orderBy: ["string"],
      },
    };
    return this.post(payload);
  }
}

export default new PortfolioService();
