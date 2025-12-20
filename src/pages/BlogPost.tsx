import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';
import { ArrowLeft, Clock, User, Tag, Calendar } from 'lucide-react';

const BlogPost = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const post = getBlogPostBySlug(articleSlug || '');

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground">Article Not Found</h1>
          <Link to="/blog" className="text-secondary hover:underline mt-4 inline-block">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-ocean">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70 mb-4">
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-accent-foreground font-bold">
                  {post.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none text-foreground prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-secondary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
              More <span className="text-gradient-ocean">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group p-6 rounded-xl bg-card hover:shadow-ocean transition-all"
                >
                  <span className="text-secondary text-sm font-medium">{relatedPost.category}</span>
                  <h3 className="text-lg font-heading font-semibold text-foreground mt-2 group-hover:text-secondary transition-colors">
                    {relatedPost.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Ready to Plan Your Adventure?
          </h2>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPost;
