import React from 'react';
import { Calendar, Clock, Users, DollarSign } from 'lucide-react';

const TeacherDashboard = () => {
  const upcomingSessions = [
    {
      id: 1,
      student: 'Alex Johnson',
      subject: 'Mathematics',
      time: '2:00 PM',
      type: 'Video Call',
    },
    {
      id: 2,
      student: 'Emma Davis',
      subject: 'Physics',
      time: '3:30 PM',
      type: 'Voice Call',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Sessions</p>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
            <Calendar className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Hours Taught</p>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
            <Clock className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">156</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Earnings</p>
              <p className="text-2xl font-bold text-gray-800">$1,240</p>
            </div>
            <DollarSign className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Sessions</h2>
        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop`}
                  alt={session.student}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-800">{session.student}</p>
                  <p className="text-sm text-gray-600">{session.subject}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">{session.time}</p>
                <p className="text-sm text-gray-600">{session.type}</p>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Start Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;