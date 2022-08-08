import { BaseService } from "@/services/base.service";
import { AxiosResponse } from "axios";

class EmployeeService extends BaseService {
  baseUrl = "employees";

  public getEmployees(): Promise<AxiosResponse<Employee[]>> {
    return this.get();
  }
}

export default new EmployeeService();
