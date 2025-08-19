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
        { name: 'C' },
        { name: 'C++' },
        { name: 'Java' },
        { name: 'Python' },
        { name: 'HTML' }
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
        { name: 'Xilinx' },
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

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`
                      px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-full text-center
                      border border-gray-200 dark:border-gray-700
                      hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50
                      dark:hover:from-blue-900/20 dark:hover:to-purple-900/20
                      hover:border-blue-200 dark:hover:border-blue-700
                      transition-all duration-300 transform hover:scale-105 hover:shadow-md
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                      dark:focus:ring-offset-gray-900
                      cursor-default
                      ${isVisible ? 'animate-fade-in' : 'opacity-0'}
                    `}
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Skill: ${skill.name}`}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;