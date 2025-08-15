import Image from 'next/image';

const BrandStory = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-full min-h-[300px]">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Craftsman working on a handbag"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="craftsman leather"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              LuminoBag was born from a vision to merge timeless elegance with the rhythms of modern life. We believe a handbag is more than an accessory—it's a companion that carries your story.
            </p>
            <p className="text-gray-600">
              Each piece is meticulously handcrafted by skilled artisans, using sustainably sourced materials that honor both quality and our planet. From the initial sketch to the final stitch, our bags are a testament to a passion for craftsmanship and a commitment to conscious luxury.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
