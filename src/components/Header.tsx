import React from "react"
import { useSelector, UseSelector } from "react-redux";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { selectTotalQuantity } from "../redux/slices/cartSlice";


const Header: React.FC = () => {

    const totalQuantity = useSelector((state: RootState) => selectTotalQuantity(state));

    console.log(totalQuantity);

    return (
        <div className="flex justify-between p-3 bg-black text-white items-center">
            <div className="ms-5">
                <Link to="/">ECommerce Store</Link>
            </div>
            <Link to="/cart" className="flex items-center me-5">
                <IoBagOutline size={30} />
                <p className="ms-2">{totalQuantity}</p>
            </Link>
        </div>
    )
}

export default Header;