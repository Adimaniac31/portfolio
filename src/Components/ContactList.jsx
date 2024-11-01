// ContactList.jsx
import React from "react";
import Contact from "./Contact";
import contactData from "../Constants/Contact.json";

const ContactList = () => {
  return (
    <div className="p-6 bg-background-light rounded-lg shadow-md mb-8">
      <h2 className="text-heading-primary text-2xl font-semibold mb-4">Contact Information</h2>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contactData.map((contact, index) => (
          <Contact key={index} title={contact.title} data={contact.data} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
