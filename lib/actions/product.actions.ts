"use server";

import { prisma } from "@/db/prisma";
import { Product } from "../types";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// get latest products
export async function getLatestProducts(): Promise<Product[]> {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return data.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    images: product.images,
    brand: product.brand,
    description: product.description,
    stock: product.stock,
    price: product.price.toString(),
    rating: Number(product.rating),
    numReviews: product.numReviews,
    isFeatured: product.isFeatured,
    banner: product.banner ?? null,
    createdAt: product.createdAt,
  }));
}

// get single product by slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
