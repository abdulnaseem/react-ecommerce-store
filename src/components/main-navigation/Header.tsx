import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { selectTotalQuantity } from "../../redux/slices/cartSlice";
import SearchBar from "../SearchBar";
import { filterByGender } from "../../redux/slices/productsSlice";
import { useMediaQuery } from "react-responsive";
import LOGO from '../../../public/assets/clothing.jpeg';
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: "640px" });

    const totalQuantity = useSelector((state: RootState) => selectTotalQuantity(state));

    const handleFilterByGender = (gender: string) => {
        navigate(`/${gender}`);
        dispatch(filterByGender(gender));
    };

    const handleToggleNav = () => setIsOpen((prev) => !prev);

    return (
        <>
            {/* Header */}
            <div className="">
                <div className="flex justify-between p-3 bg-black text-white items-center">
                    <div className="ms-5">
                        <Link to="/" onClick={() => dispatch(filterByGender(""))}>
                            <img src="/assets/clothing.jpeg" className="w-24" alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        {isMobile ? (
                            <div>
                                <IoSearch className="me-4" size={23} />
                            </div>
                        ) : (
                            <div className="me-4">
                                <SearchBar />
                            </div>
                        )}
                        <div>
                            <FaUser className={`me-4 ${isMobile ? "mt-0.5" : "mt-2"}`} size={20} />
                        </div>
                        <Link to="/cart" className="flex items-center me-5">
                            <IoBagOutline size={23} />
                            <p className="ms-2">{totalQuantity}</p>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                {isMobile && (
                    <div className="bg-black p-2 pb-5 ps-8">
                        <AiOutlineMenu className="text-white" size={30} onClick={handleToggleNav} />
                    </div>
                )}

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && <MobileNav toggleNav={handleToggleNav} />}
                </AnimatePresence>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
                <nav className="bg-black text-white pb-3">
                    <ul className="flex justify-center">
                        <li className="p-2 cursor-pointer" onClick={() => handleFilterByGender("men")}>Men</li>
                        <li className="p-2 cursor-pointer" onClick={() => handleFilterByGender("women")}>Women</li>
                        <li className="p-2 cursor-pointer" onClick={() => handleFilterByGender("kids")}>Kids</li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Header;
