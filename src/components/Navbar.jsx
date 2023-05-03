import { useState } from 'react';
import './css/Navbar.css'
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  }

  return (
    <nav className={`bg-white ${darkMode ? 'dark bg-gray-800' : ''} shadow-lg fixed w-full z-10 top-0`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
          <span className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'} hover:no-underline`}>Olive</span>


          </div>
          <div className="flex items-center">
            <a href="#" className={`text-gray-900 ${darkMode ? 'dark:text-gray-100' : ''} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100`}>About</a>
            <a href="#" className={`text-gray-900 ${darkMode ? 'dark:text-gray-100' : ''} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100`}>Skills</a>
            <a href="#" className={`text-gray-900 ${darkMode ? 'dark:text-gray-100' : ''} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100`}>Projects</a>
            <a href="#" className={`text-gray-900 ${darkMode ? 'dark:text-gray-100' : ''} px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100`}>Contact</a>
            <div className="flex items-center ml-4">
              <button className={`rounded-full p-2 text-gray-700 ${darkMode ? 'dark:text-gray-300' : ''} hover:bg-gray-200 dark:hover:bg-gray-700`} onClick={toggleDarkMode}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l7 7-7 7"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l-7-7 7-7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
