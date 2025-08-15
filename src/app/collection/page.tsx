import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductShowcase from "@/components/product-showcase";

const CollectionPage = () => {
    return (
        <div className="bg-background text-foreground">
            <Header />
            <main className="py-24 sm:py-32">
                <div className="text-center mb-16 px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold font-serif text-primary">Our Collection</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover our curated selection of handcrafted bags, designed for modern living.
                    </p>
                </div>
                <ProductShowcase />
            </main>
            <Footer />
        </div>
    );
};

export default CollectionPage;
