// Components
import FindUsSection from "../containers/FindUsSection";
import GetTheAppSection from "../containers/GetTheAppSection";
import HeroSection from "../containers/Hero";
import Layout from "../common/components/Layout";
import OurPartnerSection from "../containers/OurPartnerSection";
import QuerySection from "../containers/QuerySection";
import ServicesSection from "../containers/ServiceSection";
import WeFreshBusinessSection from "../containers/WeFreshBusinessSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FindUsSection />
      <OurPartnerSection/>
      <QuerySection/>
      <GetTheAppSection/>
      <WeFreshBusinessSection/>
    </Layout>
  );
}
