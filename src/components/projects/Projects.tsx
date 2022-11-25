import LineGradient from "../common/LineGradient";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        
        <p className="mt-10 mb-10">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut fames odio in at. At magna ornare dictum lectus. Purus massa morbi purus nec eget eleifend ut elit.
        </p>
      </motion.div>
    </section>
  );
}

export default Projects;
