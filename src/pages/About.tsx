
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import { Button } from '../components/ui/button';
import { authors } from '../data/mockData';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About InkWell</h1>
            <p className="text-xl text-muted-foreground mb-8">
              A modern platform for sharing stories, ideas, and knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              At InkWell, we believe in the power of written words to inspire, inform, and transform. Our mission is to create a space where writers from diverse backgrounds can share their perspectives and readers can discover content that resonates with them.
            </p>
            <p className="text-lg mb-6">
              Founded in 2023, we've grown from a small personal blog to a community of passionate writers and engaged readers. We cover a wide range of topics from technology and lifestyle to travel, food, and health — all with thoughtful analysis and personal insight.
            </p>
            <p className="text-lg">
              Whether you're here to learn something new, find inspiration, or simply enjoy quality writing, we're glad you've found us.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="blog-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authors.map((author) => (
              <div key={author.id} className="bg-card rounded-lg border p-6 text-center">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{author.name}</h3>
                <p className="text-muted-foreground mb-4">{author.bio}</p>
                <Link 
                  to={`/author/${author.id}`}
                  className="text-primary hover:underline"
                >
                  View articles
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Over Quantity</h3>
                <p>
                  We prioritize well-researched, thoughtfully written content over publishing frequency. Every article is carefully crafted to provide genuine value to our readers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Diverse Perspectives</h3>
                <p>
                  We actively seek writers with different backgrounds, experiences, and viewpoints to ensure our content represents a wide range of perspectives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Intellectual Honesty</h3>
                <p>
                  We're committed to factual accuracy and nuanced analysis. When opinions are shared, they're presented as such, with clear reasoning behind them.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Reader-Focused</h3>
                <p>
                  Our readers' interests and needs guide our editorial decisions. We're constantly listening to feedback and adapting to better serve our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions, feedback, or interested in contributing? We'd love to hear from you!
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default About;
