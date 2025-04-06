
import React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import SearchBox from '../components/SearchBox';
import CategoryList from '../components/CategoryList';
import Newsletter from '../components/Newsletter';
import { posts, categories } from '../data/mockData';

const BlogList = () => {
  // Sort all posts by date (newest first)
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <Layout>
      <div className="py-12">
        <div className="blog-container">
          <h1 className="text-4xl font-bold mb-6">All Articles</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedPosts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Search */}
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Search</h3>
                <SearchBox />
              </div>
              
              {/* Categories */}
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Categories</h3>
                <CategoryList categories={categories} className="flex-col items-start" />
              </div>
              
              {/* Recent Posts */}
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {sortedPosts.slice(0, 5).map(post => (
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

export default BlogList;
