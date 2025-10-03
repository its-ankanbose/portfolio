import React from 'react';
import { Code, Wrench, Cpu, Globe } from 'lucide-react';

const Skills: React.FC = () => {

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Programming Languages',
      skills: [
        { name: 'C' },
        { name: 'C++' },
        { name: 'Java' },
        { name: 'Python' },
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Engineering Tools',
      skills: [
        { name: 'MATLAB' },
        { name: 'Octave' },
        { name: 'Simulink' },
        { name: 'CST Microwave Studio' },
        { name: 'VS Code' }
      ]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Hardware & Embedded',
      skills: [
        { name: 'VHDL' },
        { name: 'Verilog' },
        { name: 'Arduino IDE' },
        { name: 'ESP8266' },
        { name: 'Circuit Design' }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Concepts & Technologies',
      skills: [
        { name: 'DSA' },
        { name: 'IoT' },
        { name: 'Signal Processing' },
        { name: 'Communication Systems' },
        { name: 'Data Visualization' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across programming, engineering tools, and hardware development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 text-gray-900 dark:text-white rounded-lg px-4 py-2 shadow-md cursor-default select-none hover:bg-white/30 dark:hover:bg-gray-900/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-200"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;