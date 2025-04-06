
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { toast } from 'sonner';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Newsletter from '../components/Newsletter';
import { Badge } from '../components/ui/badge';
import { posts } from '../data/mockData';
import { formatDate } from '../utils/dateFormatter';
import NotFound from './NotFound';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = post 
    ? posts.filter(p => 
        p.id !== post.id && 
        p.categories.some(c => 
          post.categories.some(pc => pc.id === c.id)
        )
      ).slice(0, 3)
    : [];

  useEffect(() => {
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <Layout>
      {/* Post Header */}
      <header className="pt-12 pb-8 md:pt-20 md:pb-12 bg-muted/30">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-4">
              {post.categories.map((category) => (
                <Badge key={category.id} variant="secondary">
                  <Link to={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="blog-container mb-10 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Author Info */}
      <div className="blog-container mb-10">
        <div className="max-w-3xl mx-auto flex items-center pb-8 border-b">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="h-12 w-12 rounded-full mr-4 object-cover"
          />
          <div>
            <Link 
              to={`/author/${post.author.id}`}
              className="font-semibold hover:text-primary"
            >
              {post.author.name}
            </Link>
            <p className="text-sm text-muted-foreground">{post.author.bio}</p>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="blog-container">
        <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-3xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
        </article>
      </div>
      
      {/* Share and Tags */}
      <div className="blog-container mt-10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center py-6 border-t border-b gap-4">
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.slug}`}
                className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <button 
            onClick={handleShare}
            className="px-4 py-2 border rounded-md hover:bg-secondary transition-colors"
          >
            Share this post
          </button>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="blog-container my-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <PostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      )}

      <Newsletter />
    </Layout>
  );
};

// Simple markdown to HTML conversion
function markdownToHtml(markdown: string): string {
  let html = markdown;
  
  // Convert headers
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  
  // Convert paragraphs
  html = html.replace(/^\s*(\n)?(.+)/gim, function(match) {
    if (match.match(/^<\/?(h1|h2|h3|ul|ol|li|blockquote|p)/)) return match;
    return '<p>' + match + '</p>';
  });
  
  // Convert line breaks
  html = html.replace(/\n/gim, '<br>');
  
  return html;
}

export default BlogPost;
