import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      level: 'Bachelor of Technology',
      institution: 'Academy of Technology',
      affiliation: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
      field: 'Electronics and Communication Engineering',
      duration: '2022 - 2026',
      grade: 'CGPA: 7.2',
      status: 'Ongoing',
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      level: 'Higher Secondary Education',
      institution: "St Joseph's Convent High School",
      affiliation: 'Central Board of Secondary Education (CBSE)',
      field: 'Science Stream',
      duration: '2019 - 2021',
      grade: 'Percentage: 79%',
      status: 'Completed',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      level: 'Secondary Education',
      institution: 'Burnpur Riverside School',
      affiliation: 'Central Board of Secondary Education (CBSE)',
      field: 'General Studies',
      duration: '2017 - 2019',
      grade: 'Percentage: 95%',
      status: 'Completed',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    }
  ];

  const achievements = [
    'Consistent academic performance across all levels',
    'Strong foundation in Science and Mathematics',
    'Excellent performance in Secondary Education (95%)',
    'Currently pursuing specialized engineering degree'
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Educational <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive academic journey from foundational education to specialized engineering studies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${edu.bgGradient} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon & Status */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className={`w-16 h-16 bg-gradient-to-r ${edu.gradient} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto lg:mx-0`}>
                      {edu.icon}
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Ongoing' 
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-0">
                        {edu.level}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{edu.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {edu.affiliation}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">
                            <strong>Field:</strong> {edu.field}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Academic Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;