import React, { forwardRef, MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGender,
  filterByColor,
  filterBySize,
  filterBySortChange,
  filterByColorAndSize
} from "../redux/slices/productsSlice";
import { motion } from "framer-motion";
import { RootState } from "../redux/store";
import { useMediaQuery } from "react-responsive";
import { IoCloseOutline } from "react-icons/io5";

interface FiltersProps {
  // Add any additional props here if needed
  isVisible: boolean;
  toggleFilter: MouseEventHandler
}

interface ColorFilter {
  color: string;  // The name of the color
  hex: string; // The corresponding color value (e.g., hex code or CSS color name)
}

const Filters = forwardRef<HTMLDivElement, FiltersProps>(({ isVisible, toggleFilter }, ref) => {
  const dispatch = useDispatch();

  // Local state for selected filters
  const [gender, setGender] = useState<string>("");
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);

  const [hasMounted, setHasMounted] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "640px" })

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const colorsFilter: ColorFilter[] = [
    { color: "black", hex: "#000000" },
    { color: "red", hex: "#FF0000" },
    { color: "blue", hex: "#0000FF" },
    { color: "yellow", hex: "#FFFF00" },
    { color: "brown", hex: "#8B4513" },
    { color: "beige", hex: "#F5F5DC" },
    { color: "white", hex: "#FFFFFF" },
    { color: "green", hex: "#008000" },
    { color: "pink", hex: "#FFC0CB" },
    { color: "purple", hex: "#800080" },
    { color: "tan", hex: "#D2B48C" },
    { color: "gold", hex: "#FFD700" },
    { color: "silver", hex: "#C0C0C0" },
    { color: "multicolor", hex: "linear-gradient(to right, red, orange, yellow, green, blue, purple)" }
  ];

  const sizeFilter: string[] = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "One Size",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];

  const handleColorChange = (color: string) => {
    setColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeChange = (size: string) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const applyFilters = () => {
    dispatch(
      filterByColorAndSize({
          colors,
          sizes,
      })
    );
  };

  return (
    
    <motion.div
      ref={ref}
      className={`filters p-5 border bg-white h-[100vh] overflow-y-auto 
        ${isMobile ? "fixed top-0 left-0 z-[1000] w-[65%]" : "sticky top-0 z-50 w-[220px] lg:w-[300px]"}`}
      {...(isMobile && {
        initial: hasMounted ? { x: "-100%" } : false, // Start off-screen or in place
        animate: { x: isVisible ? 0 : "-100%" }, // Move on-screen or off-screen
        transition: {
          type: "spring",       // Type of animation
          stiffness: 100,       // Spring stiffness
          damping: 20,          // Spring damping
          duration: 0.8         // Duration in seconds
        },
      })}
    >

       
      {/* Category filter */}
      <div className="mb-4 flex flex-col">
        {
          isMobile && (
            <div className="absolute right-0 p-5">
              <IoCloseOutline size={30} onClick={toggleFilter} />
            </div>
          )
        }
        {/* <h3 className={`font-bold mb-2 ${isMobile && "mt-20"}`}>Category</h3>
        <div className="flex">
          <input
            id="all-categories"
            type="radio"
            name="gender"
            value=""
            checked={gender === ""}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="all-categories" className="ms-2">
            All Categories
          </label>
        </div>

        <div className="flex">
          <input
            id="men"
            type="radio"
            name="gender"
            value="men"
            checked={gender === "men"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="men" className="ms-2">
            Men
          </label>
        </div>

        <div className="flex">
          <input
            id="women"
            type="radio"
            name="gender"
            value="women"
            checked={gender === "women"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="women" className="ms-2">
            Women
          </label>
        </div>

        <div className="flex">
          <input
            id="kids"
            type="radio"
            name="gender"
            value="kids"
            checked={gender === "kids"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="kids" className="ms-2">
            Kids
          </label>
        </div> */}
      </div>

      {/* Size filter */}
      <div className={`mb-4 h-[250px] border overflow-y-scroll p-4 ${isMobile && "mt-20 z-10"}`}>
        <h3 className="font-bold mb-2">Sizes</h3>
        {sizeFilter.map((size) => (
          <div className="flex ms-5">
            <input
              id={size}
              type="checkbox"
              value={size}
              checked={sizes.includes(size)}
              onChange={() => handleSizeChange(size)}
            />
            <label htmlFor={size} key={size} className="block ms-2">
              {size}
            </label>
          </div>          
        ))}
      </div>

      {/* Color filter */}
      <div className="mb-4 h-[250px] border overflow-y-scroll p-4 z-10">
        <h3 className="font-bold mb-2">Colors</h3>
        {colorsFilter.map((color) => (
          <div className="flex ms-5">
            <input
              id={color.color}
              type="checkbox"
              value={color.color}
              checked={colors.includes(color.color)}
              onChange={() => handleColorChange(color.color)}
            />
            <div
              className="w-[12px] h-[12px] rounded-[50%] m-2 border"
              style={{ backgroundColor: color.hex }}
            ></div>
            <label htmlFor={color.color} key={color.color} className="block ms-0.5 mt-0.5">
              {color.color.charAt(0).toUpperCase() + color.color.slice(1)}
            </label>
          </div>
        ))}
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900"
      >
        Apply Filters
      </button>
    </motion.div>
  );
});

Filters.displayName = "Filters";

export default Filters;
