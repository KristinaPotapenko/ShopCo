export function formatType(type: string): string {
  const words = type.replace(/([A-Z])/g, " $1").split(" ");

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
