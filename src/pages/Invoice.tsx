import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CheckoutProgressBar from "../components/CheckoutProgressBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Invoice: React.FC = () => {

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const userDetails = useSelector((state: RootState) => state.checkout);

  return (
    <>
      <CheckoutProgressBar currentStep={4} />

      {/* Success Message */}
      <div className="flex flex-col justify-center items-center mt-16">
        <FaCheckCircle className="text-green-500 text-5xl" />
        <span className="mt-4 text-lg font-semibold text-gray-900">
          Thank you for your purchase!
        </span>
      </div>

      {/* Invoice Section */}
      <section className="bg-white antialiased mt-8 mb-6">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            
            {/* Invoice Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Invoice <span className="text-sm text-gray-600">#123456789</span>
                </h2>
                <p className="text-sm text-gray-700">Order Date: 26 Feb 2025</p>
              </div>
            </div>

            <div className="lg:flex lg:items-start lg:gap-12">
              
              {/* Invoice Table */}
              <div className="w-full lg:w-2/3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-gray-900 dark:text-white">
                    {/* Table Header */}
                    <thead className="bg-gray-100 dark:bg-gray-700">
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
                          <tr className="border-t border-gray-300 dark:border-gray-600">
                            <td className="px-6 py-4">
                              <img className="w-[120px]" src={product.image} alt="" />
                            </td>
                            <td className="px-6 py-4">{product.name}</td>
                            <td className="px-6 py-4 text-center">{product.quantity}</td>
                            <td className="px-6 py-4 text-right">£{product.price}</td>
                          </tr>
                        ))
                      }
                    </tbody>

                    {/* Table Footer */}
                    <tfoot>
                      <tr className="border-t-2 border-gray-400 dark:border-gray-500 font-semibold">
                        <td colSpan={2}></td>
                        <td className="px-6 py-4 text-center">Total:</td>
                        <td className="px-6 py-4 text-right">£{totalPrice}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Billing Information */}
              <div className="w-full lg:w-1/3 mt-6 lg:mt-0 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Billing Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {userDetails.firstname} {userDetails.lastname} <br />
                  {userDetails.addressline1} <br />
                  {userDetails.addressline2} <br />
                  {userDetails.city}, {userDetails.postcode} <br />
                  {userDetails.country}, United Kingdom
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Email: {userDetails.email}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Payment Method: Visa **** 4444
                </p>
              </div>
            </div>

            {/* Footer Section */}
            <div className="mt-6 flex justify-center">
              <Link to="/" className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invoice;
