import React from 'react';
import { Mic, Zap, Music, Trophy, Camera, Heart } from 'lucide-react';

const Hobbies: React.FC = () => {
  const hobbiesCategories = [
    {
      title: 'Creative Arts',
      icon: <Music className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-600',
      hobbies: [
        { name: 'Playing Tabla', description: 'Traditional Indian percussion instrument' },
        { name: 'Music Production', description: 'Creating and mixing original music' },
        { name: 'Photography', description: 'Capturing moments and landscapes' }
      ]
    },
    {
      title: 'Technical & Innovation',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-600',
      hobbies: [
        { name: 'Robotics & Electronics', description: 'Building and programming robots' },
        { name: 'Public Speaking', description: 'Presentations and debates' }
      ]
    },
    {
      title: 'Sports & Recreation',
      icon: <Trophy className="w-6 h-6" />,
      gradient: 'from-green-500 to-teal-600',
      hobbies: [
        { name: 'Cricket', description: 'Team strategy and batting skills' },
        { name: 'Football', description: 'Coordination and teamwork' },
        { name: 'Table Tennis', description: 'Quick reflexes and precision' },
        { name: 'Carrom', description: 'Strategic board game' },
        { name: 'Volleyball', description: 'Team coordination and jumping' },
        { name: 'Badminton', description: 'Agility and court coverage' }
      ]
    },
    {
      title: 'Community & Service',
      icon: <Heart className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-600',
      hobbies: [
        { name: 'Volunteering', description: 'Community service and social causes' }
      ]
    }
  ];

  const personalInterests = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Public Speaking',
      description: 'Passionate about effective communication and engaging audiences through presentations and debates.',
      color: 'blue'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Robotics & Electronics',
      description: 'Fascinated by automation and electronic systems, building innovative solutions and exploring new technologies.',
      color: 'purple'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography',
      description: 'Capturing the beauty of life through the lens, from landscapes to candid moments.',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 text-white',
      purple: 'bg-purple-500 text-white',
      green: 'bg-green-500 text-white',
      orange: 'bg-orange-500 text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hobbies & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Interests</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Beyond academics and technology, I'm passionate about creative expression, sports, and community engagement.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Interests */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {personalInterests.map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 ${getColorClasses(interest.color)} rounded-2xl flex items-center justify-center mb-6`}>
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>

          {/* Hobbies Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {hobbiesCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.hobbies.map((hobby, hobbyIndex) => (
                    <div
                      key={hobbyIndex}
                      className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full flex-shrink-0 mt-2`}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {hobby.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fun Facts */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Fun Facts About My Hobbies</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <Trophy className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Sports Enthusiast</h4>
                <p className="text-sm text-blue-100">Active in 6+ different sports for fitness and fun</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Music className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Music Creator</h4>
                <p className="text-sm text-blue-100">Combines traditional tabla with modern music production</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Heart className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Community Focused</h4>
                <p className="text-sm text-blue-100">Believes in giving back through volunteering activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;