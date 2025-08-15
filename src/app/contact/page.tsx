
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ContactPage = () => {
    return (
        <div className="bg-background text-foreground">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold font-serif text-primary">Contact Us</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <div className="space-y-8">
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-serif flex items-center gap-3">
                                    <Mail className="w-6 h-6 text-primary" />
                                    Email Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">For general inquiries, support, or feedback, please email us at:</p>
                                <a href="mailto:hello@aura.com" className="text-primary font-medium hover:underline">hello@aura.com</a>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-serif flex items-center gap-3">
                                    <Phone className="w-6 h-6 text-primary" />
                                    Call Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Our customer service team is available Monday to Friday, 9am to 5pm.</p>
                                <a href="tel:+1234567890" className="text-primary font-medium hover:underline">+1 (234) 567-890</a>
                            </CardContent>
                        </Card>
                    </div>
                   
                    <div>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-serif flex items-center gap-3">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    Our Flagship Store
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="!p-0">
                                <div className="aspect-video w-full rounded-b-lg overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625692698!2d2.292292615674208!3d48.85837007928751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1622549990145!5m2!1sen!2sfr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="AURA Flagship Store Location"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-2">
                        <Card>
                           <CardHeader>
                               <CardTitle className="font-serif">Send a Message</CardTitle>
                           </CardHeader>
                           <CardContent>
                               <form className="space-y-4">
                                   <Input type="text" placeholder="Your Name" />
                                   <Input type="email" placeholder="Your Email" />
                                   <Textarea placeholder="Your Message" rows={6} />
                                   <Button type="submit" className="w-full">Send Message</Button>
                               </form>
                           </CardContent>
                       </Card>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
