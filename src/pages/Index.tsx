
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import CategoryList from '../components/CategoryList';
import Newsletter from '../components/Newsletter';
import { Button } from '../components/ui/button';
import { posts, categories } from '../data/mockData';

const Index = () => {
  // Get featured posts
  const featuredPosts = posts.filter(post => post.featured);
  
  // Get 6 recent posts (excluding featured)
  const recentPosts = posts
    .filter(post => !post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blog-light-gray to-white">
        <div className="blog-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Welcome to InkWell Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover stories, ideas, and expertise from writers across various topics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/blog">Start Reading</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white">
        <div className="blog-container">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 gap-8">
            {featuredPosts.map(post => (
              <PostCard key={post.id} post={post} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 bg-muted/30">
        <div className="blog-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Articles</h2>
            <Link 
              to="/blog" 
              className="text-primary font-medium hover:underline"
            >
              View all articles
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="blog-container">
          <h2 className="text-3xl font-bold mb-8">Explore by Category</h2>
          <CategoryList categories={categories} className="justify-center" />
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Index;
