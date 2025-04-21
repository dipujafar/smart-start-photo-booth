import Container from "../shared/Container";

const Hero = () => {
  return (
    <Container>
      <div className="relative">
        <video
          src="/hero_section_bg.mp4"
          className="w-full rounded-4xl"
          autoPlay
          muted
          loop
        ></video>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/20 rounded-4xl">
          <div>
            <h1 className="xl:text-8xl lg:text-6xl text-4xl   max-w-xl text-center font-bold font-playfair">
              Smart Start PhotoBooth
            </h1>
            <h1 className="xl:text-2xl text-xl max-w-xl text-center font-semibold ">
              Sharpshooters of the Photobooth World
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
