/* eslint-disable react/prop-types */
import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowLeft, Loader } from "lucide-react";
import Header2 from "../components/Header2";
import MobileNav from "../components/MobileNav";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Gallery = () => {
  const { type } = useParams();
  const query = type;
  const [page, setPage] = useState(1);
  const [nextCursor, setNextCursor] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [columns, setColumns] = useState([[], [], []]);
  const loader = useRef(null);
  const loadedImagesRef = useRef(new Set()); // Keep track of loaded image IDs

  const fetchImagesApi = async (nextCursor) => {
    try {
      const response = await fetch(
        `https://drey-mide.onrender.com/api/get-images?search=${query}&per_page=10&next_cursor=${nextCursor}`,
        {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY,
          },
        }
      );
      const data = await response.json();

      if (!data.result || data.result.length === 0) {
        setHasMore(false);
        return [];
      }
      if (data.next_cursor) {
        setNextCursor(data.next_cursor);
      } else {
        setHasMore(false);
        setNextCursor(null);
      }

      // Filter out any images we've already loaded
      const newImages = data.result
        .filter((photo) => !loadedImagesRef.current.has(photo.asset_id))
        .map((photo) => ({
          id: photo.asset_id,
          src: photo.url,
          alt: "",
          width: photo.width,
          height: photo.height,
          aspect: photo.height / photo.width,
        }));

      // Add new image IDs to our Set
      newImages.forEach((img) => loadedImagesRef.current.add(img.id));

      return newImages;
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  };

  const distributeImages = useCallback((images) => {
    const columnCount = window.innerWidth >= 1024 ? 3 : 2;
    const newColumns = Array.from({ length: columnCount }, () => []);
    let heights = Array(columnCount).fill(0);

    images.forEach((image) => {
      const shortestColumn = heights.indexOf(Math.min(...heights));
      newColumns[shortestColumn].push(image);
      heights[shortestColumn] += image.aspect;
    });

    setColumns(newColumns);
  }, []);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading && hasMore) {
        setPage((prev) => prev + 1);
      }
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [handleObserver]);

  useEffect(() => {
    const loadMoreImages = async () => {
      if (!hasMore || isLoading) return;

      setIsLoading(true);
      const newImages = await fetchImagesApi(nextCursor);

      if (newImages.length > 0) {
        setImageData((prev) => {
          const updatedImages = [...prev, ...newImages];
          distributeImages(updatedImages);
          return updatedImages;
        });
      }

      setIsLoading(false);
    };

    loadMoreImages();
  }, [page, nextCursor, hasMore, distributeImages]);

  useEffect(() => {
    const handleResize = () => {
      distributeImages(imageData);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageData, distributeImages]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset the loaded images Set when the query changes
    loadedImagesRef.current.clear();
    setImageData([]);
    setColumns([[], [], []]);
    setPage(1);
    setNextCursor(undefined);
    setHasMore(true);
  }, [query]);

  const ImageCard = ({ image }) => {
    return (
      <AnimatePresence>
        <motion.div
          className="relative group cursor-pointer overflow-hidden bg-gray-300 mb-1"
          onClick={() => setSelectedImage(image)}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="eager"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              style={{
                aspectRatio: `${image.width} / ${image.height}`,
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-light">{image.alt}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto md:px-4 pt-20 md:pt-32 pb-12 min-h-screen">
        <div className="flex gap-1">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1">
              {column.map((image, index) => (
                <ImageCard key={`${image.id}-${index}`} image={image} />
              ))}
            </div>
          ))}
        </div>

        <div ref={loader} className="flex justify-center py-8">
          {isLoading && (
            <div className="flex items-center space-x-2">
              <Loader className="animate-spin" size={20} />
              <span className="text-sm text-gray-600">
                {imageData.length <= 0
                  ? "Loading images"
                  : "Loading more images..."}
              </span>
            </div>
          )}
        </div>
      </div>

      <Header2 setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-7xl max-h-[90vh] w-full h-full p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <ArrowLeft className="transform rotate-45" size={24} />
          </button>
        </div>
      )}

      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Footer />
    </div>
  );
};

export default Gallery;
