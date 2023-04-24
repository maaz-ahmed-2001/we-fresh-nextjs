import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "../containers/Hero";
import ServicesSection from "../containers/ServiceSection";
import FindUsSection from "../containers/FindUsSection";
import OurPartnerSection from "../containers/OurPartnerSection";
import QuerySection from "../containers/QuerySection";
import WeFreshBusinessSection from "../containers/WeFreshBusinessSection";
import GetTheAppSection from "../containers/GetTheAppSection";
import Layout from "../common/components/Layout";

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
