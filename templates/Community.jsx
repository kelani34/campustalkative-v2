import { ContactComponent, Footer, Navbar } from "@/components";
import { JoinSection } from "@/containers";
import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { motion } from "framer-motion";

const Community = () => (
  <motion.div
    exit={{ opacity: 0 }}
    style={{ margin: "10px" }}
    className="antialiased"
  >
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <JoinSection />
    <ContactComponent />
    <Footer />
  </motion.div>
);

export default Community;
