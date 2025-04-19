import React from "react";
import ContactDetails from "./ContactDetails";
import Container from "@/components/shared/Container";
import ContactForm from "./ContactForm";

const ContactPageContainer = () => {
  return (
    <Container className="flex gap-x-5 flex-col-reverse gap-y-8 lg:flex-row xl:mt-20 md:mt-12">
      <div className="flex-1">
        <ContactDetails></ContactDetails>
      </div>
      <div className="flex-1">
        <ContactForm></ContactForm>
      </div>
    </Container>
  );
};

export default ContactPageContainer;
