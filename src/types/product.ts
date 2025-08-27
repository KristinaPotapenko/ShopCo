export type Product = {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: number;
  oldPrice?: number;
  discountPercentage?: number;
};
