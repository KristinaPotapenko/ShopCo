"use client";

import { API_BASE } from "@/constants/constance";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface StyleCardProps {
  name: string;
  isBigCol: boolean;
}

export default function CategoryCard({ name, isBigCol }: StyleCardProps) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `${API_BASE}/products/category/${name}?limit=1`
        );

        const firstProduct = response.data.products?.[0];

        if (firstProduct?.images) {
          setImage(firstProduct.images[0]);
        }
      } catch (err) {
        console.error("Error fetching image:", err);
      }
    };

    fetchImage();
  }, [name]);

  return (
    <li
      className={`relative ${
        isBigCol && "col-span-2"
      } aspect-[3/2] w-full h-full max-h-[300px] bg-white rounded-3xl`}
    >
      <Link className="block min-w-full min-h-full" href={`/category/${name}`}>
        <h3 className="absolute top-4 lg:top-6 left-6 lg:left-9 z-2 text-2xl lg:text-4xl font-semibold">
          {name[0].toUpperCase() + name.slice(1)}
        </h3>
        {image && (
          <Image
            src={image || ""}
            alt={name}
            width={700}
            height={700}
            className="absolute bottom-0 right-0 w-3/4 h-4/5 object-contain rounded-3xl"
          />
        )}
      </Link>
    </li>
  );
}
