import BlogInfoServ from "./blogInfo.service";
import BlogDetailServ from "./blogDetail.service";

class BlogService {
  public getBlogInfo() {
    return BlogInfoServ.getBlogInfo();
  }
  public getBlogDetail(id: string) {
    return BlogDetailServ.getBlogDetail(id);
  }
}

export default new BlogService();
