import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Portfolio = () => {
  const navigate = useNavigate();
  
  // Example portfolio items - replace with your actual portfolio content
  const portfolioItems = [
    {
      id: 1,
      title: 'Nursing Case Study',
      description: 'Comprehensive analysis and solution for a complex patient case',
      image: '/images/portfolio/nursing-case-study.jpg',
      category: 'Case Studies'
    },
    {
      id: 2,
      title: 'Research Paper',
      description: 'In-depth research on modern nursing practices',
      image: '/images/portfolio/research-paper.jpg',
      category: 'Research Papers'
    },
    {
      id: 3,
      title: 'Clinical Practice',
      description: 'Hands-on clinical experience documentation',
      image: '/images/portfolio/clinical-practice.jpg',
      category: 'Clinical Work'
    },
    {
      id: 4,
      title: 'Thesis Work',
      description: 'Advanced nursing theory and practice',
      image: '/images/portfolio/thesis.jpg',
      category: 'Academic Work'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center text-white hover:text-primary-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Portfolio
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-primary-100">
            Explore our collection of successful projects and academic work in the nursing field.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
                <img
                  src={process.env.PUBLIC_URL + item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Portfolio+Image';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                  {item.category}
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <button className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-800 font-medium">
                  View Details
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your project?</span>
            <span className="block text-primary-200">Contact us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-600 hover:bg-primary-50"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
