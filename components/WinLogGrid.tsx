"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface WinLogGridProps {
  images: string[];
}

export default function WinLogGrid({ images }: WinLogGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getCaption = (filename: string) => {
    return filename.split('.')[0].replace(/[-_]/g, ' ').replace(/\d+$/, '');
  };

  return (
    <>
      <div className="masonry-grid" style={{ marginTop: "3rem" }}>
        {images.map((img, index) => (
          <div 
            key={index} 
            className="masonry-item"
            onClick={() => setSelectedImage(img)}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={`/wins/${img}`}
              alt={`Win ${index + 1}`}
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="masonry-caption">
              {getCaption(img)}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/wins/${selectedImage}`}
                alt="Selected Win"
                width={1200}
                height={800}
                style={{ 
                  maxWidth: "90vw", 
                  maxHeight: "85vh", 
                  objectFit: "contain",
                  width: "auto",
                  height: "auto"
                }}
              />
              <div className="lightbox-caption">
                {getCaption(selectedImage)}
              </div>
              <button 
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
