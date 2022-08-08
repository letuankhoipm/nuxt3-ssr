import { BaseService } from "@/services/base.service";
import statisticServ from "./statistic.service";
import technologyServ from "./technology.service";
import companySolutionServ from "./companySolution.service";
import clientTestimonialServ from "./clientTestimonial.service";
import galleryServ from "./gallery.service";
import galleryDetailServ from "./galleryDetail.service";
import cooperatorServ from "./cooperator.service";

class HomeService {
  // public getBanners(): Promise<Client> {
  //   return this.get("banners");
  // }
  public getTechnologies() {
    return technologyServ.getTechnologies();
  }
  public getStatistics() {
    return statisticServ.getStatistics();
  }
  public getCompanySolution() {
    return companySolutionServ.getCompanySolution();
  }
  public getClientTestimonial() {
    return clientTestimonialServ.getClientTestimonial();
  }
  public getGallery() {
    return galleryServ.getGallery();
  }
  public getGalleryDetails(id: string) {
    return galleryDetailServ.getGalleryDetails(id);
  }
  public getCooperator() {
    return cooperatorServ.getCooperator();
  }
}

export default new HomeService();
