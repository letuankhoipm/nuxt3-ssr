import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class EmailService extends BaseService {
  baseUrl = "mail/client-send";

  public postEmail(info: Email): Promise<AxiosResponse> {
    return this.post(info);
  }
}

export default new EmailService();
