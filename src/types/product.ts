export type Product = {
  id: number;
  title: string;
  price: number | null;
  discountPercentage: number | null;
  rating: number | null;
  images: string[];
};
