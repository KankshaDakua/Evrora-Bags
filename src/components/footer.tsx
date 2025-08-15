import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        fill="currentColor"
        {...props}
    >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 5.601 0 10.441 3.886 11.755 9.254-1.385-5.328-6.182-9.253-11.762-9.253-6.555 0-11.892 5.338-11.892 11.893 0 2.096.547 4.142 1.588 5.945L.057 24zM12.012 5.996c-3.315 0-6.012 2.697-6.012 6.012s2.697 6.012 6.012 6.012c3.315 0 6.012-2.697 6.012-6.012s-2.697-6.012-6.012-6.012zm0 10.82c-2.659 0-4.812-2.153-4.812-4.812s2.153-4.812 4.812-4.812 4.812 2.153 4.812 4.812-2.153 4.812-4.812 4.812z"/>
    </svg>
);


const Footer = () => {
  const socialLinks = [
    { icon: WhatsAppIcon, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Mail, href: 'mailto:hello@aura.com' },
  ];

  return (
    <footer id="contact" className="bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold font-serif text-primary">
              AURA
            </Link>
            <p className="text-xs text-muted-foreground mt-1">&copy; {new Date().getFullYear()} AURA. All Rights Reserved.</p>
          </div>
          <nav className="flex gap-x-6 mb-4 md:mb-0 text-sm">
            <Link href="/" className="text-foreground hover:text-primary/80 transition-colors">Home</Link>
            <Link href="/collection" className="text-foreground hover:text-primary/80 transition-colors">Collection</Link>
            <Link href="/about" className="text-foreground hover:text-primary/80 transition-colors">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary/80 transition-colors">Contact</Link>
          </nav>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors">
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
