import React, { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGender,
  filterByColor,
  filterBySize,
  filterBySortChange,
} from "../redux/slices/productsSlice";
import { motion } from "framer-motion";
import { RootState } from "../redux/store";

interface FiltersProps {
  // Add any additional props here if needed
  isVisible: boolean;
}

const Filters = forwardRef<HTMLDivElement, FiltersProps>(({ isVisible }, ref) => {
  const dispatch = useDispatch();

  // Local state for selected filters
  const [gender, setGender] = useState<string>("");
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const colorsFilter: string[] = [
    "black",
    "red",
    "blue",
    "yellow",
    "brown",
    "beige",
    "white",
    "green",
    "pink",
    "purple",
    "tan",
    "gold",
    "silver",
    "multicolor",
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
    dispatch(filterByGender(gender));
    colors.forEach((color) => dispatch(filterByColor(color)));
    sizes.forEach((size) => dispatch(filterBySize(size)));
  };


  return (
    <motion.div
        initial={ hasMounted ? { x : "-100%" } : false } // Start off-screen or in place
        animate={{ x: isVisible ? 0 : "-100%" }} // Move on-screen or off-screen
        transition={{
            type: "spring",       // Type of animation
            stiffness: 100,       // Spring stiffness
            damping: 20,          // Spring damping
            duration: 0.8         // Duration in seconds
        }}
        ref={ref}
        className="filters p-5 border w-[350px] fixed top-0 left-0 overflow-y-auto z-10 bg-white h-[100vh]"
    >
      {/* Category filter */}
      <div className="mb-4 flex flex-col">
        <h3 className="font-bold mb-2">Category</h3>
        <label>
          <input
            type="radio"
            name="gender"
            value=""
            checked={gender === ""}
            onChange={(e) => setGender(e.target.value)}
          />
          All Categories
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="men"
            checked={gender === "men"}
            onChange={(e) => setGender(e.target.value)}
          />
          Men
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="women"
            checked={gender === "women"}
            onChange={(e) => setGender(e.target.value)}
          />
          Women
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="kids"
            checked={gender === "kids"}
            onChange={(e) => setGender(e.target.value)}
          />
          Kids
        </label>
      </div>

      {/* Color filter */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Colors</h3>
        {colorsFilter.map((color) => (
          <label key={color} className="block">
            <input
              type="checkbox"
              value={color}
              checked={colors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </label>
        ))}
      </div>

      {/* Size filter */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Sizes</h3>
        {sizeFilter.map((size) => (
          <label key={size} className="block">
            <input
              type="checkbox"
              value={size}
              checked={sizes.includes(size)}
              onChange={() => handleSizeChange(size)}
            />
            {size}
          </label>
        ))}
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600"
      >
        Apply Filters
      </button>
    </motion.div>
  );
});

Filters.displayName = "Filters";

export default Filters;
