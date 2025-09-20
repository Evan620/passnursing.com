import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  BookOpen,
  Stethoscope,
  Heart,
  Brain,
  Pill
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'study-tips', name: 'Study Tips', icon: BookOpen },
    { id: 'nursing-care', name: 'Nursing Care', icon: Stethoscope },
    { id: 'mental-health', name: 'Mental Health', icon: Heart },
    { id: 'pharmacology', name: 'Pharmacology', icon: Pill },
    { id: 'anatomy', name: 'Anatomy & Physiology', icon: Brain }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Study Tips for Nursing Students',
      excerpt: 'Discover proven strategies to maximize your study time and improve retention for nursing exams.',
      content: 'Nursing school can be overwhelming, but with the right study techniques, you can excel in your coursework...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'study-tips',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      tags: ['Study Tips', 'Exam Preparation', 'Time Management'],
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Fluid and Electrolyte Balance',
      excerpt: 'A comprehensive guide to fluid and electrolyte imbalances in nursing practice.',
      content: 'Fluid and electrolyte balance is crucial for maintaining homeostasis in the human body...',
      author: 'Prof. Michael Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'nursing-care',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      tags: ['Fluid Balance', 'Electrolytes', 'Nursing Care'],
      featured: false
    },
    {
      id: 3,
      title: 'Mental Health Nursing: Building Therapeutic Relationships',
      excerpt: 'Learn how to establish meaningful connections with patients in mental health settings.',
      content: 'Therapeutic relationships are the foundation of effective mental health nursing...',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'mental-health',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      tags: ['Mental Health', 'Therapeutic Communication', 'Patient Care'],
      featured: false
    },
    {
      id: 4,
      title: 'Pharmacology Made Simple: Drug Classifications',
      excerpt: 'Master the basics of drug classifications and their mechanisms of action.',
      content: 'Understanding drug classifications is essential for safe medication administration...',
      author: 'Prof. David Thompson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'pharmacology',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop',
      tags: ['Pharmacology', 'Drug Classifications', 'Medication Safety'],
      featured: false
    },
    {
      id: 5,
      title: 'Anatomy and Physiology: Cardiovascular System',
      excerpt: 'A detailed overview of the heart and circulatory system for nursing students.',
      content: 'The cardiovascular system is responsible for transporting nutrients and oxygen...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'anatomy',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop',
      tags: ['Anatomy', 'Physiology', 'Cardiovascular System'],
      featured: false
    },
    {
      id: 6,
      title: 'Time Management for Nursing Students',
      excerpt: 'Practical strategies to balance studies, clinicals, and personal life.',
      content: 'Effective time management is crucial for nursing students juggling multiple responsibilities...',
      author: 'Prof. Michael Chen',
      date: '2024-01-03',
      readTime: '4 min read',
      category: 'study-tips',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
      tags: ['Time Management', 'Study Tips', 'Work-Life Balance'],
      featured: false
    },
    {
      id: 7,
      title: 'Pediatric Nursing: Growth and Development',
      excerpt: 'Understanding developmental milestones and age-appropriate care.',
      content: 'Pediatric nursing requires knowledge of normal growth and development patterns...',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'nursing-care',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop',
      tags: ['Pediatrics', 'Growth & Development', 'Child Care'],
      featured: false
    },
    {
      id: 8,
      title: 'Medication Administration: Safety First',
      excerpt: 'Essential safety protocols for medication administration in clinical practice.',
      content: 'Medication errors can have serious consequences, making safety protocols essential...',
      author: 'Prof. David Thompson',
      date: '2023-12-28',
      readTime: '5 min read',
      category: 'pharmacology',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=250&fit=crop',
      tags: ['Medication Safety', 'Clinical Practice', 'Patient Safety'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Nursing Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Expert insights, study tips, and nursing knowledge to help you succeed 
              in your academic and professional journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Showing {filteredPosts.length} of {blogPosts.length} posts
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && (
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading font-bold text-2xl text-gray-800 mb-8 text-center">
                Featured Post
              </h2>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-2xl lg:text-3xl text-gray-800 mb-4">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{featuredPost.author}</span>
                      </div>
                      <button className="btn-primary flex items-center space-x-2">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading font-bold text-2xl text-gray-800 mb-8 text-center">
              Latest Posts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group cursor-pointer hover:shadow-2xl"
                >
                  <div className="relative mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <CategoryIcon className="h-3 w-3" />
                        <span>{getCategoryName(post.category)}</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 text-sm">{post.author}</span>
                      </div>
                      <button className="text-primary hover:text-secondary font-medium text-sm transition-colors duration-300 flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* No Results */}
          {regularPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-xl text-gray-600 mb-2">
                No posts found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest nursing tips, study guides, 
              and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl text-gray-800 focus:ring-2 focus:ring-accent focus:outline-none"
              />
              <button className="btn-accent">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
