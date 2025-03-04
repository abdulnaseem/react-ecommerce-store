import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutProgressBar from "../components/CheckoutProgressBar";
import { setUserDetails } from "../redux/slices/checkoutSlice";
import { RootState } from "../redux/store";


const Checkout: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userDetails = useSelector((state: RootState) => state.checkout);
    const [formData, setFormData] = useState(userDetails);
    const [touchedFields, setTouchedFields] = useState<{[key: string]: boolean}>({});

    const handleBlur = (field: string) => {
        setTouchedFields((prev) => (
            {
                ...prev,
                [field]: true
            }
        ))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const formDataCheck = new FormData(e.currentTarget);
        // for(const [key, value] of formDataCheck.entries()) {
        //     if(value === "") {
        //         console.log("Please fill the field " + key);
        //     }
        //     console.log(`${key}: ${value}\n`);
        // }
        dispatch(setUserDetails(formData));
        navigate("/cart/checkout/payment");
    }

    // Check if at least one field has a value
    const isFormValid = () => {
        return Object.entries(formData)
                .filter(([key]) => key !== "addressline2") //this field is not required
                .every(([, value]) => value?.trim() !== '');
    };

    //console.log("This is the user details: " + userDetails.firstname);

    return (
        <>  
            <CheckoutProgressBar currentStep={2} />
            <form className="w-full max-w-lg mx-auto mt-10 px-4 sm:px-0" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input 
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${touchedFields.firstname && formData.firstname === "" ? "border-red-500" : ""}`} 
                            id="grid-first-name" 
                            type="text" 
                            placeholder="Jane" 
                            name="firstname"
                            onBlur={() => handleBlur("firstname")}
                            //onFocus={() => setTouched(false)}
                            value={formData.firstname}
                            onChange={handleChange} />
                        {
                            touchedFields.firstname && formData.firstname === "" && (
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            )
                        }
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input 
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${touchedFields.lastname && formData.lastname === "" ? "border-red-500" : ""}`}
                            id="grid-last-name" 
                            type="text" 
                            placeholder="Doe" 
                            name="lastname"
                            onBlur={() => handleBlur("lastname")}
                            //onFocus={() => setTouched(false)}
                            value={formData.lastname}
                            onChange={handleChange} />
                        {
                            touchedFields.lastname && formData.lastname === "" && (
                                <p className="text-red-500 text-xs italic mt-3">Please fill out this field.</p>
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Email
                        </label>
                        <input 
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${touchedFields.email && formData.email === "" ? "border-red-500" : ""}`} 
                            id="grid-password" 
                            type="email" 
                            placeholder="example@outlook.com" 
                            name="email"
                            onBlur={() => handleBlur("email")}
                            //onFocus={() => setTouched(false)}
                            value={formData.email}
                            onChange={handleChange} />
                        {
                            touchedFields.email && formData.email === "" && (
                                <p className="text-red-500 text-xs italic mt-3">Please fill out this field.</p>
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Contact Number
                        </label>
                        <input 
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${touchedFields.contactnumber && formData.contactnumber === "" ? "border-red-500" : ""}`} 
                            id="grid-password" 
                            type="number" 
                            placeholder="07536456344" 
                            name="contactnumber"
                            onBlur={() => handleBlur("contactnumber")}
                            //onFocus={() => setTouched(false)}
                            value={formData.contactnumber}
                            onChange={handleChange} />
                        {
                            touchedFields.contactnumber && formData.contactnumber === "" && (
                                <p className="text-red-500 text-xs italic mt-3">Please fill out this field.</p>
                            )
                        }
                    </div>
                </div>

                {/* <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Password
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div> */}
                
                <h2 className="block uppercase tracking-wide text-gray-700 text-sm font-bold">ADDRESS</h2>
                <hr />

                <div className="flex flex-wrap -mx-3 mb-6 mt-5">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            ADDRESS LINE 1
                        </label>
                        <input 
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${touchedFields.addressline1 && formData.addressline1 === "" ? "border-red-500" : ""}`} 
                            id="grid-password" 
                            placeholder="Address Line 1" 
                            name="addressline1"
                            onBlur={() => handleBlur("addressline1")}
                            value={formData.addressline1}
                            onChange={handleChange} />
                        {
                            touchedFields.addressline1 && formData.addressline1 === "" && (
                                <p className="text-red-500 text-xs italic mt-3">Please fill out this field.</p>
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            ADDRESS LINE 2
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-password" 
                            placeholder="Address Line 2" 
                            name="addressline2"
                            value={formData.addressline2}
                            onChange={handleChange} />
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            City
                        </label>
                        <input 
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${touchedFields.city && formData.city === "" ? "border-red-500" : ""}`} 
                            id="grid-city" 
                            type="text" 
                            placeholder="London" 
                            name="city"
                            onBlur={() => handleBlur("city")}
                            value={formData.city}
                            onChange={handleChange} />
                        {
                            touchedFields.city && formData.city === "" && (
                                <p className="text-red-500 text-xs italic mt-3">Please fill out this field.</p>
                            )
                        }
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Country
                        </label>

                        {/* Ensure Select + SVG are in a Fixed-Height Container */}
                        <div className="relative">
                            <div className="relative w-full">
                                <select 
                                    className={`block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white ${
                                        touchedFields.country && !formData.country ? "border-red-500" : "border-gray-200 focus:border-gray-500"
                                    }`} 
                                    id="grid-state" 
                                    name="country"
                                    onBlur={() => handleBlur("country")}
                                    value={formData.country || ""}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Country</option>
                                    <option value="England">England</option>
                                    <option value="Wales">Wales</option>
                                    <option value="Scotland">Scotland</option>
                                </select>

                                {/* Keep the Dropdown Icon Fixed in Place */}
                                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                    <svg 
                                        className="w-5 h-5 text-gray-700" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>

                            {/* Error Message - Keep it Separate from Select */}
                            {touchedFields.country && !formData.country && (
                                <p className="text-red-500 text-xs italic mt-3">Please select a country.</p>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Postcode
                        </label>
                        <input 
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${touchedFields.postcode && formData.postcode === "" ? "border-red-500" : ""}`} 
                            id="grid-zip" 
                            type="text" 
                            placeholder="WC2E 7HQ" 
                            name="postcode"
                            onBlur={() => handleBlur("postcode")}
                            value={formData.postcode}
                            onChange={handleChange} />
                        {
                            touchedFields.postcode && formData.postcode === "" && (
                                <p className="text-red-500 text-xs italic mt-3">Please fill out this field.</p>
                            )
                        }
                    </div>
                </div>

                <button 
                    className="w-full mt-8 mb-5 rounded py-2.5 bg-[#FFC107] text-white block uppercase font-bold
                                hover:bg-[#E0A800] active:bg-[#D39E00] transition-all duration-200 disabled:bg-[#ccc] disabled:cursor-not-allowed"
                    aria-label="Pay Now"
                    type="submit"
                    disabled={!isFormValid()}
                    >
                    Pay Now
                </button>


            </form>
        </>
    )
}

export default Checkout;