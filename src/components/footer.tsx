import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.84 3.12 1.32 4.79 1.32h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.5 14.3c-.28-.14-1.65-.82-1.9-.91-.26-.09-.45-.14-.64.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.59.07-.27-.14-1.14-.42-2.17-1.34-.81-.72-1.35-1.61-1.57-1.89-.22-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.24-.56-.48-.48-.64-.48-.16 0-.35-.02-.52-.02-.17 0-.45.07-.68.34-.24.28-.92.9-1.12 2.16-.2 1.26.13 2.5.3 2.67.16.18 1.88 2.95 4.56 4.03.65.26 1.16.42 1.57.53.51.13.97.11 1.34.07.42-.05 1.65-.68 1.88-1.32.24-.63.24-1.17.16-1.32-.07-.14-.26-.23-.53-.37z" />
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
