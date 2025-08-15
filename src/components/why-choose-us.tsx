import { Leaf, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Sustainable Materials',
    description: 'We prioritize ethically sourced, eco-friendly materials without compromising on luxury.',
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Timeless Designs',
    description: 'Our bags are crafted to transcend seasons, blending classic aesthetics with modern functionality.',
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Global Shipping',
    description: 'We deliver your new favorite accessory to your doorstep, wherever you are in the world.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Lumino?</h2>
            <p className="mt-4 text-lg text-gray-600">The Art of Difference</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
