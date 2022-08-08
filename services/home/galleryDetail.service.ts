import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class GalleryDetailService extends BaseService {
  public baseUrl = "gallery";
  public getGalleryDetails(id: string): Promise<AxiosResponse<Gallery>> {
    return this.getById(id);
  }
}

export default new GalleryDetailService();
