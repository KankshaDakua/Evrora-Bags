import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="currentColor"
        {...props}
    >
        <path
            d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20c0 11.046-8.954 20-20 20-3.455 0-6.72-.868-9.56-2.394L4 44l2.533-10.214A19.932 19.932 0 0 1 4 24Z"
        />
        <path
            fill="#FFF"
            d="M17.216 14.984c-.404-.9-.83-.92-1.216-.936-.316-.014-.68-.014-1.045-.014-.365 0-.956.137-1.457.68-.5.544-1.92 1.874-1.92 4.57s1.964 5.302 2.238 5.66c.273.356 3.802 6.07 9.32 8.262 4.611 1.818 5.55 1.456 6.548 1.365.998-.09 3.222-1.316 3.675-2.587.453-1.272.453-2.363.317-2.587-.137-.225-.5-.36-1.045-.63-.546-.27-3.222-1.59-3.722-1.77-.5-.18-.865-.27-1.23.27-.365.54-1.41 1.77-1.728 2.135-.317.364-.635.41-1.18.14-.546-.27-2.305-.85-4.387-2.708-1.62-1.443-2.71-3.226-3.028-3.77-.317-.544-.034-.838.237-1.107.243-.243.546-.63.82-.945.272-.316.363-.544.545-.91.182-.364.091-.68-.045-.95-.137-.27-1.08-2.692-1.523-3.662Z"
        />
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
