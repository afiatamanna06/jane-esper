import { motion } from "framer-motion";

interface propTypes {
  id: string;
  title: string;
  delay: number;
  color: string;
  description: string;
}

function SkillsCard({ id, title, delay, color, description }: propTypes) {
  return (
    <motion.div
      className="md:w-1/3 mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="relative h-32">
        <div className="z-10">
          <p className="font-playfair font-semibold text-5xl">{id}</p>
          <p className="font-playfair font-semibold text-3xl mt-3">{title}</p>
        </div>
        <div className={`w-1/2 md:w-3/4 h-32 absolute ${color} right-0 top-0 z-[-1]`}></div>
      </div>
      <p className="mt-5">
          {description}
      </p>
    </motion.div>
  );
}

export default SkillsCard;
