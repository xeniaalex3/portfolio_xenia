'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

//? Typage
interface ThemeContextInterface {
  theme: string
  toggleTheme: () => void
}

//? Hook d'import
export const useTheme = () => {
  // Permet d'importer cette fonction en déstructurant ce qu'on a besoin plutôt que de faire import useContext(context)
  // à chaque fois
  return useContext(ThemeContext)
}

//? Context
export const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'dark',
  toggleTheme: () => {}
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark') 
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
