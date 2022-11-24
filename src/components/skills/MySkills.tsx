import UseMediaQuery from "../../hooks/useMediaQuery";
import LineGradient from "../common/LineGradient";
import { motion } from "framer-motion";
import SkillsImage from "../../assets/skills-image.png";
import { skillsData } from "./SkillsData";
import SkillsCard from "./SkillsCard";

function MySkills() {
  const isAboveMediaScreen = UseMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24 ">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediaScreen ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img src={SkillsImage} className="z-10 w-full" alt="" />
            </div>
          ) : (
            <img src={SkillsImage} className="z-10 w-full" alt="" />
          )}
        </div>
      </div>

      <div className="md:flex md:justify-between gap-32 mt-16">
        {skillsData.map(({id, title, description, delay, color}) => (
          <SkillsCard key={id} id={id} title={title} description={description} delay={delay} color={color} />
        ))}
      </div>
    </section>
  );
}

export default MySkills;
