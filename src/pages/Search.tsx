
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import SearchBox from '../components/SearchBox';
import CategoryList from '../components/CategoryList';
import Newsletter from '../components/Newsletter';
import { Post } from '../data/types';
import { posts, categories } from '../data/mockData';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Post[]>([]);

  useEffect(() => {
    if (query) {
      const normalizedQuery = query.toLowerCase();
      const results = posts.filter(post => 
        post.title.toLowerCase().includes(normalizedQuery) || 
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.content.toLowerCase().includes(normalizedQuery)
      );
      
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <Layout>
      <div className="py-12">
        <div className="blog-container">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Search Results</h1>
            <p className="text-muted-foreground mb-6">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found for "{query}"
            </p>
            <SearchBox />
          </header>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {searchResults.map(post => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No results found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse all articles
                  </p>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Categories */}
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Categories</h3>
                <CategoryList categories={categories} className="flex-col items-start" />
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

export default Search;
