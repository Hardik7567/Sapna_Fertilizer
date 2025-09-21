import React from "react";
import Link from "next/link";
import HeaderDownSvg from "../SvgIcons/HeaderDownSvg";

export default function BreadcrumbProduct() {
    return (
        <div className="w-full h-[68px] bg-no-repeat bg-center bg-cover min-h-[60px] flex justify-center items-center"
            style={{ backgroundImage: "url('/bredbg_img.png')" }}>
            <nav className="text-sm font-medium text-gray-600" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-[2px]">
                    <li>
                        <Link href="/" className="text-[#003C22] text-[15px] font-medium hover:text-green-600 underline">
                            Home
                        </Link>
                    </li>
                    <li className="rotate-[270deg]">
                        <span className="text-gray-400"><HeaderDownSvg /></span>
                    </li>
                    <li>
                        <Link href="/products" className="text-[#003C22] text-[15px] font-medium hover:text-green-600 underline">
                            Products
                        </Link>
                    </li>
                    <li className="rotate-[270deg]">
                        <span className="text-gray-400"><HeaderDownSvg /></span>
                    </li>
                    <li className="text-[#003C22] text-[15px] font-semibold">Product Name</li>
                </ol>
            </nav>
        </div>
    );
}
