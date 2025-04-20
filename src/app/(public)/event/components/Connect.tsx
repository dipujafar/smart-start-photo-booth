import SectiontitleSmall from "@/components/shared/SectionTitleSmall";
import React from "react";
import EventBookingForm from "./EventBookingForm";

const Connect = () => {
  return (
    <div>
      {/* ========== header ============== */}
      <div className="space-y-3">
        <SectiontitleSmall title="Excited to party? Let's connect!"></SectiontitleSmall>
        <p className="max-w-3xl text-center mx-auto text-lg text-gray-600">
          We appreciate your interest in our photobooth services! Please fill
          out this form and it will be sent directly to our e-mail. We'll
          respond within 24 hours. We look forward to speaking with you soon.
        </p>
      </div>

      {/* ======== connect form ============= */}
      <div>
        <EventBookingForm></EventBookingForm>
      </div>
    </div>
  );
};

export default Connect;
