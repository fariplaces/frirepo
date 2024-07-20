import WhyChooseUsArea from "@/components/common/WhyChooseUsArea";
// import AboutArea from "./AboutArea";
import HeroArea from "./HeroArea";
import OurPartnerArea from "./OurPartnerArea";
import PortfolioArea from "./PortfolioArea";
import ServiceArea from "./ServiceArea";
// import TestimonialArea from "@/components/common/TestimonialArea";
import NewsLatterArea from "./NewsLatterArea";
import LetsTalkArea from "@/components/common/LetsTalkArea";

function HomePage() {
  return (
    <>
      <HeroArea />
      <ServiceArea />
      {/* <AboutArea black="black" light="dark" /> */}
      <OurPartnerArea />
      <PortfolioArea black="black" />
      <WhyChooseUsArea black="black" lable="" />
      {/* <TestimonialArea /> */}
      <NewsLatterArea black="black" />
      <LetsTalkArea />
    </>
  );
}

export default HomePage;
