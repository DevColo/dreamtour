import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-lg">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[180px] md:text-[220px] font-heading font-bold text-muted/50 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-20 h-20 text-secondary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Oops! It seems like you've ventured off the beaten path. 
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button variant="gold" size="xl" className="shadow-gold">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="xl" 
              onClick={() => window.history.back()}
              className="border-border hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default NotFound;
