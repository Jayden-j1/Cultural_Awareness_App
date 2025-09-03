// components/Language.tsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Language - A React component that displays a section of text
 * which animates into view on scroll using Framer Motion.
 */
export default function Language() {
  // Use the custom hook to detect scroll position
  const { ref, inView } = useScrollAnimation(0.3); // 30% of section must be visible to trigger animation

  return (
    // Section container with full viewport height and centered content
    <section
      ref={ref} // Attach the ref so IntersectionObserver can track visibility
      className="flex flex-col justify-center items-center min-h-screen bg-white"
    >
      {/* Heading with scroll animation */}
      <motion.h2
        // Initial state before the element enters the viewport
        initial={{ opacity: 0, y: 50 }}
        // Animate in or out depending on visibility
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        // Animation duration
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-7xl font-bold mb-10 text-center"
      >
        Bundjalung Jugun
      </motion.h2>

      {/* Paragraph with scroll animation and delayed transition */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }} // Slight delay for a staggered effect
        className="text-lg sm:text-xl leading-relaxed tracking-normal text-gray-700 max-w-xl whitespace-pre-line mb-40 text-left"
        style={{ wordSpacing: "0.05em" }}
      >
        Ngali na jugun
        <br />
        Ngali garima mala jugun
        <br />
        Wana janjma mala gunu gala jugun
        <br />
        Ngali wana janja mala jugun
        <br />
        Ngali na mala jugun
      </motion.p>
    </section>
  );
}


// export default function Language() {
//     return (
//         <>
//          <section className="flex flex-col justify-center items-center">
//             <h2 
//             className="text-7xl mb-10">
//             Bundjalung Jugun</h2>
//             <p
//                     className="text-lg sm:text-xl leading-relaxed tracking-normal text-gray-700 max-w-xl whitespace-pre-line mb-40"
//         style={{ wordSpacing: "0.05em" }}
//             >
//                 Ngali na jugun<br/>
//                 Ngali garima mala jugun<br/>
//                 Wana janjma mala gunu gala jugun<br/>
//                 Ngali wana janja mala jugun<br/>
//                 Ngali na mala jugun               
//             </p>
//          </section>
//         </>
//     );
// }