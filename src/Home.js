import React from 'react';

export default function Home() {
  return (
    <div className='bg-zinc-200 min-h-screen p-6'>
      <div className='flex justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold my-6'>
            Hi, I'm <span className='text-pink-700'>Aseer</span>
          </h1>
          <div
            className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition duration-300 hover:scale-110 mx-auto"
          >
            <img
              src="l;ll;';.jpg" // تمہارا original path واپس رکھ دیا
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className='my-6 flex justify-center'>
        <p className='text-center text-lg leading-relaxed max-w-2xl'>
          I'm a full-stack web developer with expertise in both front-end and back-end technologies. I build and design exceptional digital experiences, focusing on responsive web applications and leveraging my skills in frameworks like React.js, Node.js, and MongoDB.
        </p>
      </div>

      <div className="flex justify-center gap-10 mt-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/923449087302"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-110"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-7 h-7"
          />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-110"
        >
          <img
            src="https://img.freepik.com/premium-vector/art-illustration_929495-41.jpg"
            alt="Facebook"
            className="w-6 h-6"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aseer-abbas-6a30622b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-110"
        >
          <img
            src="https://img.freepik.com/free-psd/linkedin-logo-icon-psd-editable_314999-3660.jpg"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
      </div>
    </div>
  );
}
