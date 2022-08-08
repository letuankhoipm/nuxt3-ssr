import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class MajorService extends BaseService {
  public baseUrl = "major";

  public getMajor(): Promise<AxiosResponse<Major>> {
    return this.get();
  }
}

export default new MajorService();
