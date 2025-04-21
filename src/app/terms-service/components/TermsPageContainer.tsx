import Container from "@/components/shared/Container";
import React from "react";

const TermsPageContainer = () => {
  return (
    <Container className="lg:space-y-10 space-y-7">
      <h1 className="lg:text-5xl text-3xl font-playfair font-bold">
       Terms of Service
      </h1>
      <div className="lg:text-xl">
        <h3>
          We value your privacy and are committed to protecting your personal
          data. This Privacy Policy explains how we collect, use, and share your
          information when you use our website or services. When you register,
          we may collect personal data such as your name, email address, phone
          number, and payment details. We collect information on how you
          interact with our website, such as IP address, browser type, and
          activity logs. We use cookies to enhance user experience and gather
          analytics data.
        </h3>
      </div>
      <div className="lg:text-xl">
        <h2 className="font-semibold">How We Use Your Information</h2>
        <h3>
          We use your personal information to deliver our services, process
          payments, and communicate with you. We analyze usage data to improve
          our website and services. With your consent, we may send you
          promotional content or newsletters. We implement security measures to
          protect your data from unauthorized access. However, no internet
          transmission is 100% secure.
        </h3>
      </div>
      <div className="lg:text-xl">
        <h2 className="font-semibold">Your Rights</h2>
        <h3>
          You have the right to access, update, or delete your personal
          information. Contact us at [Insert Contact Information] to exercise
          these rights. We may update this Privacy Policy from time to time. We
          will notify you of any changes by posting the new policy on our
          website.
        </h3>
      </div>
    </Container>
  );
};

export default TermsPageContainer;
