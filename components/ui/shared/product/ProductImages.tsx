"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ProductImagesProps = {
  images: string[];
};

export default function ProductImages({ images }: ProductImagesProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="space-y-2">
      <Image
        src={currentImage}
        alt="product image"
        width={1000}
        height={1000}
        className="m-h-[300px] object-cover object-center"
      />
      <div className="flex items-center gap-2">
        {images.map((image) => (
          <div
            key={image}
            className={cn(
              "border cursor-pointer hover:border-orange-600",
              currentImage === image ? "border-orange-500" : ""
            )}
            onClick={() => setCurrentImage(image)}
          >
            <Image src={image} alt="product image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
