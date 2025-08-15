import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Scissors, Gem, Users, Target } from "lucide-react";
import Image from 'next/image';
import Header from "@/components/header";
import Footer from "@/components/footer";


const AboutPage = () => {
    return (
        <div className="bg-background text-foreground">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold font-serif text-primary">About AURA</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We believe that a handbag is more than just an accessory—it's a companion that carries your story.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                         <Image
                            src="https://placehold.co/800x1000.png"
                            alt="Craftsman working on a handbag"
                            width={800}
                            height={1000}
                            className="w-full h-full object-cover"
                            data-ai-hint="craftsman leather"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-serif text-primary">Our Philosophy</h2>
                        <p className="text-muted-foreground">
                            AURA was born from a passion for timeless design and impeccable craftsmanship. We set out to create handbags that are not only beautiful but also functional and enduring. Each piece in our collection is a testament to our commitment to quality, sustainability, and the art of modern elegance.
                        </p>
                        <p className="text-muted-foreground">
                            We source the finest eco-friendly leathers and materials, and our artisans pour their heart and soul into every stitch. Our designs are inspired by the confident, modern individual who values both style and substance.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-16">
                     <h2 className="text-3xl font-bold font-serif text-primary">Our Values</h2>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <Card>
                        <CardHeader>
                            <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-serif pt-4">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To create beautiful, high-quality handbags that empower and inspire, while promoting sustainable and ethical practices in the fashion industry.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-serif pt-4">Our Community</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground">We are more than just a brand; we are a community of individuals who appreciate design, quality, and conscious living. Join us on our journey.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="mx-auto bg-secondary rounded-full p-4 w-fit">
                                <Leaf className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-serif pt-4">Our Promise</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-muted-foreground">We stand behind every handbag we create. From the materials we select to the final stitch, we are committed to delivering a product you will love for years to come.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default AboutPage;
