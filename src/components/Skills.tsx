import React, { useEffect, useRef, useState } from 'react';
import { Code, Wrench, Cpu, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'HTML', level: 85 }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Engineering Tools',
      skills: [
        { name: 'MATLAB', level: 80 },
        { name: 'Octave', level: 75 },
        { name: 'Simulink', level: 70 },
        { name: 'CST Microwave Studio', level: 65 },
        { name: 'VS Code', level: 90 }
      ]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Hardware & Embedded',
      skills: [
        { name: 'VHDL', level: 70 },
        { name: 'Xilinx', level: 65 },
        { name: 'Arduino IDE', level: 85 },
        { name: 'ESP8266', level: 80 },
        { name: 'Circuit Design', level: 75 }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Concepts & Technologies',
      skills: [
        { name: 'DSA', level: 75 },
        { name: 'IoT', level: 80 },
        { name: 'Signal Processing', level: 70 },
        { name: 'Communication Systems', level: 75 },
        { name: 'Data Visualization', level: 70 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
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