import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">Спорт — это жизнь!</h1>
        <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
          Регулярные тренировки, правильное питание и мотивация помогут тебе стать сильнее, здоровее и счастливее.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Карточка 1 */}
        <Link to="/nutrition" className="block group">
          <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-8xl">🥗</div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Польза правильного питания</h3>
              <p className="text-gray-400">Как еда влияет на результаты в зале и самочувствие</p>
              <span className="inline-block mt-6 text-sport-green group-hover:underline">Подробнее →</span>
            </div>
          </div>
        </Link>

        {/* Карточка 2 */}
        <Link to="/training" className="block group">
          <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-8xl">🏋️</div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Эффективные тренировки</h3>
              <p className="text-gray-400">Программы для новичков и продвинутых</p>
              <span className="inline-block mt-6 text-sport-green group-hover:underline">Подробнее →</span>
            </div>
          </div>
        </Link>

        {/* Карточка 3 */}
        <Link to="/motivation" className="block group">
          <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-8xl">🔥</div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Мотивация каждый день</h3>
              <p className="text-gray-400">Цитаты, истории и советы, чтобы не сдаваться</p>
              <span className="inline-block mt-6 text-sport-green group-hover:underline">Подробнее →</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}