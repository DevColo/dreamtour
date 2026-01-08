import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- changed
import { ScrollToTop } from "@/components/ScrollToTop";
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
import Booking from "./pages/Booking";
import CategoryPage from "./pages/services/CategoryPage";
import { wildlifeSafarisData } from "./data/wildlifeSafaris";
import { primateTrackingData } from "./data/primateTracking";
import { culturalToursData } from "./data/culturalTours";
import { multiDayToursData } from "./data/multiDayTours";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Changed BrowserRouter to HashRouter */}
      <HashRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Section */}
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/meet-the-team" element={<MeetTheTeam />} />
          
          {/* Destinations */}
          <Route path="/destinations/:slug" element={<DestinationPage />} />
          
          {/* Services */}
          <Route path="/services/wildlife-safaris" element={<CategoryPage data={wildlifeSafarisData} />} />
          <Route path="/services/primate-tracking" element={<CategoryPage data={primateTrackingData} />} />
          <Route path="/services/cultural-tours" element={<CategoryPage data={culturalToursData} />} />
          <Route path="/services/multi-day-tours" element={<CategoryPage data={multiDayToursData} />} />
          
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
          <Route path="/booking" element={<Booking />} />
          
          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
