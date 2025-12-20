import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurStory from "./pages/about/OurStory";
import MeetTheTeam from "./pages/about/MeetTheTeam";
import DestinationPage from "./pages/destinations/DestinationPage";
import NationalPark from "./pages/NationalPark";
import Itineraries from "./pages/Itineraries";
import TourDetails from "./pages/TourDetails";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Section */}
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/meet-the-team" element={<MeetTheTeam />} />
          
          {/* Destinations */}
          <Route path="/destinations/:slug" element={<DestinationPage />} />
          
          {/* National Parks */}
          <Route path="/national-park/:parkSlug" element={<NationalPark />} />
          
          {/* Itineraries & Tours */}
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/tour/:tourSlug" element={<TourDetails />} />
          
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleSlug" element={<BlogPost />} />
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
