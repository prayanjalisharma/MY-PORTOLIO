// import React from 'react';
import { 
  Code, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Trophy, 
  FolderOpen, 
  Briefcase,
  Star
} from 'lucide-react';
// 'Node.js'
const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React.js', 'Python', 'Java',
     'MongoDB','OPPs' ,'Git', 'HTML','CSS','Tailwind CSS','C','SQL'
  ];

  const certifications = [
    'Silver Medal in College Annual Award Ceremony (Kalanidhi)',
    'Mern Stack Trainee Certification in Internship by Zeetron Company',
    'Certification of achievement in YESIST`12 2024 organised by JECRC',
    'Poornima AICTE IDEA LAB HACKTHON “ THE SMART CITY” Participation',
    'Certification of Completion Aeromodelling Internship in Aerophantom'
  ];

  const courses = [
    'Problem Solving through Progamming in C - NPTEL',
    'DATABASE MANAGEMENT SYSTEM - NPTEL',
    
  ];

//   const achievements = [
    // 'Dean\'s List for 3 consecutive semesters',
    // 'First place in University Hackathon 2023',
    // 'Published research paper on Machine Learning'
//   ];

  const projects = [
    {
      title: 'News Tracker App',
      description: 'An AI-powered app integrating a Random Forest Classifier to detect news authenticity with confidence scores, featuring API-based live news updates and a smart chatbot for app queries and trending news',
      tech: ['React.JS','Python','ML-randomforest Classification', 'TailwindCSS','API',]
    },
    {
      title: 'Emojify: Detect Face Expression',
      description: 'An AI-driven CNN based facial expression model build with React.js(TypeScript), python,TensorFlow that detects emotions and displays matching emojis as per user detected mood and feature to suggest the mood-based activities, and includes an AI chat system that reply as per emotion.',
      tech: ['React', 'ANN-ML', 'Python']
    },
    {
      title: 'Stay Mate - Hotel Booking and Rating App,',
      description: 'A hotel booking and rating app where users can list, review stays, and detail their experience with authentication and image management. Associated with the feature to book the hotel as per others review and availability.',
      tech: ['MERN']
    }
  ];

  const experience = [
    {
      title: 'MERN Trainee Intern',
      company: ' Zeetron Netwoks PVT Ltd.',
      period: '07/2024 – 08/2024',
      description: ''
    },
    {
      title: 'ML Trainee Developer',
      company: 'Software Web Technology',
      period: ' 05/2025 – 07/2025',
      description: ''
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Bio Section */}
      <div className="bg-white rounded-lg shadow-md p-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          I'm Prayanjali Sharma, a passionate <span className="text-blue-600 font-semibold">Software Engineer</span> with 
          the interest for crafting web applications with user friendly design.A active learner with strong foundation and experience in development. I constantly look for to learn with fast-evolving tech with team work abilty 
          and adaptability. 
        </p>
        <p className="text-gray-600 leading-relaxed">
          Currently pursuing my Bachelor's degree in Computer Science in Poornima Institute of Engineering and Technology in Jaipur.Durning my studies I have acquiure a great learning in DSA and programming languages like C,Java,Python. I'm always eager to learn new technologies and 
          contribute to meaningful projects.Though I am a fresher with no work experience,  my ability to learn quickly allows me to adapt and grow in every field
        </p>
      </div>

      {/* Education */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Education</h3>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-lg font-semibold text-gray-800">Bachelor of Technology</h4>
            <p className='text-black-600 font-semibold'>Computer Science</p>
            <p className="text-blue-600 font-medium">Poornima Institute of Engineering and Technology, Jaipur(Raj)</p>
            <p className="text-gray-600">From : 2022 To : present</p>
            <p className='text-gray-600'>CGPA: 9.5</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="mt-5 border-l-4 border-blue-500 pl-4">
            <h4 className="text-lg font-semibold text-gray-800">Senior Secondary School</h4>
            <p className='text-black-600 font-semibold'>PCM</p>
            <p className="text-blue-600 font-medium">Sanskar Valley Public Senior Secondary School, Alwar(Raj)</p>
            <p className='text-gray-600'>2021-2022</p>
            <p className="text-gray-600">Percentage: 95%</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="mt-4 border-l-4 border-blue-500 pl-4">
            <h4 className="text-lg font-semibold text-gray-800"> Secondary School</h4>
            
            <p className="text-blue-600 font-medium">Sanskar Valley Public Senior Secondary School, Alwar(Raj)</p>
            <p className="text-gray-600">2019-2020</p>
            <p className="text-gray-600">Percentage: 90.5%</p>

          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <Code className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-50 px-4 py-2 rounded-lg text-center hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <Award className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
        </div>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Online Courses */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Online Courses</h3>
        </div>
        <div className="space-y-3">
          {courses.map((course, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">{course}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <Trophy className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Achievements</h3>
        </div>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">{achievement}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Projects */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <FolderOpen className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Personal & Academic Projects</h3>
        </div>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Work Experience</h3>
        </div>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;