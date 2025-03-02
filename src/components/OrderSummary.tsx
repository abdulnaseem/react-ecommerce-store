import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link, useNavigate } from "react-router-dom";

const OrderSummary: React.FC = () => {

  const navigate = useNavigate();

  const userDetails = useSelector((state: RootState) => state.checkout);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  console.log(cartItems);

  //console.log("Redux Store Data:", userDetails); // ✅ Debug log

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Order Summary
          </h2>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            {/* Order Summary Table */}
            <div className="w-full lg:w-2/3 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg text-white">
                  {/* Table Header */}
                  <thead className="bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Product</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold">Quantity</th>
                      <th className="px-6 py-3 text-right text-sm font-semibold">Price</th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody>
                    {
                      cartItems.map((product) => (
                        <tr className="border-t border-gray-300 dark:border-gray-600 text-sm">
                          <td className="px-6 py-4 text-left">
                            <img className="w-[120px]" src={product.image} alt="" />
                          </td>
                          <td className="px-6 py-4 text-left">{product.name}</td>
                          <td className="px-6 py-4 text-center">{product.quantity}</td>
                          <td className="px-6 py-4 text-right">£{product.price}</td>
                        </tr>
                      ))
                    }
                  </tbody>

                  {/* Table Footer */}
                  {/* <tfoot>
                    <tr className="border-t-2 border-gray-400 dark:border-gray-500 font-semibold">
                      <td colSpan={2}></td>
                      <td className="px-6 py-4 text-center">Total:</td>
                      <td className="px-6 py-4 text-right">£{totalPrice}</td>
                    </tr>
                  </tfoot> */}
                </table>
              </div>
            </div>

            {/* Delivery Address Section */}
            <div className="w-full lg:w-1/3 mt-6 lg:mt-0 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Delivery Address</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {userDetails.firstname} {userDetails.lastname} <br />
                {userDetails.addressline1} <br />
                {userDetails?.addressline2} <br />
                {userDetails.city}, {userDetails.postcode} <br />
                {userDetails.country}, United Kingdom
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Phone: {userDetails.contactnumber}
              </p>

              <button 
                className="bg-gray-600 p-1.5 px-5 rounded-md mt-4 text-sm text-gray-200 border-[0.25px] border-gray-400"
                onClick={() => navigate(-1)}>
                  Edit
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
