import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from './common/containers/Hero'
import ServicesSection from './common/containers/ServiceSection'
import OurAppSection from './common/containers/OurAppSection'
import Layout from "./common/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <ServicesSection/>
      <OurAppSection/>
    </Layout>
  );
}
