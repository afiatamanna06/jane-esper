import LineGradient from "../common/LineGradient";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonialStyles = `mx-auto relative mx-w-[400px] h-[350px] flex flex-col justify-end pt-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
  return (
    <section id="testimonials" className="pt-32 pb-16">
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
            TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-10">
            Here's What People are Saying About My Work. Aliquam aliquet integer ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>
    </section>
  );
}

export default Testimonials;
