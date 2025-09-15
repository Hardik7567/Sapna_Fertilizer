import LayoutMain from "@/components/Layout/LayoutMain";
import BreadcrumbProduct from "@/components/ProductList/BreadcrumbProduct";
import ProductCard from "@/components/ProductList/ProductCard";
import ProductTabs from "@/components/ProductList/ProductTabs";
import SimilarProducts from "@/components/ProductList/SimilarProducts";

export default function Home({ products }) {
  return (
    <LayoutMain>
      <BreadcrumbProduct />
      <ProductCard products={products} />
      <ProductTabs />
      <SimilarProducts />
    </LayoutMain>
  );
}

export async function getServerSideProps() {
  try {
    // Replace with your API endpoint
    const res = await fetch(
      "https://e6lt9wjit7.execute-api.ap-south-1.amazonaws.com/dev/products/122"
    );
    const products = await res.json();
    return {
      props: {
        products, // Pass the fetched data as props
      },
    };
  } catch (error) {
    return {
      props: {
        products: [], // Pass an empty array in case of an error
      },
    };
  }
}
