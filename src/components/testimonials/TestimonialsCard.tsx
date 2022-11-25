import { motion } from "framer-motion";

interface propTypes {
    image: string;
    delay: number;
    color: string;
    description: string;
  }

function TestimonialsCard({ image, delay, color, description }: propTypes) {

  const testimonialStyles = `mx-auto relative mx-w-[400px] h-[350px] flex flex-col justify-end pt-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <motion.div
      className={`${color} before:${image} ${testimonialStyles}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <p className="font-playfair text-6xl">"</p>
      <p className="text-center text-xl">{description}</p>
    </motion.div>
  );
}

export default TestimonialsCard;
