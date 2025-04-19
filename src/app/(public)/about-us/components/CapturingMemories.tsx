import aboutSectionImage from "@/assets/images/aboutSectionImage.png";
import Container from "@/components/shared/Container";
import Image from "next/image";

const CapturingMemories = () => {
  return (
    <Container className="flex flex-col lg:flex-row gap-x-5 gap-y-4  md:mt-14 mt-9">
      <div className="flex-1">
        <Image src={aboutSectionImage} alt="aboutSectionImage" className="rounded-4xl max-h-[800px]  object-cover 2xl:max-w-[700px] mx-auto" ></Image>
      </div>
      {/* ==================== description =========================  */}
      <section className="flex-1">
        <div className="flex flex-col items-center ">
          <div className="relative w-full mb-8 flex items-center justify-center">
            <div className="h-1 rounded-xl md:w-16 w-8 bg-linear-to-r from-[#AB9D6E] to-[#564920] "></div>
            <h1 className="text-xl md:text-2xl xl:text-4xl font-medium  px-6 max-w-xl">
              Capturing Memories,
              <br />
              One Click At A Time
            </h1>
            <div className="h-1 rounded-xl md:w-16 w-8 bg-linear-to-r from-[#AB9D6E] to-[#564920] "></div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6  xl:text-2xl lg:text-base text-lg">
            <p>
              Welcome to Smart Start Photo — where unforgettable memories begin
              with just one click!
            </p>

            <p>
              We're a passionate team of creatives dedicated to making your
              events more fun, engaging, and memorable. At Smart Start Photo, we
              specialize in providing high-quality photo booth experiences for
              weddings, birthdays, corporate events, graduations, and everything
              in between.
            </p>

            <p>
              Our mission is simple: Capture the moment, spark the joy, and
              leave a lasting impression. We combine modern technology with
              sleek design and unmatched customer service to deliver a seamless,
              interactive experience your guests will talk about long after the
              party ends.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CapturingMemories;
