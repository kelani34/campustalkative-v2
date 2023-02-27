import { Footer, Navbar } from "@/components";
import { PageNotFound } from "@/containers";
import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { motion } from "framer-motion";

const NotFound = () => (
  <motion.div
    exit={{ opacity: 0 }}
    style={{ margin: "10px" }}
    className="antialiased text-gray-600"
  >
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <PageNotFound />
    <Footer />
  </motion.div>
);

export default NotFound;
