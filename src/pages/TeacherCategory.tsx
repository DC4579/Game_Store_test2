import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Video, Mic, MessageSquare, Star } from 'lucide-react';

const teachersByCategory = {
  mathematics: [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      specialty: 'Calculus & Linear Algebra',
      rating: 4.9,
      reviews: 120,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      price: '$50/hour',
      subjects: ['Calculus', 'Linear Algebra', 'Statistics']
    },
    {
      id: 2,
      name: 'Prof. Michael Brown',
      specialty: 'Statistics & Probability',
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      price: '$45/hour',
      subjects: ['Statistics', 'Probability', 'Discrete Math']
    }
  ],
  science: [
    {
      id: 3,
      name: 'Dr. James Chen',
      specialty: 'Physics & Quantum Mechanics',
      rating: 4.9,
      reviews: 150,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      price: '$55/hour',
      subjects: ['Physics', 'Quantum Mechanics']
    },
    {
      id: 4,
      name: 'Dr. Emily Brown',
      specialty: 'Chemistry & Biology',
      rating: 4.7,
      reviews: 88,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      price: '$48/hour',
      subjects: ['Chemistry', 'Biology', 'Biochemistry']
    }
  ]
};

const TeacherCategory = () => {
  const { subject } = useParams();
  const teachers = teachersByCategory[subject] || [];

  const categoryTitles = {
    mathematics: 'Mathematics Teachers',
    science: 'Science Teachers',
    languages: 'Language Teachers',
    'computer-science': 'Computer Science Teachers'
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">{categoryTitles[subject]}</h1>
        <div className="flex space-x-4">
          <select className="rounded-lg border-gray-300 text-gray-700">
            <option>Sort by Rating</option>
            <option>Sort by Price</option>
            <option>Sort by Experience</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex space-x-4">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">{teacher.name}</h2>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1 text-gray-800">{teacher.rating}</span>
                    <span className="ml-1 text-gray-500">({teacher.reviews})</span>
                  </div>
                </div>
                <p className="text-gray-600">{teacher.specialty}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {teacher.subjects.map((subj, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <Video className="w-5 h-5 text-gray-600" />
                  <Mic className="w-5 h-5 text-gray-600" />
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-gray-600">{teacher.price}</span>
              </div>
              <Link
                to={`/book/${teacher.id}`}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Book Session
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherCategory;