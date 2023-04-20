import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "../common/containers/Hero";
import ServicesSection from "../common/containers/ServiceSection";
import FindUsSection from "../common/containers/FindUsSection";
import Layout from "../common/components/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FindUsSection />
    </Layout>
  );
}
