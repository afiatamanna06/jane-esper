import LineGradient from "../common/LineGradient";
import { motion } from "framer-motion";
import { testimonialsData } from "./TestimonialsData";
import TestimonialsCard from "./TestimonialsCard";
import Carousel from "nuka-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import UseMediaQuery from "../../hooks/useMediaQuery";

function Testimonials() {

  const isAboveSmallScreens = UseMediaQuery("(min-width: 1060px)");

  return (
    <section id="testimonials" className="pt-32 pb-24">
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
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <Carousel
          autoplay={true}
          style={{
            width: "100%",
            maxWidth: isAboveSmallScreens ? "80rem" : "20rem",
            paddingBottom: "5rem"
          }}
          cellAlign="center"
          slidesToShow={isAboveSmallScreens ? 3 : 1}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              className="translate-y-16 -translate-x-5 bg-gradient-rainblue rounded-full p-2 opacity-70"
            >
              <FiChevronLeft size={20} />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              className="translate-y-16 translate-x-5 bg-gradient-rainblue rounded-full p-2 opacity-70"
            >
              <FiChevronRight size={20} />
            </button>
          )}
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "#DC4492",
              width: "2rem",
            },
          }}
          wrapAround
        >
          {testimonialsData.map(({ title, delay, color, description }) => (
            <TestimonialsCard
              title={title}
              delay={delay}
              color={color}
              description={description}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
