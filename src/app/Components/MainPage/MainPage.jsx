'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon, Search, ChevronRight, Book } from 'lucide-react'

const documentationContent = {
  'Introduction': {
    title: 'Introduction',
    content: 'This is the documentation for the retarded of nacho!'
  },
  'Getting Started': {
    title: 'Getting Started',
    content: 'To get started, install our package using npm: npm install our-package'
  },
  'Components': {
    title: 'Components',
    content: 'Our library includes a variety of reusable components. Explore them here.'
  },
  'API Reference': {
    title: 'API Reference',
    content: 'Detailed information about our API endpoints and how to use them.'
  },
  'Examples': {
    title: 'Examples',
    content: 'Check out these examples to see our product in action.'
  },
  'Troubleshooting': {
    title: 'Troubleshooting',
    content: 'Having issues? Find solutions to common problems here.'
  }
}

export default function MainComponent() {
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentPage, setCurrentPage] = useState('Introduction')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className={`min-h-screen bg-orange-50 dark:bg-orange-900 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Top Panel */}
      <header className="h-16 bg-orange-100 dark:bg-orange-800 shadow-neumorphic-orange dark:shadow-neumorphic-orange-dark flex items-center justify-between px-4 transition-all duration-300">
        <div className="flex items-center w-full max-w-md">
          <Search className="w-5 h-5 text-orange-500 dark:text-orange-300" />
          <input
            type="search"
            placeholder="Search documentation..."
            className="ml-2 w-full bg-transparent border-none focus:outline-none text-orange-800 dark:text-orange-100 placeholder-orange-400 dark:placeholder-orange-500"
          />
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-orange-200 dark:bg-orange-700 shadow-neumorphic-orange dark:shadow-neumorphic-orange-dark transition-all duration-300 hover:shadow-neumorphic-orange-hover dark:hover:shadow-neumorphic-orange-dark-hover"
        >
          {darkMode ? <Sun className="w-5 h-5 text-orange-300" /> : <Moon className="w-5 h-5 text-orange-600" />}
        </button>
      </header>

      <div className="flex p-4 gap-4">
        {/* Sidebar */}
        <aside
          className={`w-64 bg-orange-100 dark:bg-orange-800 rounded-2xl shadow-neumorphic-orange dark:shadow-neumorphic-orange-dark overflow-hidden transition-all duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="p-4">
            <ul className="space-y-2">
              {Object.keys(documentationContent).map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(item)}
                    className={`w-full p-3 rounded-xl text-left text-orange-800 dark:text-orange-100 transition-all duration-200 ${
                      currentPage === item
                        ? 'bg-orange-200 dark:bg-orange-700 shadow-neumorphic-orange-inset dark:shadow-neumorphic-orange-dark-inset'
                        : 'hover:bg-orange-200 dark:hover:bg-orange-700 hover:shadow-neumorphic-orange-hover dark:hover:shadow-neumorphic-orange-dark-hover'
                    }`}
                  >
                    <Book className="w-4 h-4 inline-block mr-2" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <button
            onClick={toggleSidebar}
            className="lg:hidden mb-4 p-3 rounded-full bg-orange-200 dark:bg-orange-700 shadow-neumorphic-orange dark:shadow-neumorphic-orange-dark transition-all duration-300 hover:shadow-neumorphic-orange-hover dark:hover:shadow-neumorphic-orange-dark-hover"
          >
            <ChevronRight className={`w-5 h-5 text-orange-600 dark:text-orange-300 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className="bg-orange-100 dark:bg-orange-800 rounded-2xl p-8 shadow-neumorphic-orange dark:shadow-neumorphic-orange-dark transition-all duration-300">
            <h1 className="text-3xl font-bold text-orange-800 dark:text-orange-100 mb-4">{documentationContent[currentPage].title}</h1>
            <p className="text-orange-700 dark:text-orange-200">
              {documentationContent[currentPage].content}
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}