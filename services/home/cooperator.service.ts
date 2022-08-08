import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class CooperatorService extends BaseService {
  public baseUrl = "cooperators";

  public getCooperator(): Promise<AxiosResponse<Cooperator[]>> {
    return this.get();
  }
}

export default new CooperatorService();
