import { motion } from "framer-motion";

interface propTypes {
    delay: number;
    color: string;
    description: string;
    title: string;
  }

function TestimonialsCard({ delay, color, description, title }: propTypes) {

  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48`;
  const testimonialTitle = title.split(" ").join("-").toLowerCase() 

  return (
    <motion.div
      className={`${color} ${testimonialStyles}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <img src={require(`../../assets/${testimonialTitle}.png`)} className="absolute z-30 top-[-120px] -ml-[110px] left-1/2" alt="" />
      <p className="font-playfair text-6xl">“</p>
      <p className="text-center text-xl">{description}</p>
    </motion.div>
  );
}

export default TestimonialsCard;
