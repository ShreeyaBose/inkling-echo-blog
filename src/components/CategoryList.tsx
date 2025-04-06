
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../data/types';
import { cn } from '@/lib/utils';

interface CategoryListProps {
  categories: Category[];
  className?: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.slug}`}
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
