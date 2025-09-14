import React from "react";
import Link from "next/link";

export default function BreadcrumbProduct() {
    return (
        <nav className="text-sm font-medium text-gray-600 bg-[#FFF3E7] min-h-[60px] flex justify-center items-center    " aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="text-[#003C22] hover:text-green-600">
                        Home
                    </Link>
                </li>
                <li>
                    <span className="text-gray-400">/</span>
                </li>
                <li>
                    <Link href="/products" className="text-[#003C22] hover:text-green-600">
                        Products
                    </Link>
                </li>
                <li>
                    <span className="text-gray-400">/</span>
                </li>
                <li className="text-[#003C22] font-semibold">Product Name</li>
            </ol>
        </nav>
    );
}
