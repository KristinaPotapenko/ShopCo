export default function HeroStatistics() {
  const statistics = [
    { id: 1, number: 200, text: "International Brands" },
    { id: 2, number: "2,000", text: "High-Quality Products" },
    { id: 3, number: "30,000", text: "Happy Customers" },
  ];

  return (
    <ul className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3.5 md:gap-x-0 md:justify-start md:flex-nowrap md:divide-x md:divide-black/10 mb-10">
      {statistics.map((item) => (
        <li
          key={item.id}
          className="flex flex-col md:items-start items-center md:px-8 first:pl-0"
        >
          <p className="mb-1.5 text-2xl md:text-4xl font-semibold">
            {item.number}+
          </p>
          <p className="text-black/60">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
