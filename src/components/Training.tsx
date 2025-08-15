import React from 'react';
import { Train, Clock, MapPin, Award } from 'lucide-react';

const Training: React.FC = () => {
  const trainingDetails = [
    {
      icon: <Train className="w-6 h-6" />,
      title: 'Department',
      value: 'Signal & Telecommunication (S&T)',
      description: 'Specialized training in railway signaling systems'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Duration',
      value: '4 Weeks',
      description: 'Intensive hands-on training program'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Organization',
      value: 'Indian Railways',
      description: 'Government of India enterprise'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Focus Area',
      value: 'Railway Infrastructure',
      description: 'Complete system understanding'
    }
  ];

  const exposureAreas = [
    {
      title: 'Electronic Interlocking (EI)',
      description: 'Computer-based interlocking systems for safe train operations',
      color: 'bg-blue-500'
    },
    {
      title: 'Route Relay Interlocking (RRI)',
      description: 'Traditional relay-based route setting and control systems',
      color: 'bg-green-500'
    },
    {
      title: 'Level Crossing (LC) Gate Operations',
      description: 'Automated and manual level crossing gate control mechanisms',
      color: 'bg-purple-500'
    },
    {
      title: 'Optical Fiber Communication (OFC)',
      description: 'High-speed data transmission systems for railway communications',
      color: 'bg-orange-500'
    },
    {
      title: 'Unreserved Ticketing System (UTS)',
      description: 'Digital ticketing infrastructure and passenger services',
      color: 'bg-teal-500'
    },
    {
      title: 'Passenger Reservation System (PRS)',
      description: 'Advanced booking and reservation management systems',
      color: 'bg-pink-500'
    },
    {
      title: 'Relay Rooms & Control Systems',
      description: 'Central control infrastructure for railway operations',
      color: 'bg-indigo-500'
    },
    {
      title: 'Cable Laying & Maintenance',
      description: 'Underground and overhead cable installation techniques',
      color: 'bg-red-500'
    },
    {
      title: 'Signaling Systems',
      description: 'Comprehensive railway signaling and safety protocols',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <section id="training" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Industrial <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive hands-on experience in railway infrastructure and signaling systems through intensive industrial training.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Training Overview */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <Train className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Indian Railways Training Program</h3>
                <p className="text-blue-100">Signal & Telecommunication Department</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {trainingDetails.map((detail, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {detail.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{detail.title}</h4>
                  <p className="text-lg font-bold mb-2">{detail.value}</p>
                  <p className="text-sm text-blue-100">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exposure Areas */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Areas of Exposure & Learning
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exposureAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-4 h-4 ${area.color} rounded-full flex-shrink-0 mt-1`}></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {area.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Learning Outcomes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Train className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">System Integration</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Understanding how complex railway systems work together seamlessly</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Safety Protocols</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Critical importance of safety in railway operations and maintenance</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Real-world Application</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Practical implementation of engineering concepts in live systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;