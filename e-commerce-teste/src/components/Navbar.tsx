import { Link } from "react-router-dom";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar() {
    return (
        <nav className="flex p-4 bg-brand-surface fixed top-0 left-0 right-0 w-full h-16 z-10">
            <Link to='/' className="text-brand-text text-3xl mx-auto">MaiFuti</Link>
            <ToggleThemeButton/>
        </nav>
    )
}