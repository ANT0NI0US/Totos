export default function ToggleCategories({
  handleSelectNewCategory,
  selectedCategory,
  categories,
}) {
  return (
    <div className="w-fit rounded-md bg-secondary p-2 text-light">
      <div className="flexCenter flex-wrap gap-4">
        {categories?.map((category) => (
          <button
            key={category}
            className={`rounded-md px-4 py-2 uppercase transition-all duration-200 ${
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
