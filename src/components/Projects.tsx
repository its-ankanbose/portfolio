import React from 'react';
import { ExternalLink, Github, Code, Wifi, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Ayurvedic Prakriti Detection System',
      description: 'An interactive application for detecting Ayurvedic doshas with comprehensive chart visualization and user-friendly interface.',
      technologies: ['Python', 'Tkinter', 'Matplotlib', 'Pillow'],
      features: [
        'Interactive GUI for dosha assessment',
        'Real-time chart visualization',
        'Comprehensive health analysis',
        'User-friendly interface design'
      ],
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      title: 'Home Automation System',
      description: 'IoT-based system for remote appliance control and environmental monitoring with cloud connectivity and real-time data visualization.',
      technologies: ['ESP8266', 'Arduino IDE', 'DHT11', 'ThingSpeak'],
      features: [
        'Remote appliance control',
        'Environmental monitoring',
        'Real-time data logging',
        'Cloud-based dashboard'
      ],
      icon: <Wifi className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      title: 'Microstrip Patch Antenna for Biomedical Application',
      description: 'Final-year project focused on designing specialized antenna for tumor detection applications in biomedical engineering.',
      technologies: ['CST Microwave Studio', 'Antenna Design', 'RF Engineering'],
      features: [
        'Biomedical application focus',
        'Tumor detection capability',
        'Advanced simulation modeling',
        'Performance optimization'
      ],
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions across software development, IoT, and biomedical engineering applications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.bgGradient} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Icon & Status */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-white mb-4`}>
                    {project.icon}
                  </div>
                  {project.status && (
                    <span className="inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-0">
                      {project.title}
                    </h3>
                    <div className="flex space-x-3">
                      <button className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-110">
                        <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </button>
                      <button className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-110">
                        <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;