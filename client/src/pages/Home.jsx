import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Grid, X, Menu, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import pdf from "../assets/pe.pdf";
import Footer from "../components/Footer";
import PdfViewer from "../components/home/PdfViewer";
import CompaniesSlider from "../components/home/CompanySlider";

const Home = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [showPDF, setShowPDF] = useState(false);
  const navigate = useNavigate();

  const backgrounds = [
    "/photos/1.jpeg",
    "/photos/2.jpeg",
    "/photos/3.jpeg",
    "/photos/4.jpeg",
  ];

  const sections = [
    {
      id: "about",
      title: "Profile",
      description:
        "My portrait photography is a celebration of individuality and identity. Each portrait I capture tells a unique story, reflecting the personality, heritage, and aspirations of my subjects, bringing their stories to life with authenticity and depth.",
      image:
        "https://res.cloudinary.com/dwsbh0v8b/image/upload/v1736167722/drey/professional%20experience/WhatsApp_Image_2025-01-06_at_11.32.45_AM_y0u5nz.jpg",
    },
    {
      id: "professional",
      title: "Professional Experience",
      description:
        "As the official storyteller to the Minister of Mines and Steel Development in Nigeria, I have had the privilege of capturing the essence of our nation's mining sector. Through my lens, I have chronicled pivotal moments, showcasing the industry's growth and challenges while highlighting the Minister's initiatives and achievements.",
      image:
        "https://res.cloudinary.com/dwsbh0v8b/image/upload/v1736167722/drey/professional%20experience/WhatsApp_Image_2025-01-06_at_11.32.45_AM_y0u5nz.jpg",
      pdfUrl: pdf,
      type: "pdf",
    },
    {
      id: "mines",
      title: "Mining",
      description:
        "My photography delves deep into the heart of the mining industry, portraying the raw beauty and intricate processes involved in extracting precious minerals. Each image tells a story of labor, dedication, and the transformative impact of mining on local communities.",
      image:
        "https://res.cloudinary.com/dwsbh0v8b/image/upload/v1736010876/drey/mines/WhatsApp_Image_2024-12-16_at_11.58.34_bs8jqt.jpg",
    },
    {
      id: "industrial energy",
      title: "Industrial Energy",
      description:
        "Focusing on the powerhouse of industrial energy, my work illuminates the machinery, infrastructure, and human effort within the energy sector. My photographs reveal the synergy between technology and manpower, driving the nation's industrial advancements.",
      image:
        "https://res.cloudinary.com/dwsbh0v8b/image/upload/v1736190895/drey/industrial%20energy/segilola/WhatsApp_Image_2024-12-16_at_10.42.24_2_igibw7.jpg",
    },
    {
      id: "conferences",
      title: "Cooperate Conferences",
      description:
        "From high-profile corporate conferences to intimate boardroom meetings across the globe, my photography captures the essence of professional gatherings. My images reflect the dynamic interactions, strategic discussions, and influential decisions that shape the corporate landscape.",
      image:
        "https://res.cloudinary.com/dwsbh0v8b/image/upload/v1736012006/drey/conferences/AEF/more/WhatsApp_Image_2025-01-04_at_3.00.51_PM_1_rziaqs.jpg",
    },

    {
      id: "sustainable development",
      title: "Sustainability",
      description:
        "My visual storytelling in sustainable development highlights projects and initiatives aimed at balancing economic growth with environmental stewardship. Through my lens, I showcase innovative solutions and the commitment to creating a sustainable future.",
      image:
        "https://res.cloudinary.com/dwsbh0v8b/image/upload/v1736120930/drey/sustainable%20development/WhatsApp_Image_2025-01-04_at_3.29.56_PM_guk5qu.jpg",
    },
    {
      id: "portraits",
      title: "Portraits",
      description:
        "My portrait photography is a celebration of individuality and identity. Each portrait I capture tells a unique story, reflecting the personality, heritage, and aspirations of my subjects, bringing their stories to life with authenticity and depth. \n Notably, the project exhibited in Barcelona, in partnership with the Nigeria Indigenous Women in Mining and Natural Resources Organization (Niwimnro) and MSV Studios, featured compelling stories on artisanal women in mining, shedding light on their integral roles and contributions.These exhibitions and book launches have provided a platform to educate and inspire, showcasing the importance of these resources.",
      image:
        "https://res.cloudinary.com/dwsbh0v8b/image/upload/v1736150752/drey/portraits/DSC09545_nqhvum.jpg",
    },
    {
      id: "exhibition",
      title: "Exhibition / Book Launch",
      description:
        "Documenting the first year in office for the Honorable Minister and launching two significant books on Gold and Iron Ore, my work has been pivotal in sharing these milestones.",
      image:
        "https://res.cloudinary.com/dwsbh0v8b/image/upload/v1736194418/drey/exhibition/WhatsApp_Image_2025-01-06_at_9.03.39_PM_3_ba5xmb.jpg",
    },
    {
      id: "youth dev",
      title: "Youth Development",
      description:
        "My dedication to youth development shines through in my impactful initiatives, which have touched the lives of over 250 young individuals in Nigeria. By supplying photography equipment and training, I have enabled the next generation of visual storytellers, nurturing their creativity and honing their skills. My vision is to empower over 100,000 youths across Africa in the next five years.",
      image:
        "https://res.cloudinary.com/dwsbh0v8b/image/upload/v1736191223/drey/youth%20dev/WhatsApp_Image_2025-01-06_at_5.31.23_PM_qvhfpj.jpg",
    },
  ];

  const handleSectionClick = (section) => {
    if (section.type === "pdf") {
      setShowPDF(true);
    } else if (section.id == "conferences") {
      navigate(`/works/conferences`);
      window.scrollTo(0, 0);
    } else {
      navigate(`/works/${section.id.toLowerCase()}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Logo */}
      <div className="fixed top-8 z-50 flex items-center justify-between  w-full px-6">
        <div className="flex flex-col items-center">
          <Link to="/">
            <h1 className="text-sm md:text-2xl font-light tracking-[0.2em]">
              <span className="font-medium">DREY</span>
              <span className="opacity-70">.MIDE</span>
            </h1>
          </Link>
          <div className="h-[1px] w-12 bg-white/30 mt-2 transform transition-all duration-300 hover:w-24 hover:bg-white/50" />
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setShowGrid(!showGrid)}
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
          >
            <Grid size={20} />
          </button>
          <button
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Fixed Navigation */}

      {/* Main Stacked Sections */}
      <div>
        {sections.map((section, index) =>
          index == 0 ? (
            <motion.div
              key={index}
              className="relative h-[30vh] w-full overflow-hidden group cursor-pointer"
              onHoverStart={() => setHoveredSection(index)}
              onHoverEnd={() => setHoveredSection(null)}
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Grid Background */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-1">
                {backgrounds.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-full overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Background ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 items-center text-center">
                <div className="max-w-4xl">
                  <h2 className="text-3xl md:text-6xl font-extralight mb-6 transform transition-all duration-500 text-white">
                    Oluwadamilare Ayomide
                  </h2>
                  <p className="text-[0.68rem] md:text-xs mx-auto text-white/80 max-w-xl mb-8 opacity-0 h-0 overflow-hidden group-hover:h-fit group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {}
                  </p>
                  <Link to="/about">
                    <motion.button className="flex items-center justify-center gap-2 opacity-0 w-full group-hover:opacity-100 transition-opacity duration-500 delay-200 text-white">
                      <span className="text-xs uppercase tracking-wider">
                        Profile
                      </span>
                      <ArrowRight
                        className="transition-transform group-hover:translate-x-2"
                        size={16}
                      />
                    </motion.button>
                  </Link>
                </div>
              </div>

              <div className="absolute top-8 left-8 opacity-25 text-white">
                <span className="text-6xl font-light"></span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={section.id}
              className="relative h-[30vh]  w-full overflow-hidden group cursor-pointer"
              onHoverStart={() => setHoveredSection(index)}
              onHoverEnd={() => setHoveredSection(null)}
              onClick={() => handleSectionClick(section)}
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 items-center text-center">
                <div className="max-w-4xl">
                  <h2 className="text-3xl md:text-6xl font-extralight mb-6 transform transition-all duration-500 group-hover:translate-x-0">
                    {section.title}
                  </h2>
                  <p className="text-[0.68rem] md:text-xs mx-auto text-white/80 max-w-xl mb-8 opacity-0 h-0 overflow-hidden group-hover:h-fit group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {section.description}
                  </p>
                  <motion.button className="flex items-center justify-center gap-2 opacity-0 w-full group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="text-[0.68rem] md:text-xs uppercase tracking-wider">
                      {section.type === "pdf" ? "View" : "View Gallery"}
                    </span>
                    {section.type === "pdf" ? (
                      <FileText size={16} />
                    ) : (
                      <ArrowRight className="transition-transform group-hover:translate-x-2" />
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Section Number */}
              <div className="absolute top-8 left-8 opacity-25">
                <span className="text-6xl font-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          )
        )}
        <CompaniesSlider />
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {showPDF && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col"
          >
            <div className="flex justify-between items-center p-4 bg-black/50">
              <h3 className="text-xs md:text-sm">Professional Experience</h3>
              <button
                onClick={() => setShowPDF(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 p-4">
              <PdfViewer
                pdfUrl={sections.find((s) => s.id === "professional").pdfUrl}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid View */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm p-4 md:p-16 overflow-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => {
                    setShowGrid(false), handleSectionClick(section);
                  }}
                  className="group relative aspect-square overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-light mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Footer />
    </div>
  );
};

export default Home;
