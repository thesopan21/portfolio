import { useEffect, useState } from "react"


export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return { isDark, toggleTheme }
};