const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Large Card */}
        <div className="lg:col-span-1 bg-[#fde9dc] rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-8">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-serif">Women’s fashion</h2>
            <p className="text-sm text-gray-600">
              Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <button className="border-b-2 border-red-500 text-sm font-semibold w-fit">
              SHOP NOW
            </button>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Women Fashion"
              className="h-80 object-contain"
            />
          </div>
        </div>

        {/* Right Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Men's Fashion */}
          <CategoryCard
            title="Men’s fashion"
            items="358 items"
            bg="bg-[#d9efe7]"
            img="https://images.unsplash.com/photo-1520975916090-3105956dac38"
          />

          {/* Kids Fashion */}
          <CategoryCard
            title="Kid’s fashion"
            items="273 items"
            bg="bg-[#e6e7f7]"
            img="https://images.unsplash.com/photo-1604917869287-3ae73c77e227"
          />

          {/* Cosmetics */}
          <CategoryCard
            title="Cosmetics"
            items="159 items"
            bg="bg-[#fde2e4]"
            img="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108"
          />

          {/* Accessories */}
          <CategoryCard
            title="Accessories"
            items="792 items"
            bg="bg-[#dbeffd]"
            img="https://images.unsplash.com/photo-1519741497674-611481863552"
          />

        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ title, items, bg, img }) => {
  return (
    <div className={`${bg} rounded-xl p-6 flex items-center justify-between`}>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{items}</p>
        <button className="border-b-2 border-red-500 text-sm font-semibold">
          SHOP NOW
        </button>
      </div>

      <img
        src={img}
        alt={title}
        className="h-32 object-contain"
      />
    </div>
  );
};

export default CategorySection;
