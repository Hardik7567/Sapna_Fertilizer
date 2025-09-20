import { useEffect, useState } from "react";

export default function ProductCard(props) {
  const { products } = props;
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [mainImage, setMainImage] = useState("/bottle.png");
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  useEffect(() => {
    setSelectedVariant(products?.variants?.[0] || null);
  }, []);

  console.log(props,"productsproducts")
  return (
    <div className="container mx-auto bg-white p-8 flex items-center gap-6">
      <div className="w-1/2 flex gap-4">
        <div className="flex flex-col gap-3">
          {[...Array(5)].map((img, idx) => (
            <div
              key={idx}
              className={`border flex justify-center items-center w-[86px] h-[86px] bg-[#F3F3F5] rounded-[12px] p-1 cursor-pointer ${
                mainImage === idx ? "border-[#003C22]" : "border-gray-200"
              }`}
              onClick={() => setMainImage(img)}
            >
              <img
                src={"/product_image.png"}
                alt="thumb"
                className="w-14 h-14 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex-1 flex justify-center w-[500px] h-[500px] items-center border border-[#E0E2E7] rounded-[12px] bg-[#F3F3F5] p-6">
          <img
            src="/product_image.png"
            alt="Product"
            className="object-contain h-72"
          />
        </div>
      </div>

      {}
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold">
          {products?.product_name || ""}
        </h2>
        <p className="text-gray-600 mt-2 leading-relaxed font-medium text-[14px]">
          {products?.description || ""}
        </p>

        <div className="mt-4 text-2xl text-[#003C22] font-bold flex items-center gap-2">
          ₹{selectedVariant?.price * quantity || ""}
          <span className="text-gray-500 line-through text-sm">₹225</span>
        </div>

        <p className="mt-1 text-sm text-gray-700">
          <span className="font-medium text-[#000]">Size: </span>
          {quantity} bottle ({selectedVariant?.size || ""}{" "}
          {selectedVariant?.uom || ""})
        </p>

        <hr className="my-6 text-[#E0E2E7]" />

        <div>
          <p className="font-semibold text-gray-800 mb-3">Variants</p>
          <div className="grid gap-4 flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {(products?.variants || []).map((variant) => {
              const isSelected = selectedVariant?.size === variant.size;
              return (
                <div
                  key={variant.size}
                  className={`flex flex-col justify-between border rounded-[12px] p-3 transition cursor-pointer ${
                    isSelected
                      ? "border-[#003C22] bg-[#E8F7F0]"
                      : "border-[#E0E2E7] bg-[#F3F3F5] hover:border-[#003C22]"
                  }`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  <p className="font-semibold text-center text-[17px] text-[#000]">
                    {variant.size} {variant.uom}
                  </p>

                  <p className="text-center mt-1">
                    <span className="text-[#003C22] text-[16px] font-medium">
                      ₹{variant.price}
                    </span>{" "}
                    <span className="line-through text-gray-400 text-[13px]">
                      ₹{variant.originalPrice}
                    </span>
                  </p>

                  {isSelected ? (
                    <div className="flex items-center gap-2 mt-3 justify-center">
                      <div className="flex items-center border border-[#E0E2E7] gap-[1px] rounded-[12px] overflow-hidden">
                        <button
                          className="px-2 min-w-[28px] py-1 text-red-500 bg-[#fff] cursor-pointer hover:bg-gray-200"
                          onClick={() => handleQuantityChange(-1)}
                        >
                          -
                        </button>
                        <span className="px-2 min-w-[28px] min-h-[32px] flex items-center text-sm font-medium bg-[#fff]">
                          {quantity.toString().padStart(2, "0")}
                        </span>
                        <button
                          className="px-2 py-1 text-[#000] min-w-[28px] cursor-pointer bg-[#fff] hover:bg-gray-200"
                          onClick={() => handleQuantityChange(1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button className="bg-[#003C22] text-white px-2 py-1.5 rounded-[12px] text-[14px] font-semibold mt-3 hover:bg-green-800 transition">
                      Add to Bag
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
