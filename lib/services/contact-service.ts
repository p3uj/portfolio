import { ContactPayload } from "@/types";
import { sendMessageApi } from "../api/contact";

class ContactService {
  sendMessage(payload: ContactPayload) {
    return sendMessageApi(payload);
  }
}

const contactService = new ContactService();

export default contactService;
