import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Video,
  Globe,
  X,
  Menu,
  Grid,
  BadgeCheck,
  BookOpen,
  Users,
  Award,
  Building,
} from "lucide-react";
import MobileNav from "../components/MobileNav";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const backgrounds = [
    "/photos/1.jpeg",
    "/photos/2.jpeg",
    "/photos/3.jpeg",
    "/photos/4.jpeg",
  ];

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const expertise = [
    { icon: Camera, text: "Visual Storytelling" },
    { icon: Video, text: "Corporate Documentation" },
    { icon: Globe, text: "Global Exhibition Experience" },
    { icon: BookOpen, text: "Publications & Research" },
    { icon: Users, text: "Youth Empowerment" },
    { icon: Award, text: "Canon Workshop Alumni" },
    { icon: Building, text: "Industrial Photography" },
    { icon: BadgeCheck, text: "Ministry Documentation" },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src={backgrounds[currentBgIndex]}
            alt="background"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
      </AnimatePresence>

      <div className="fixed top-8 right-3 md:right-8 z-50 flex gap-4">
        <button
          onClick={() => {
            window.location.href = "/works";
          }}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
        >
          <Grid size={20} />
        </button>
        <button
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="fixed top-8 left-3 md:left-8 z-50 hidden md:flex flex-col items-center">
        <Link to="/">
          <h1 className="text-base md:text-2xl font-light tracking-[0.2em]">
            <span className="font-medium">DREY</span>
            <span className="opacity-70">.MIDE</span>
          </h1>
        </Link>
        <div className="h-[1px] w-12 bg-white/30 mt-2 transform transition-all duration-300 hover:w-24 hover:bg-white/50" />
      </div>

      <div className="relative z-10">
        <div className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-4xl md:text-6xl font-light tracking-tight">
                  Oluwadamilare Ayomide
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 font-light">
                  Visual Storyteller & Conceptual Artist
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-24 h-0.5 bg-white"
                />
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Oluwadamilare Ayomide, widely known as Drey Mide, is a
                  renowned Visual Storyteller and Conceptual Artist from Osun
                  State, Nigeria. Born into a family of three, 30 years ago with
                  modest beginnings in Ibadan, Nigeria. Drey Mide's journey from
                  a windowless room to the global stage is a testament to
                  resilience, creativity, and faith. He has used his art as a
                  powerful tool to educate, inspire, and shape narratives.
                </p>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  For Drey, photography transcends art—it's a tool for
                  education, advocacy, and transformation. Driven by a deep
                  passion for God and humanity, he believes in the power of
                  visuals to envision a better society. His skills have been
                  further refined in visual narration during educational
                  workshops, including collaborations with Canon, where he honed
                  his expertise in storytelling through the lens.
                </p>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  With close to a decade of professional experience in the art
                  of storytelling, Drey has focused much of his work on
                  documenting the corporate and industrial landscapes across
                  Africa. In 2020, Drey Mide's artistry took center stage in
                  Abuja, Nigeria, exhibiting the Ministers journey captivating
                  audiences with his unique perspective on resilience. By 2024,
                  his work crossed continents, with an acclaimed exhibition in
                  Barcelona, Spain. One of his standout projects, Resilience on
                  the Rocks, in partnership with the Nigeria Indigenous Women in
                  Mining and Natural Resources Organization (NIWIMNRO) and MSV
                  Studios, highlighted the untold stories of artisanal women in
                  mining, showcasing their pivotal contributions to the
                  industry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="backdrop-blur-sm bg-black/20 p-8 rounded-lg border border-white/10 text-xs md:text-base">
                  <h2 className="text-lg md:text-xl font-light mb-4">
                    Notable Achievements
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6 text-xs md:text-sm">
                    Drey's publications on Africa&apos;s mineral wealth
                    including gold and iron ore, alongside his role as the
                    official storyteller for Nigeria’s Ministry of Mines and
                    Steel Development highlight the challenges and progress in
                    Nigeria's mining sector while capturing the Minister’s
                    efforts and achievements.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-sm">
                    His professional journey has taken him to major global
                    corporate conferences across Europe, Asia, and Africa, where
                    he has participated as both a delegate and an exhibitor.
                    Through these experiences, Drey has remained committed to
                    making a meaningful impact within the mining and industrial
                    sectors through visual storytelling.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-sm">
                    Beyond his artistic achievements, Drey is deeply passionate
                    about capacity-building and youth empowerment. His
                    dedication to nurturing the next generation of visual
                    storytellers has led him to facilitate impactful initiatives
                    that have touched the lives of over 250 young Nigerians.
                    Through these initiatives, he has provided photography
                    equipment and training, helping to cultivate creativity and
                    professional skills among youth. Drey's vision is to empower
                    over 100,000 young people across Africa over the next five
                    years, equipping them to become the storytellers of
                    tomorrow.
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-sm">
                    Through his lens, Drey Mide has illuminated hidden
                    narratives that inspire change and transformation in
                    communities and industries alike. His unwavering commitment
                    to storytelling, youth empowerment, and social advocacy
                    reflects a deep passion for leaving a lasting legacy. As he
                    looks to the future, Drey envisions a continent where young
                    Africans are empowered to share their unique narratives,
                    fostering creativity, resilience, and hope. With every
                    frame, he continues to shape impactful stories that
                    transcend borders and inspire a better tomorrow.
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-black/20 p-8 rounded-lg border border-white/10 text-xs md:text-base">
                  <h2 className="text-lg md:text-xl font-light mb-4">
                    Areas of Expertise
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    {expertise.map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="flex items-center space-x-3 text-gray-300"
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="text-xs md:text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default AboutPage;
