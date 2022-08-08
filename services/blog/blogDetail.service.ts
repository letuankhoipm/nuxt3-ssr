import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class BlogDetailService extends BaseService {
  public baseUrl = "blogs";

  public getBlogDetail(id: string): Promise<AxiosResponse<BlogDetail>> {
    return this.getById(id);
  }
}

export default new BlogDetailService();
