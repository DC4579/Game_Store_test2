import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Video, Mic, MessageSquare, CreditCard } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [communicationType, setCommunicationType] = useState('');
  
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const communicationTypes = [
    { id: 'video', icon: Video, label: 'Video Call', price: '$50' },
    { id: 'voice', icon: Mic, label: 'Voice Call', price: '$30' },
    { id: 'chat', icon: MessageSquare, label: 'Text Chat', price: '$20' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
            alt="Teacher"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Book a Session with Dr. Sarah Wilson</h1>
            <p className="text-gray-600">Mathematics Expert • 4.9 ⭐ (120 reviews)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              <CalendarIcon className="inline-block w-5 h-5 mr-2" />
              Select Date
            </h2>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="rounded-lg border shadow-sm"
              minDate={new Date()}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              <Clock className="inline-block w-5 h-5 mr-2" />
              Select Time
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border ${
                    selectedTime === time
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'hover:border-indigo-600'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Communication Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {communicationTypes.map(({ id, icon: Icon, label, price }) => (
              <button
                key={id}
                onClick={() => setCommunicationType(id)}
                className={`p-4 rounded-lg border flex flex-col items-center space-y-2 ${
                  communicationType === id
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'hover:border-indigo-600'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span>{label}</span>
                <span className="font-semibold">{price}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Amount</h3>
              <p className="text-gray-600">Including all taxes and fees</p>
            </div>
            <span className="text-2xl font-bold text-indigo-600">$50.00</span>
          </div>
          
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors">
            <CreditCard className="w-5 h-5" />
            <span>Proceed to Payment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;