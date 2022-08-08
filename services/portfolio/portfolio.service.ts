import ProjectServ from "./project.service";
import ProjectDetailServ from "./projectDetail.service";
class PortfolioService {
  public getProjects() {
    return ProjectServ.getProjects();
  }
  public getProject(id: string) {
    return ProjectDetailServ.getProject(id);
  }
}

export default new PortfolioService();
