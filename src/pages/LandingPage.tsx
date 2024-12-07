import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Video, MessageSquare, Calendar, Star, Users } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Video,
      title: 'Live Video Sessions',
      description: 'Connect with teachers through high-quality video calls'
    },
    {
      icon: MessageSquare,
      title: 'Instant Messaging',
      description: 'Get quick answers through text chat'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Book sessions at your convenience'
    }
  ];

  const categories = [
    {
      title: 'Mathematics',
      icon: '📐',
      description: 'Algebra, Calculus, Statistics',
      color: 'bg-blue-500',
      path: '/category/mathematics'
    },
    {
      title: 'Science',
      icon: '🔬',
      description: 'Physics, Chemistry, Biology',
      color: 'bg-green-500',
      path: '/category/science'
    },
    {
      title: 'Languages',
      icon: '🌎',
      description: 'English, Spanish, French',
      color: 'bg-purple-500',
      path: '/category/languages'
    },
    {
      title: 'Computer Science',
      icon: '💻',
      description: 'Programming, Web Development',
      color: 'bg-yellow-500',
      path: '/category/computer-science'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 text-white rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800"></div>
        <div className="relative max-w-7xl mx-auto px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight">
                Learn from Expert Teachers Anytime, Anywhere
              </h1>
              <p className="text-xl text-indigo-100">
                Connect with qualified teachers for one-on-one sessions in real-time through video calls, voice chat, or messaging.
              </p>
              <Link
                to="/dashboard"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors"
              >
                Start Learning Now
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                alt="Online Learning"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose EduConnect?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Subject</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">100K+</div>
              <div className="text-gray-600">Sessions Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;