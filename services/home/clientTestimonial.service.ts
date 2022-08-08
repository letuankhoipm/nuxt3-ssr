import { BaseService } from "@/services/base.service"
import { AxiosResponse } from "axios"

class ClientTestimonialService extends BaseService {
    baseUrl = 'client-testimonial'

    public getClientTestimonial(): Promise<AxiosResponse<ClientTestimonial[]>> {
        return this.get()
    }
}

export default new ClientTestimonialService()