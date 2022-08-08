import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class BlogInfoService extends BaseService {
  baseUrl = "blogs/all";

  public getBlogInfo(): Promise<AxiosResponse<BlogInfo>> {
    let payload = {
      queryOptions: {
        page: 0,
        size: 10,
      },
    };
    return this.post(payload);
  }
}

export default new BlogInfoService();
