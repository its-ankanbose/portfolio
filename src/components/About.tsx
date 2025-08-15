import React from 'react';
import { Code, Users, Presentation, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Technical Skills',
      description: 'Proficient in C, C++, Java, DSA, and various engineering tools including MATLAB, VHDL, and Arduino IDE.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Teamwork & Leadership',
      description: 'Strong collaborative abilities with proven leadership experience in academic and project environments.'
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: 'Presentation Skills',
      description: 'Excellent communication and presentation abilities, comfortable speaking to diverse audiences.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Project Management',
      description: 'Organized approach to project planning, execution, and delivery with attention to detail.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="mb-6">
                  I'm Ankan Bose, a passionate final-year Electronics and Communication Engineering student 
                  at Academy of Technology, affiliated with Maulana Abul Kalam Azad University of Technology. 
                  With a CGPA of 7.2, I'm set to graduate in 2026.
                </p>
                <p className="mb-6">
                  My journey in engineering has been driven by curiosity and a desire to innovate. I have 
                  developed strong coding skills in multiple programming languages and gained hands-on 
                  experience with various engineering tools and technologies.
                </p>
                <p>
                  Beyond technical skills, I believe in the power of collaboration and effective communication. 
                  My experience in leadership roles and project management has taught me the importance of 
                  teamwork and clear presentation of ideas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2026</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Graduation Year</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">7.2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;