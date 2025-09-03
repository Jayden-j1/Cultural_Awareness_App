import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Greeting({ bundjalungGreeting = "JINGI WALLA", englishGreeting="WELCOME" }) {
    
    const [isBundjalung, setIsBundjalung] = useState(true);
    const toggleGreeting = () => setIsBundjalung(prev => !prev);
    
    return (
        <>
        <section className="flex flex-col justify-center items-center w-full h-screen">
            
            <AnimatePresence mode="wait">
            <motion.h1 
            key={isBundjalung ? "bundjalung" : "english"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            className="text-center w-full text-9xl mb-7">{isBundjalung ? bundjalungGreeting : englishGreeting}</motion.h1>
            </AnimatePresence>
            
            <motion.button
            aria-label="Translate greeting between Bundjalung and English"
            onClick={toggleGreeting}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95, y: 2 }}
            style={{ wordSpacing: "0.1em" }}
            className="text-4xl px-8 py-4 bg-blue-600 text-white rounded-full shadow-2xl transition-colors duration-300 hover:bg-blue-700 tracking-tight cursor-pointer"
            >
            Translate
            </motion.button>
        
        </section>
        </>
    );
}