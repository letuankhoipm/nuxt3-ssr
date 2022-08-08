import employeeServ from "./employee.service";
import majorServ from "./major.service";
class AboutService {
  public getEmployees() {
    return employeeServ.getEmployees();
  }
  public getMajor() {
    return majorServ.getMajor();
  }
}
export default new AboutService();
