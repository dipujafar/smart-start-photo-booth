import Container from "@/components/shared/Container";
import Sectiontitle from "@/components/shared/SectionTitle";
import EventRentalsPreview from "./EventRentalsPreview";
import { Button } from "@/components/ui/button";

const EventRentals = () => {
  return (
    <Container className="lg:space-y-10 space-y-8">
      <Sectiontitle title="Trendy Modern Event Rentals"></Sectiontitle>
      <div className="text-center">
        <h4 className="text-3xl font-bold">WELCOME</h4>
        <p className="">
          We are Smart Photobooths,  A South Jersey based Open-Air styled
          photobooth, Our lux booth literally wraps all your favorite social
          media features into a very sleek, modern look for all your social
          gatherings! We would love to be apart of your special events and help
          make it an unforgettable experience for you & all your guests. Check
          out our packages and what we offer. We look forward to creating
          memories with you! 
        </p>
      </div>
      <div>
        <div className="space-y-4 border rounded-md border-primary-gold p-5">
          <EventRentalsPreview></EventRentalsPreview>
          <div className="flex justify-between items-center gap-x-2 ">
            <h3 className="text-4xl font-medium">An Elevated Photobooth Experience!</h3>
            <Button className="py-6 text-xl px-8 rounded-full bg-primary-gold">
            View Packages
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventRentals;
