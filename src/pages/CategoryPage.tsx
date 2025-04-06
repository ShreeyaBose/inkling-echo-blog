import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import SearchBox from '../components/SearchBox';
import CategoryList from '../components/CategoryList';
import Newsletter from '../components/Newsletter';
import { posts, categories } from '../data/mockData';
import NotFound from './NotFound';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    return <NotFound />;
  }
  
  // Get posts in this category
  const categoryPosts = posts.filter(post => 
    post.categories.some(c => c.id === category.id)
  );
  
  // Sort by date (newest first)
  const sortedPosts = [...categoryPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  // Get other categories
  const otherCategories = categories.filter(c => c.id !== category.id);

  return (
    <Layout>
      <div className="py-12">
        <div className="blog-container">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse all articles related to {category.name}
            </p>
          </header>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              {categoryPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sortedPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No posts found</h3>
                  <p className="text-muted-foreground mb-4">
                    There are currently no posts in this category.
                  </p>
                  <Link 
                    to="/blog" 
                    className="text-primary hover:underline"
                  >
                    Browse all articles
                  </Link>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Search */}
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Search</h3>
                <SearchBox />
              </div>
              
              {/* Other Categories */}
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Other Categories</h3>
                <CategoryList categories={otherCategories} className="flex-col items-start" />
              </div>
              
              {/* Recent Posts */}
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {posts
                    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                    .slice(0, 5)
                    .map(post => (
                      <PostCard key={post.id} post={post} variant="compact" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Newsletter />
    </Layout>
  );
};

export default CategoryPage;
