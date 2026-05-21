export default function Training() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-10 text-center text-sport-green">
        Эффективные тренировки для любого уровня
      </h1>

      <div className="prose prose-invert prose-lg leading-relaxed text-gray-300 max-w-none mb-16">
        <p>
          Рекомендуемый график: <span className="text-sport-green font-semibold">Понедельник — Среда — Пятница</span>. 
          3 тренировки в неделю — оптимально для новичков и среднего уровня.
        </p>
      </div>

      {/* ==================== ПОНЕДЕЛЬНИК - PUSH ==================== */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-sport-green mb-8">Понедельник — Push (Грудь • Плечи • Трицепс)</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">1. Отжимания / Жим лёжа</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/2fKzL9m.gif" alt="Отжимания" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">4 подхода × 8–12 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">2. Жим гантелей вверх (сидя)</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/X7vL9Kp.gif" alt="Жим вверх" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3 подхода × 10–12 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">3. Разведения гантелей в стороны</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/8QmP2vL.gif" alt="Разведения" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3 подхода × 12–15 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">4. Отжимания узким хватом (трицепс)</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/5vN9pLm.gif" alt="Трицепс" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3 подхода × 10–12 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">5. Французский жим</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/Plank.gif" alt="Французский жим" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3 подхода × 12 повторений</p>
          </div>
        </div>
      </div>

      {/* ==================== СРЕДА - PULL ==================== */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-sport-green mb-8">Среда — Pull (Спина • Бицепс • Задние дельты)</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">1. Тяга в наклоне</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/JqK8vLm.gif" alt="Тяга" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">4 подхода × 10–12 повторений</p>
          </div><div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">2. Подтягивания / Австралийские</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/7vK9pL2.gif" alt="Подтягивания" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3–4 подхода × максимум повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">3. Тяга верхнего блока</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/9LmX7vK.gif" alt="Тяга блока" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3 подхода × 12 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">4. Подъём гантелей на бицепс</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/BvK9pL2.gif" alt="Бицепс" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3 подхода × 12–15 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">5. Разведения в наклоне (задние дельты)</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/8QmP2vL.gif" alt="Задние дельты" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3 подхода × 12–15 повторений</p>
          </div>
        </div>
      </div>

      {/* ==================== ПЯТНИЦА - LEGS ==================== */}
      <div>
        <h2 className="text-4xl font-bold text-sport-green mb-8">Пятница — Legs (Ноги + Ягодицы + Пресс)</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">1. Приседания</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/8vKzq2G.gif" alt="Приседания" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">4 подхода × 10–15 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">2. Румынская тяга</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/5vN9pLm.gif" alt="Румынская тяга" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">4 подхода × 10–12 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">3. Выпады ходьбой</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/L9vK2pQ.gif" alt="Выпады" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3 подхода × 10–12 на каждую ногу</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">4. Подъём на носки (икры)</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/Plank.gif" alt="Икры" className="w-full h-full object-cover" />
            </div><p className="text-gray-400 text-sm">4 подхода × 15–20 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">5. Планка + Скручивания</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
              <img src="https://i.imgur.com/Plank.gif" alt="Пресс" className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-400 text-sm">3 подхода × 45–90 секунд + 3×15 скручиваний</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 text-gray-400 text-lg">
        Отдых между подходами: 60–120 секунд<br />
        Каждую неделю старайся увеличивать вес или количество повторений.
      </div>
    </div>
  );
}