import emailServ from "./email.service";

class ContactService {
  public postEmail(info: Email) {
    return emailServ.postEmail(info);
  }
}

export default new ContactService();
