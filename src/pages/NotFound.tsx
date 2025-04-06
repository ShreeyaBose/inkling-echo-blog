
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">404</h1>
          <p className="text-2xl font-medium mb-4">Page not found</p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/">Back to home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/blog">Browse articles</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
