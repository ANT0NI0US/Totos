export default function ToggleCategories({
  handleSelectNewCategory,
  selectedCategory,
  categories,
}) {
  return (
    <div className="w-fit rounded-md bg-secondary p-[6px] text-light">
      <div className="flexCenter flex-wrap gap-1">
        {categories?.map((category) => (
          <button
            key={category}
            className={`rounded-md px-2 py-1 uppercase transition-all duration-200 ${
              category === selectedCategory ? "bg-orange" : "hover:bg-orange/60"
            }`}
            onClick={() => handleSelectNewCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
