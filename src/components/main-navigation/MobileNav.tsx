import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

interface MobileNavProps {
    toggleNav: MouseEventHandler;
}

const MobileNav: React.FC<MobileNavProps> = ({ toggleNav }) => {

    return (
        <motion.div 
            className="fixed flex flex-col min-h-[100vh] top-0 left-0 z-10 w-[75%] bg-white"
            initial={{ x: "-100%" }} // Start off-screen
            animate={{ x: 0 }} // Animate into view
            exit={{ x: "-100%" }} // Exit off-screen
            transition={{
                type: "spring", // Spring-based motion
                stiffness: 100, // Controls the speed of the spring
                damping: 20, // Controls bounce effect
                duration: 0.5 // Overall duration (optional)
            }}
        >
            <div className="absolute right-0 p-5">
                <IoCloseOutline size={30} onClick={toggleNav} />
            </div>
            <Link to="/men" className="mt-20 p-3 ps-5 text-lg">Men</Link>
            <Link to="/women" className="p-3 ps-5 text-lg">Women</Link>
            <Link to="/kids" className="p-3 ps-5 text-lg">Kids</Link>
        </motion.div>
    )
}

export default MobileNav;