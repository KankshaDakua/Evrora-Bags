import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <section id="contact" className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Stay in the Loop</h2>
        <p className="mt-4 mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
          Subscribe & get 10% off your first order. Be the first to know about new collections and exclusive offers.
        </p>
        <form className="max-w-md mx-auto flex gap-x-2">
          <Input type="email" placeholder="Enter your email" className="bg-white" />
          <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
