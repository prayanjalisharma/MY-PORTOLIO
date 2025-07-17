// // import React from 'react';
// import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

// const Sidebar = () => {
//   return (
//     <div className="fixed left-0 top-0 w-80 h-full bg-white shadow-lg overflow-y-auto z-10">
//       <div className="p-8">
//         {/* Profile Photo */}
//         <div className="text-center mb-6">
//           <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
//             JD
//           </div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h1>
//           <p className="text-lg text-blue-600 font-medium">Software Engineer</p>
//         </div>

//         {/* Contact Information */}
//         <div className="space-y-4 mb-8">
//           <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
//             <Mail className="w-5 h-5" />
//             <span className="text-sm">john.doe@email.com</span>
//           </div>
//           <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
//             <Phone className="w-5 h-5" />
//             <span className="text-sm">+1 (555) 123-4567</span>
//           </div>
//           <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
//             <MapPin className="w-5 h-5" />
//             <span className="text-sm">San Francisco, CA</span>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="flex space-x-4 mb-8">
//           <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
//             <Github className="w-5 h-5" />
//           </a>
//           <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
//             <Linkedin className="w-5 h-5" />
//           </a>
//         </div>

//         {/* Download Resume Button */}
//         <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
//           <Download className="w-4 h-4" />
//           <span>Download Resume</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


















// import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-80 h-full bg-white shadow-lg overflow-y-auto z-30">
      <div className="p-8">
        {/* Profile Photo */}
        <div className="text-center mb-6">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
            <img className='rounded-full shadow-2xl ' src="src\assets\PRAYANJALI SHARMA(PIET22CS127).png" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2 mt-20">PRAYANJALI SHARMA</h1>
          <p className="text-lg text-blue-600 font-medium">Software Engineer</p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
            <Mail className="w-5 h-5" />
            <span className="text-sm">prayanjali0202sharma@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
            <Phone className="w-5 h-5" />
            <span className="text-sm">+91 9079130202</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Jaipur, Rajasthan</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-8">
          <a href="https://github.com/prayanjalisharma" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="www.linkedin.com/in/prayanjali-sharma-4a89b7255" className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Download Resume Button */}
        <a 
          href="https://drive.google.com/uc?export=download&id=1a5u_BfoJqgu7porp1_J7NQySEWdltHCX"
          download="Resume.pdf"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;