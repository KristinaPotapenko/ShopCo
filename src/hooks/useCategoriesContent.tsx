import CategoryCard from "@/components/ui/cards/CategoryCard/CategoryCard";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import { SkeletonCategoryCard } from "@/components/ui/cards/CategoryCard/SkeletonCategoryCard";

export const useCategoriesContect = (
  categories: string[],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: string | null,
  retry: () => void
) => {
  const calculateColumns = (i: number) => {
    const rowIndex = Math.floor(i / 2);
    const isEvenRow = rowIndex % 2 === 0;
    const isEvenCol = i % 2 === 0;

    const isBigCol = (isEvenCol && !isEvenRow) || (!isEvenCol && isEvenRow);

    return isBigCol;
  };

  if (status === "idle" || status === "loading") {
    return (
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCategoryCard
            isBigCol={calculateColumns(index)}
            key={index}
          />
        ))}
      </ul>
    );
  }

  if (status === "succeeded") {
    if (categories.length === 0) {
      return <div className="w-full text-center py-10">No products found</div>;
    }

    return (
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">
        {categories.map((category, index) => (
          <CategoryCard
            name={category}
            isBigCol={calculateColumns(index)}
            key={index}
          />
        ))}
      </ul>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 w-full text-center py-10 mt-4">
        <p className="font-normal text-zinc-400">
          Error loading products: {error}
        </p>
        <PrimaryButton type="button" onClick={retry}>
          Try Again
        </PrimaryButton>
      </div>
    );
  }
};
