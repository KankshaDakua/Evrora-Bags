import Image from 'next/image';
import { Button } from './ui/button';

const products = [
  {
    name: "The Artisan Tote",
    price: "$349",
    image: "https://placehold.co/600x600.png",
    aiHint: "luxury tote bag"
  },
  {
    name: "The City Crossbody",
    price: "$289",
    image: "https://placehold.co/600x600.png",
    aiHint: "leather crossbody bag"
  },
  {
    name: "The Voyager Clutch",
    price: "$229",
    image: "https://placehold.co/600x600.png",
    aiHint: "elegant clutch"
  },
  {
    name: "The Weekender Duffle",
    price: "$499",
    image: "https://placehold.co/600x600.png",
    aiHint: "leather duffle bag"
  }
];

const FeaturedProducts = () => {
  return (
    <section id="collections" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group relative text-center">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={product.aiHint}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 text-md text-gray-600">{product.price}</p>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-200">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
