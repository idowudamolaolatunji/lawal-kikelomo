"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gallery as PhotoGallery, Item } from "react-photoswipe-gallery";
import { FiMaximize2 } from "react-icons/fi";
import "photoswipe/style.css";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CLOUD_BASE = "https://res.cloudinary.com/du8iw1efa/image/upload";

interface GalleryImage {
  id: string;
  width: number;
  height: number;
  rowSpan: 1 | 2;
}

const IMAGES: GalleryImage[] = [
  { id: "v1781284592/IMG_0904.JPG_mggifj.jpg", width: 1600, height: 1067, rowSpan: 1 },
  { id: "v1781284595/IMG_6012_voc1vf.jpg",      width: 1500, height: 1434, rowSpan: 1 },
  { id: "v1781284602/IMG_1575_pf3nqr.jpg",      width: 1600, height: 1142, rowSpan: 1 },
  { id: "v1781284617/IMG_9119.JPG_mju195.jpg",  width: 1067, height: 1600, rowSpan: 2 },
  { id: "v1781284617/IMG_2658_vgkn51.jpg",      width: 1600, height: 1142, rowSpan: 1 },
  { id: "v1781284620/IMG_0161_ert0qf.jpg",      width: 1192, height: 1600, rowSpan: 2 },
  { id: "v1781284637/IMG_0246_h5ak7p.jpg",      width: 1518, height: 1600, rowSpan: 2 },
  { id: "v1781284829/IMG_9179_tnqlnw.jpg",      width: 1600, height: 1067, rowSpan: 1 },
  { id: "v1781284852/IMG_9183_h5xu7p.jpg",      width: 1600, height: 1067, rowSpan: 1 },
];

const thumbUrl = (id: string) =>
  `${CLOUD_BASE}/c_fill,w_600,h_600,q_auto,f_auto/${id}`;

const originalUrl = (id: string) =>
  `${CLOUD_BASE}/c_limit,w_1600,h_1600,q_auto,f_auto/${id}`;

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 sm:py-36" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: "var(--color-mint)", fontFamily: "var(--font-dm-mono)" }}
        >
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="mb-5"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontStyle: "italic",
            color: "var(--color-text)",
          }}
        >
          The work, and the people behind it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="max-w-2xl text-base leading-relaxed mb-12"
          style={{ color: "var(--color-muted)" }}
        >
          Moments from data runs, community workshops, and the people whose lives this
          work touches every day.
        </motion.p>

        <PhotoGallery withCaption>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
            style={{ gridAutoFlow: "dense", gridAutoRows: "140px" }}
          >
            {IMAGES.map((img, i) => (
              <Item
                key={img.id}
                original={originalUrl(img.id)}
                thumbnail={thumbUrl(img.id)}
                width={img.width}
                height={img.height}
                alt="Kikelomo Lawal — community and environmental work"
              >
                {({ ref, open }) => (
                  <motion.div
                    ref={ref as React.Ref<HTMLDivElement>}
                    onClick={open}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, ease: EASE, delay: (i % 4) * 0.06 }}
                    className="relative rounded-xl overflow-hidden cursor-pointer group"
                    style={{
                      gridRow: img.rowSpan === 2 ? "span 2" : "span 1",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <Image
                      src={thumbUrl(img.id)}
                      alt="Kikelomo Lawal — community and environmental work"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: "rgba(13,13,18,0.35)" }}
                    >
                      <FiMaximize2 size={20} style={{ color: "var(--color-text)" }} />
                    </div>
                  </motion.div>
                )}
              </Item>
            ))}
          </div>
        </PhotoGallery>
      </div>
    </section>
  );
}
