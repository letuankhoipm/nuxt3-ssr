import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class BlogInfoService extends BaseService {
  baseUrl = "blogs/all";

  public getBlogInfo(): Promise<AxiosResponse<BlogInfo>> {
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

export default new BlogInfoService();
