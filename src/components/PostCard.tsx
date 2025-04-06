
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../data/types';
import { formatDate } from '../utils/dateFormatter';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ 
  post, 
  variant = 'default',
  className 
}) => {
  if (variant === 'featured') {
    return (
      <div className={cn(
        "group relative flex flex-col md:flex-row overflow-hidden rounded-lg border bg-card text-card-foreground shadow",
        className
      )}>
        <div className="md:w-1/2 relative aspect-video md:aspect-auto">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between p-6 md:w-1/2">
          <div>
            <div className="flex gap-2 mb-3">
              {post.categories.map((category) => (
                <Badge key={category.id} variant="secondary">
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </Badge>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
          </div>
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <div>
              <p className="font-medium text-sm">
                <Link to={`/author/${post.author.id}`} className="hover:text-primary">
                  {post.author.name}
                </Link>
              </p>
              <p className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={cn(
        "group flex items-start gap-3 pb-4",
        className
      )}>
        <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <Link 
            to={`/blog/${post.slug}`}
            className="font-medium leading-tight hover:text-primary transition-colors line-clamp-2"
          >
            {post.title}
          </Link>
          <p className="text-xs text-muted-foreground mt-1">{formatDate(post.publishedAt)}</p>
        </div>
      </div>
    );
  }

  // Default card
  return (
    <div className={cn(
      "group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow",
      className
    )}>
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex gap-2 mb-3">
          {post.categories.map((category) => (
            <Badge key={category.id} variant="secondary">
              <Link to={`/category/${category.slug}`}>{category.name}</Link>
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center mt-auto pt-4 border-t">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="h-8 w-8 rounded-full object-cover mr-3"
          />
          <div>
            <p className="font-medium text-sm">
              <Link to={`/author/${post.author.id}`} className="hover:text-primary">
                {post.author.name}
              </Link>
            </p>
            <p className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
