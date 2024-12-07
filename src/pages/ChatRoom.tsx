import React, { useState, useRef, useEffect } from 'react';
import { Video, Mic, MicOff, VideoOff, Phone, MessageSquare, Send } from 'lucide-react';

const ChatRoom = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'teacher', text: 'Hello! Ready to start our session?' },
    { id: 2, sender: 'student', text: 'Yes, I have some questions about calculus.' },
  ]);

  const videoRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'student', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex-1 flex">
        {/* Main video area */}
        <div className="flex-1 bg-gray-900 relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop"
          />
          
          {/* Controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-3 rounded-full ${
                  isMuted ? 'bg-red-500' : 'bg-gray-700'
                } hover:bg-opacity-80`}
              >
                {isMuted ? <MicOff className="w-6 h-6 text-white" /> : <Mic className="w-6 h-6 text-white" />}
              </button>
              
              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`p-3 rounded-full ${
                  isVideoOff ? 'bg-red-500' : 'bg-gray-700'
                } hover:bg-opacity-80`}
              >
                {isVideoOff ? <VideoOff className="w-6 h-6 text-white" /> : <Video className="w-6 h-6 text-white" />}
              </button>
              
              <button className="p-3 rounded-full bg-red-500 hover:bg-red-600">
                <Phone className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
          
          {/* Self view */}
          <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=150&fit=crop"
            />
          </div>
        </div>

        {/* Chat sidebar */}
        <div className="w-96 bg-white border-l flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Chat
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'student'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={sendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;