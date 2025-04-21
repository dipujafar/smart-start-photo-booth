import Container from "@/components/shared/Container";
import Sectiontitle from "@/components/shared/SectionTitle";
import EventRentalsPreview from "./EventRentalsPreview";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EventRentals = () => {
  return (
    <Container className="lg:space-y-10 space-y-8">
      <Sectiontitle title="Trendy Modern Event Rentals"></Sectiontitle>
      <div className="md:text-center">
        <h4 className="lg:text-3xl text-xl font-bold text-center">WELCOME</h4>
        <p className="">
          We are Smart Start Photobooth, a DC, Maryland, Virginia -based
          open-air photo booth company. Our luxe booth brings together all your
          favorite social media features in a sleek, modern design—perfect for
          weddings, parties, and any special gathering! We’d love to be a part
          of your celebration and help make it an unforgettable experience for
          you and your guests. Check out our packages to see what we offer. We
          can’t wait to create lasting memories with you!
        </p>
      </div>
      <div>
        <div className="space-y-4 border rounded-md border-primary-gold p-5">
          <EventRentalsPreview></EventRentalsPreview>
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-1.5 gap-x-2 ">
            <h3 className="xl:text-4xl md:text-2xl font-medium">
              An Elevated Photobooth Experience!
            </h3>
            <Link href={"/photo-booths#package"}>
              <Button className="py-6 text-xl px-8 rounded-full bg-primary-gold">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventRentals;
