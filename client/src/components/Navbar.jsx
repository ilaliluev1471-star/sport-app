
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-sport-dark border-b border-green-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-4xl">🏋️</span>
          <span className="text-2xl font-bold tracking-widest">SPORTLIFE</span>
        </Link>
        <div className="flex gap-8 text-lg">
          <Link to="/" className="hover:text-sport-green transition">Главная</Link>
          <Link to="/nutrition" className="hover:text-sport-green transition">Питание</Link>
          <Link to="/training" className="hover:text-sport-green transition">Тренировки</Link>
          <Link to="/motivation" className="hover:text-sport-green transition">Мотивация</Link>
        </div>
      </div>
    </nav>
  );
}