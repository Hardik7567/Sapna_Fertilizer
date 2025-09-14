import LayoutMain from "@/components/Layout/LayoutMain";
import BreadcrumbProduct from "@/components/ProductList/BreadcrumbProduct";
import ProductCard from "@/components/ProductList/ProductCard";
import ProductTabs from "@/components/ProductList/ProductTabs";
import SimilarProducts from "@/components/ProductList/SimilarProducts";

export default function Home() {
  return (
   <LayoutMain>
    <BreadcrumbProduct />
    <ProductCard />
    <ProductTabs />
    <SimilarProducts />
   </LayoutMain>
  );
}
