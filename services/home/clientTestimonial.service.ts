import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class ClientTestimonialService extends BaseService {
  public baseUrl = "client-testimonial";

  public getClientTestimonial(): Promise<AxiosResponse<ClientTestimonial[]>> {
    return this.get();
  }
}

export default new ClientTestimonialService();
