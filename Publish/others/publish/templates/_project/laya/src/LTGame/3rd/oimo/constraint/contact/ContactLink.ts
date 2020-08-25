import { Contact } from "./Contact";

export class ContactLink {

    prev: any;
    next: any;
    shape: any;
    body: any;
    contact: Contact;

    constructor(contact: Contact) {
        // The previous contact link.
        this.prev = null;
        // The next contact link.
        this.next = null;
        // The shape of the contact.
        this.shape = null;
        // The other rigid body.
        this.body = null;
        // The contact of the link.
        this.contact = contact;
    }

}