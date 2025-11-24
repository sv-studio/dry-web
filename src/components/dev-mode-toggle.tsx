'use client'

import { useEffect, useState } from 'react'

export function DevModeToggle() {
  const [isDevUser, setIsDevUser] = useState(false)

  useEffect(() => {
    // Check localStorage on mount
    const devMode = localStorage.getItem('sv-dev-user') === 'true'
    setIsDevUser(devMode)

    // Listen for URL parameter ?dev=true or ?dev=false
    const params = new URLSearchParams(window.location.search)
    const devParam = params.get('dev')

    if (devParam === 'true') {
      localStorage.setItem('sv-dev-user', 'true')
      setIsDevUser(true)
      console.log('✅ Dev mode enabled - Analytics disabled')
    } else if (devParam === 'false') {
      localStorage.removeItem('sv-dev-user')
      setIsDevUser(false)
      console.log('❌ Dev mode disabled - Analytics enabled')
    }
  }, [])

  const toggleDevMode = () => {
    if (isDevUser) {
      localStorage.removeItem('sv-dev-user')
      setIsDevUser(false)
      console.log('❌ Dev mode disabled - Analytics enabled')
    } else {
      localStorage.setItem('sv-dev-user', 'true')
      setIsDevUser(true)
      console.log('✅ Dev mode enabled - Analytics disabled')
    }
  }

  // Only show in development or if user presses Ctrl+Shift+D
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl+Shift+D to toggle visibility
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        const toggle = document.getElementById('dev-mode-toggle')
        if (toggle) {
          toggle.style.display = toggle.style.display === 'none' ? 'block' : 'none'
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div
      id="dev-mode-toggle"
      style={{ display: 'none' }}
      className="fixed bottom-4 right-4 z-50"
    >
      <button
        onClick={toggleDevMode}
        className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-gray-800"
      >
        {isDevUser ? '🚫 Dev Mode ON' : '✅ Dev Mode OFF'}
      </button>
    </div>
  )
}
