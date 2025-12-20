import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

const Blog = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Our Blog</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Travel Stories & Tips
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Insights, guides, and inspiration from our travel experts to help you plan your perfect adventure.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-muted rounded-2xl overflow-hidden hover:shadow-ocean transition-all duration-300"
              >
                <div className="h-48 bg-gradient-ocean flex items-center justify-center">
                  <span className="text-primary-foreground/30 text-6xl font-heading font-bold">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-secondary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
