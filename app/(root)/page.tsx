import ProductList from "@/components/ui/shared/product/ProductList";
import ProductListLoading from "@/components/ui/shared/product/ProductListLoading";
import { Suspense } from "react";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <h1 className="h1-bold text-center">Online store</h1>
      <Suspense fallback={<ProductListLoading />}>
        <ProductList title="Newest arrivals" />
      </Suspense>
    </>
  );
}
