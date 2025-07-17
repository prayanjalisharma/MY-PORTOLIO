// import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Resume</h2>
          </div>
                    <a 
            href="https://drive.google.com/uc?export=download&id=1a5u_BfoJqgu7porp1_J7NQySEWdltHCX"
            download="Resume.pdf"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </a>
        </div>
        
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">PRAYANJALI SHARMA</h3>
            <p className="text-lg text-blue-600 mb-4">Software Engineer</p>
            <div className="flex justify-center space-x-6 text-gray-600">
              <span>prayanjali0202sharma@gmail.com</span>
              <span>+91 90791302002</span>
              <span>Jaipur, Rajasthan</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Professional Summary</h4>
            <p className="text-gray-600 leading-relaxed">
              Passionate Software Engineer with strong foundation in full-stack development, modern web technologies. Experienced in building scalable 
              applications and collaborating in agile environments.
            </p>
          </div>
{/* <div className='text-center'>
    <img className='h-fit w-fit' src="myportfolio/src/assets/resume.png" alt="loading " />
</div> */}
           <div className="text-center py-8">
            <div className="inline-block bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="src\assets\resume.png" 
                alt="loading"
                className="max-w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=1a5u_BfoJqgu7porp1_J7NQySEWdltHCX', '_blank')}
              />
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Click on the resume image to download the PDF version
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;