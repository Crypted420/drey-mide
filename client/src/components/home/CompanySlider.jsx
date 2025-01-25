import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import logo1 from "../../assets/companies/1.jpeg";
import logo2 from "../../assets/companies/2.jpeg";
import logo3 from "../../assets/companies/3.jpeg";
import logo4 from "../../assets/companies/4.jpeg";
import logo5 from "../../assets/companies/5.jpeg";
import logo6 from "../../assets/companies/6.jpeg";
import logo7 from "../../assets/companies/7.jpeg";
import logo8 from "../../assets/companies/8.jpeg";
import logo9 from "../../assets/companies/9.jpeg";
import logo10 from "../../assets/companies/10.jpeg";
import logo11 from "../../assets/companies/11.jpeg";

const CompaniesSlider = () => {
  const controls = useAnimationControls();
  const containerRef = useRef(null);

  const companies = [
    {
      name: "Tech Corp",
      logo: logo1,
    },
    {
      name: "Innovation Labs",
      logo: logo2,
    },
    {
      name: "Digital Solutions",
      logo: logo3,
    },
    {
      name: "Creative Agency",
      logo: logo4,
    },
    {
      name: "Start Up Inc",
      logo: logo5,
    },
    {
      name: "Start Up Inc",
      logo: logo6,
    },
    {
      name: "Start Up Inc",
      logo: logo7,
    },
    {
      name: "Start Up Inc",
      logo: logo8,
    },
    {
      name: "Start Up Inc",
      logo: logo9,
    },
    {
      name: "Start Up Inc",
      logo: logo10,
    },
    {
      name: "Start Up Inc",
      logo: logo11,
    },
  ];

  const doubledCompanies = [...companies, ...companies];

  useEffect(() => {
    const startAnimation = async () => {
      const containerWidth = containerRef.current?.scrollWidth || 0;

      await controls.start({
        x: [`0px`, `-${containerWidth / 2}px`],
        transition: {
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <div className="relative h-[50vh] w-full overflow-hidden bg-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-20">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="border border-white/10" />
        ))}
      </div>

      {/* Section Title */}
      <div className="absolute top-8 left-8">
        <h2 className="text-4xl md:text-6xl font-extralight text-black mb-2">
          Clients
        </h2>
        <p className="text-white/60 text-sm md:text-base"></p>
      </div>

      {/* Companies Slider */}
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-8 px-8 md:px-16"
          animate={controls}
        >
          {doubledCompanies.map((company, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-40 md:w-64 backdrop-blur-sm rounded-lg p-2 md:p-6 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-20 mb-4 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* <h3 className="text-white text-center text-sm mb-2">
                {company.name}
              </h3> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompaniesSlider;
