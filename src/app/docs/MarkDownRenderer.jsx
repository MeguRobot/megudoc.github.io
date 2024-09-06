'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function MarkdownRenderer({ allPosts }) {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Markdown Renderer</h1>
        <div className="flex space-x-8">
          <div className="w-1/3">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Select a file</h2>
            <ul className="space-y-2">
              {allPosts.map((post) => (
                <li key={post.fileName}>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full text-left px-4 py-2 rounded-lg bg-white shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b9be,inset_-5px_-5px_10px_#ffffff] transition-all duration-300 focus:outline-none"
                  >
                    <h3 className="text-gray-800 font-medium">
                      {post.title}
                    </h3>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/3">
            <div className=" bg-white p-6 rounded-lg shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff]">
              {selectedPost ? (
                <>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">{selectedPost.title}</h2>
                  <div className="prose max-w-none">
                    <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                  </div>
                </>
              ) : (
                <p className="text-gray-600">Select a file to view its content</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}