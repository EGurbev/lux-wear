import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductCard from "./ProductCard";

type ProductListProps = {
  title?: string;
};

export default async function ProductList({ title }: ProductListProps) {
  const products = await getLatestProducts();

  return (
    <div className="my-10">
      {title && <h2 className="h2-bold mb-4">{title}</h2>}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
}
