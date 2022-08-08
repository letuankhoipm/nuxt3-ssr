import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class StatisticService extends BaseService {
  public baseUrl = "statistic";

  public getStatistics(): Promise<AxiosResponse<Statistic[]>> {
    return this.get();
  }
}

export default new StatisticService();
