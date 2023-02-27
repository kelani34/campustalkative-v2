import { Footer } from "@/components";
import { CommunityForm, JoinSection } from "@/containers";
import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { motion } from "framer-motion";

const Form = () => (
  <motion.div
    exit={{ opacity: 0 }}
    style={{ margin: "10px" }}
    className="antialiased"
  >
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <CommunityForm />
    <Footer />
  </motion.div>
);

export default Form;
