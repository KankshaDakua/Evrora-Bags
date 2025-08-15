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
        <path d="M19.11 4.9C17.22 3 14.68 1.9 12 1.9C6.42 1.9 1.92 6.42 1.92 12c0 1.76.45 3.45 1.28 4.95L1.92 22.08l5.12-1.28c1.5.83 3.19 1.28 4.96 1.28H12c5.58 0 10.08-4.5 10.08-10.08c0-2.68-1.08-5.22-2.97-7.1zM12 20.12c-1.6 0-3.13-.48-4.43-1.35l-.32-.19l-3.3 1.03l1.03-3.21l-.21-.34c-.95-1.55-1.48-3.3-1.48-5.12c0-4.48 3.65-8.12 8.12-8.12c2.18 0 4.2.85 5.75 2.4s2.4 3.57 2.4 5.75c-.01 4.48-3.66 8.12-8.13 8.12zm4.4-5.93c-.26-.13-1.55-.77-1.8-.86c-.24-.09-.42-.13-.59.13c-.17.26-.68.86-.83 1.03c-.15.17-.3.19-.55.06c-.25-.13-1.06-.39-2.02-1.25c-.75-.67-1.25-1.5-1.4-1.75c-.15-.25-.02-.38.12-.51c.12-.11.26-.29.39-.43c.13-.14.17-.24.26-.41c.09-.17.04-.31-.02-.44c-.06-.13-.59-1.42-.81-1.95c-.22-.53-.43-.46-.59-.46c-.15 0-.33-.01-.5-.01c-.18 0-.46.06-.7.34c-.24.28-.93.9-1.12 2.16c-.19 1.26.12 2.5.28 2.67c.16.17 1.76 2.73 4.25 3.76c.59.24 1.05.38 1.41.48c.5.15.93.13 1.28.08c.39-.06 1.55-.63 1.77-1.24c.22-.61.22-1.13.15-1.24c-.07-.11-.26-.18-.52-.31z" />
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
