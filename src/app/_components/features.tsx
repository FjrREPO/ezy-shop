import React from 'react'
import { ShoppingCart, Store, Truck } from 'lucide-react';

const features = [
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "Shop Everything You Need",
    info: "From fashion and electronics to home essentials and hobbies — all in one place, just like Shopee.",
  },
  {
    icon: <Store className="w-7 h-7" />,
    title: "Open Your Own Store",
    info: "Become a seller in minutes. Pixora gives you the tools to showcase your products and manage orders easily.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Fast & Secure Delivery",
    info: "Enjoy smooth delivery with trusted logistics partners and secure payment options.",
  },
];

export default function Features() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover what Pixora can do
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Pixora provides everything you need to build and launch a professional website — fast, flexible, and fully powered by AI.
          </p>
        </div>

        {/* Visual Element */}
        <div className="flex justify-center mb-20">
          <div className="relative">
            <svg 
              className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md" 
              width="328" 
              height="401" 
              viewBox="0 0 328 401" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="131" y="56" width="60" height="315" fill="url(#paint0_linear_50_493)" />
              <g clipPath="url(#clip0_50_493)">
                <rect x="131" y="341" width="60" height="60" rx="10" fill="#3B82F6" />
                <rect x="174.5" y="333.5" width="24" height="24" rx="4.5" fill="#60A5FA" stroke="#3B82F6" />
                <rect x="123.5" y="333.5" width="24" height="24" rx="4.5" fill="#60A5FA" stroke="#3B82F6" />
                <rect x="123.5" y="384.5" width="24" height="24" rx="4.5" fill="#60A5FA" stroke="#3B82F6" />
                <rect x="146.5" y="356.5" width="29" height="29" rx="4.5" fill="#60A5FA" stroke="#3B82F6" />
                <path d="M162.606 369.088C162.29 368.778 162.29 368.284 162.29 367.297V367.039C162.29 364.302 162.29 362.933 161.521 362.698C160.751 362.462 159.926 363.578 158.277 365.809L155.725 369.262C154.655 370.71 154.119 371.435 154.414 372.004C154.419 372.014 154.424 372.023 154.429 372.032C154.742 372.593 155.666 372.593 157.515 372.593C158.543 372.593 159.057 372.593 159.379 372.896" stroke="white" strokeWidth="1.5" />
                <rect x="174.5" y="384.5" width="24" height="24" rx="4.5" fill="#60A5FA" stroke="#3B82F6" />
              </g>
              <rect x="131.5" y="341.5" width="59" height="59" rx="9.5" stroke="url(#paint1_linear_50_493)" strokeOpacity="0.95" />
              
              <rect x="250" y="9" width="50" height="315" fill="url(#paint2_linear_50_493)" />
              <g clipPath="url(#clip1_50_493)">
                <rect x="250" y="299" width="50" height="50" rx="8" fill="#3B82F6" />
                <rect x="262.5" y="311.5" width="25" height="25" rx="3.5" fill="#60A5FA" stroke="#3B82F6" />
                <path d="M272.36 317.896C272.634 317.201 273.616 317.201 273.89 317.896L274.739 320.048C274.822 320.26 274.99 320.427 275.202 320.511L277.354 321.36C278.049 321.634 278.049 322.616 277.354 322.89L275.202 323.739C274.99 323.822 274.822 323.99 274.739 324.202L273.89 326.354C273.616 327.049 272.634 327.049 272.36 326.354L271.511 324.202C271.427 323.99 271.26 323.822 271.048 323.739L268.896 322.89C268.201 322.616 268.201 321.634 268.896 321.36L271.048 320.511C271.26 320.427 271.427 320.26 271.511 320.048L272.36 317.896Z" stroke="white" strokeWidth="1.5" />
              </g>
              <rect x="250.5" y="299.5" width="49" height="49" rx="7.5" stroke="url(#paint3_linear_50_493)" strokeOpacity="0.95" />
              
              <rect x="31" width="40" height="315" fill="url(#paint4_linear_50_493)" />
              <g clipPath="url(#clip2_50_493)">
                <rect x="31" y="295" width="40" height="40" rx="6" fill="#3B82F6" />
                <rect x="41.5" y="305.5" width="19" height="19" rx="2.5" fill="#60A5FA" stroke="#3B82F6" />
                <path d="M54.7064 314.426L51.5394 317.583L52.113 318.159L55.2801 315.001L54.7064 314.426Z" stroke="white" strokeWidth="1.5" />
              </g>
              <rect x="31.5" y="295.5" width="39" height="39" rx="5.5" stroke="url(#paint5_linear_50_493)" strokeOpacity="0.95" />
              
              <defs>
                <linearGradient id="paint0_linear_50_493" x1="161" y1="56" x2="161" y2="371" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="0" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="paint1_linear_50_493" x1="161" y1="341" x2="161" y2="401" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#3B82F6" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="paint2_linear_50_493" x1="275" y1="9" x2="275" y2="324" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="0" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="paint3_linear_50_493" x1="275" y1="299" x2="275" y2="349" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#3B82F6" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="paint4_linear_50_493" x1="51" y1="0" x2="51" y2="315" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="0" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="paint5_linear_50_493" x1="51" y1="295" x2="51" y2="335" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#3B82F6" stopOpacity="0.5" />
                </linearGradient>
                <clipPath id="clip0_50_493">
                  <rect x="131" y="341" width="60" height="60" rx="10" fill="white" />
                </clipPath>
                <clipPath id="clip1_50_493">
                  <rect x="250" y="299" width="50" height="50" rx="8" fill="white" />
                </clipPath>
                <clipPath id="clip2_50_493">
                  <rect x="31" y="295" width="40" height="40" rx="6" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 transition-colors duration-300">
                <div className="transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.info}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}