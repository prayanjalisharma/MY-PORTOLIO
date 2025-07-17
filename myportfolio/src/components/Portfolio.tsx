// import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Emojify: Detect Face Expression',
      description: 'An AI-driven CNN based facial expression model build with React.js(TypeScript), python,TensorFlow that detects emotions and displays matching emojis as per user detected mood and feature to suggest the mood-based activities, and includes an AI chat system that reply as per emotion.',
      image: 'src/assets/detect.png',
      tech: ['React', 'Python','Deep Learning' ,'Machine Learning', 'API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'News Tracker App',
      description: 'An AI-powered app integrating a Random Forest Classifier to detect news authenticity with confidence scores, featuring API-based live news updates and a smart chatbot for app queries and trending news',
      image: 'src\assets\news.png',
      tech: ['React', 'Machine Learing ', 'API', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Stay-Mate:Hotel Booking and Rating App',
      description: 'A hotel booking and rating app where users can list, review stays, and detail their experience with authentication and image management. Associated with the feature to book the hotel as per others review and availability.',
      image: 'src/assets/stay.png',
      tech: ['MERN'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* <div className="mb-8">
        <div className="flex items-center mb-4">
          <Folder className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Portfolio</h2>
        </div>
        <p className="text-gray-600">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </div> */}

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Folder className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        </div>
        </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              {/* <div className="md:w-1/4">
                <img 
                //   src={project.image} 
                  alt={project.title}
                //   className="w-full h-64 md:h-10 object-fill"
                />
              </div> */}
              <div className="md:w-1/2 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;