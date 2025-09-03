import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";

export default function Language({
  bundjalung = (
    <>
      Ngali na jugun
      <br />
      Ngali garima mala jugun
      <br />
      Wana janjma mala gunu gala jugun
      <br />
      Ngali wana janja mala jugun
      <br />
      Ngali na mala jugun
    </>
  ),
  english = (
    <>
      We belong to this country
      <br />
      We look after this country
      <br />
      Don't do wrong around here
      <br />
      We belong to it this country
    </>
  ),
}) {
  const { ref, inView } = useScrollAnimation(0.3);
  const [isBundjalung, setIsBundjalung] = useState(true);
  const toggleLanguage = () => setIsBundjalung(prev => !prev);

  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center min-h-[85vh] sm:min-h-screen bg-white px-4 sm:px-6 mt-4 sm:mt-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center"
      >
        Bundjalung Jugun
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.p
          key={isBundjalung ? "bundjalung" : "english"}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-normal text-gray-700 max-w-2xl whitespace-pre-line mt-6 mb-10 text-left"
          style={{ wordSpacing: "0.05em" }}
        >
          {isBundjalung ? bundjalung : english}
        </motion.p>
      </AnimatePresence>

      <motion.button
        aria-label="Translate language between Bundjalung and English"
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95, y: 2 }}
        className="text-xl sm:text-2xl md:text-3xl px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full shadow-2xl transition-colors duration-300 hover:bg-blue-700 tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Translate
      </motion.button>
    </section>
  );
}



// import { motion, AnimatePresence } from "framer-motion";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";
// import { useState } from "react";



// /**
//  * Language - A React component that displays a section of text
//  * which animates into view on scroll using Framer Motion.
//  */
// export default function Language(
//   {bundjalung = 
//   <>
//     Ngali na jugun
//     <br />
//     Ngali garima mala jugun
//     <br />
//     Wana janjma mala gunu gala jugun
//     <br />
//     Ngali wana janja mala jugun
//     <br />
//     Ngali na mala jugun
//   </>, 
//  english = 
//   <>
//    We belong to this country
//     <br />
//   We look after this country
//     <br />
//   Don't do wrong around here 
//     <br />
//   We belong to it this country
//   </>
//  }) {
//   // Use the custom hook to detect scroll position
//   const { ref, inView } = useScrollAnimation(0.3); // 30% of section must be visible to trigger animation
//   const  [isBundjalung, isSetBundjalung] = useState(bundjalung);
//   const togggleWelcome = () => isSetBundjalung(prev => !prev);

//   return (
//     // Section container with full viewport height and centered content
//     <section
//       ref={ref} // Attach the ref so IntersectionObserver can track visibility
//       className="flex flex-col justify-center items-center min-h-screen bg-white"
//     >
//       {/* Heading with scroll animation */}
//       <motion.h2
//         // Initial state before the element enters the viewport
//         initial={{ opacity: 0, y: 50 }}
//         // Animate in or out depending on visibility
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         // Animation duration
//         transition={{ duration: 0.6 }}
//         className="text-5xl sm:text-7xl font-bold mb-10 text-center"
//       >
//         Bundjalung Jugun
//       </motion.h2>
//                {/* Paragraph with scroll animation and delayed transition */}
//       <AnimatePresence mode="wait">
//       <motion.p
//         key={isBundjalung ? bundjalung : english}
//         initial={{ opacity: 0, y: 50 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.6, delay: 0.2 }} // Slight delay for a staggered effect
//         className="text-lg sm:text-xl leading-relaxed tracking-normal text-gray-700 max-w-xl whitespace-pre-line mt-10 mb-15 text-left"
//         style={{ wordSpacing: "0.05em" }}
//       >
//         {isBundjalung  ? bundjalung : english}
//       </motion.p>
//       </AnimatePresence>
//                   <motion.button
//             aria-label="Translate greeting between Bundjalung and English"
//             onClick={togggleWelcome}
//             whileHover={{ scale: 1.05, y: -4 }}
//             whileTap={{ scale: 0.95, y: 2 }}
//             style={{ wordSpacing: "0.1em" }}
//             className="text-4xl px-8 py-4 bg-blue-600 text-white rounded-full shadow-2xl transition-colors duration-300 hover:bg-blue-700 tracking-tight cursor-pointer"
//             >
//             Translate
//             </motion.button>
//     </section>
//   );
// }


