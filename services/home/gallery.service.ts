import { BaseService } from "@/services/base.service"
import { AxiosResponse } from "axios"

class GalleryService extends BaseService {
    baseUrl = 'gallery'

    public getGallery(): Promise<AxiosResponse<Gallery[]>> {
        return this.get()
    }
}

export default new GalleryService()