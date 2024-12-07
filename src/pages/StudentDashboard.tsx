import React from 'react';
import { Calendar, Clock, Video, Mic, MessageSquare } from 'lucide-react';

const TeacherCard = ({ teacher }) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center space-x-4">
      <img
        src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop`}
        alt={teacher.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
        <p className="text-sm text-gray-600">{teacher.subject}</p>
      </div>
    </div>
    <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
      <Clock className="w-4 h-4" />
      <span>Available: Mon-Fri, 9AM-5PM</span>
    </div>
    <div className="mt-4 flex space-x-2">
      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Mathematics</span>
      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Physics</span>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <div className="flex space-x-2">
        <Video className="w-5 h-5 text-gray-600" />
        <Mic className="w-5 h-5 text-gray-600" />
        <MessageSquare className="w-5 h-5 text-gray-600" />
      </div>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
        Book Session
      </button>
    </div>
  </div>
);

const StudentDashboard = () => {
  const teachers = [
    { id: 1, name: 'Dr. Sarah Wilson', subject: 'Mathematics Expert' },
    { id: 2, name: 'Prof. James Chen', subject: 'Physics Specialist' },
    { id: 3, name: 'Dr. Emily Brown', subject: 'Chemistry Tutor' },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming Sessions</h2>
        <div className="mt-4 flex items-center space-x-4">
          <Calendar className="w-6 h-6 text-indigo-600" />
          <div>
            <p className="text-gray-800 font-medium">Physics with Prof. James Chen</p>
            <p className="text-sm text-gray-600">Today at 3:00 PM</p>
          </div>
          <button className="ml-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Join Now
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;