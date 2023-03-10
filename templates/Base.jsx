import { ContactComponent, Footer, Navbar } from "@/components";
import {
  Collaborations,
  Community,
  CommunitySlider,
  Growth,
  HeroSection,
} from "@/containers";
import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { motion } from "framer-motion";

const Base = () => (
  <motion.div
    exit={{ opacity: 0 }}
    style={{ margin: "10px" }}
    className="antialiased "
  >
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <HeroSection />
    <Collaborations />
    <Growth />
    <Community />
    <CommunitySlider />
    <ContactComponent />
    <Footer />
  </motion.div>
);

export default Base;
