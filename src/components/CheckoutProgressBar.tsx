import React from "react";
import { FaCircleCheck, FaRegCircle } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

interface CheckoutProgressBarProps {
    currentStep: number;
}

const steps = ["Cart", "Checkout", "Order Summary", "Payment"];

const CheckoutProgressBar: React.FC<CheckoutProgressBarProps> = ({ currentStep }) => {
    const isMobile = useMediaQuery({ maxWidth: 723 });

    return (
        <div className="flex items-center justify-between w-full max-w-2xl mx-auto mt-4 px-4">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    {index + 1 <= currentStep ? (
                        <FaCircleCheck className="text-green-500 text-lg sm:text-xl" />
                    ) : (
                        <FaRegCircle className="text-gray-400 text-lg sm:text-xl" />
                    )}

                    <p className={`ml-2 text-xs sm:text-sm font-medium ${index + 1 <= currentStep ? "text-gray-900" : "text-gray-500"}`}>
                        {step}
                    </p>

                    {index < steps.length - 1 && (
                        <div className={`flex items-center ${isMobile ? "mx-1 text-sm" : "mx-3"}`}>
                            {isMobile ? (
                                <span className={`${index + 1 < currentStep ? "text-green-500 font-bold" : "text-gray-300 font-bold"}`}>
                                    /
                                </span>
                            ) : (
                                <div className={`w-10 h-1 ${index + 1 < currentStep ? "bg-green-500" : "bg-gray-300"}`} />
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CheckoutProgressBar;
