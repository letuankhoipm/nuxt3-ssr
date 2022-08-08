import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class CompanySolutionService extends BaseService {
  public baseUrl = "company-solution";

  public getCompanySolution(): Promise<AxiosResponse<CompanySolution[]>> {
    return this.get();
  }
}

export default new CompanySolutionService();
