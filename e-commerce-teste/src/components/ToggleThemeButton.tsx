import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export default function ToggleThemeButton() {
    const [icon, setIcon] = useState('')

    function toggleTheme() {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') == 'dark') {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                setIcon('moon')
            } else {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                setIcon('sun')
            }
        }
    }

    return <div className='p-2 bg-brand-primary w-10 h-10 rounded-full hover:cursor-pointer'
                    onClick={toggleTheme} title='Alternar tema'>
            { icon == 'moon' ?
                (<Moon className='text-white'/>) :
                (<Sun className='text-white'/>)}
           </div>
}