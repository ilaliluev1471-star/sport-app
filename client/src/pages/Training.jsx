export default function Training() {
    // src/pages/Training.jsx
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-10 text-center text-sport-green">
        Эффективные тренировки для любого уровня
      </h1>

      <div className="prose prose-invert prose-lg leading-relaxed text-gray-300">
        <p className="text-xl mb-8">
          Регулярные тренировки — это ключ к сильному телу, хорошему самочувствию и уверенности. 
          Главное правило для начала: <span className="text-sport-green font-semibold">3–4 раза в неделю по 45–60 минут</span> вполне достаточно, 
          чтобы увидеть первые заметные изменения уже через 4–8 недель.
        </p>

        <h2 className="text-4xl font-bold mt-12 mb-6 text-white">Почему стоит начинать именно с силовых тренировок?</h2>
        <ul className="list-disc pl-8 space-y-4 mb-10">
          <li>Увеличивают силу и мышечную массу</li>
          <li>Ускоряют обмен веществ — жир сжигается даже в покое</li>
          <li>Укрепляют кости и суставы, снижают риск остеопороза</li>
          <li>Улучшают осанку и защищают спину от болей</li>
          <li>Повышают выносливость, настроение и качество сна</li>
          <li>Снижают риск сердечных заболеваний, диабета 2 типа и депрессии</li>
        </ul>

        <h2 className="text-4xl font-bold mt-12 mb-6 text-white">Базовые упражнения — основа любой программы</h2>
        <p>
          Эти упражнения задействуют сразу несколько крупных мышечных групп. 
          Освой технику — и прогресс пойдёт очень быстро.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-2xl font-bold mb-4 text-sport-green">Приседания (Squats)</h3>
            <p>Ноги на ширине плеч, спина прямая. Опускайся, пока бёдра не будут параллельны полу. Отличное упражнение для ног, ягодиц и кора.</p>
            <p className="mt-3 text-gray-400">Новичкам: 3 подхода × 10–15 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-2xl font-bold mb-4 text-sport-green">Жим лёжа / отжимания (Bench Press / Push-ups)</h3>
            <p>Развивает грудь, плечи, трицепсы. Если штанга тяжёлая — начни с отжиманий от пола или от колен.</p>
            <p className="mt-3 text-gray-400">3 подхода × 8–12 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-2xl font-bold mb-4 text-sport-green">Тяга в наклоне / подтягивания (Bent-over Row / Pull-ups)</h3>
            <p>Прорабатывает спину и бицепсы. Нет перекладины? Делай тягу гантели одной рукой или австралийские подтягивания.</p>
            <p className="mt-3 text-gray-400">3 подхода × 10–12 повторений</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <h3 className="text-2xl font-bold mb-4 text-sport-green">Мёртвая тяга (Deadlift)</h3>
            <p>Король упражнений: спина, ноги, ягодицы, хват. Для новичков — румынская тяга с лёгким весом.</p>
            <p className="mt-3 text-gray-400">3 подхода × 8–10 повторений</p>
          </div>
        </div>

        <h2 className="text-4xl font-bold mt-12 mb-6 text-white">Простая программа для новичка (Full Body, 3 раза в неделю)</h2>
        <p className="mb-6">
          Тренируйся через день: понедельник — среда — пятница (или любой удобный график).
        </p>

        <div className="bg-zinc-800 p-8 rounded-3xl mb-10">
          <h3 className="text-2xl font-bold mb-6">Каждая тренировка:</h3>
          <ol className="list-decimal pl-6 space-y-4">
            <li>Разминка 5–10 мин (беговая дорожка / скакалка / суставная гимнастика)</li>
            <li>Приседания со штангой или гоблет-присед — 3×10–12</li>
            <li>Жим лёжа / отжимания — 3×8–12</li>
            <li>Тяга верхнего блока / тяга гантели в наклоне — 3×10–12</li>
            <li>Планка — 3×30–60 секунд</li>
            <li>Подъёмы на бицепс + французский жим (трицепс) — 3×12</li>
            <li>Заминка + растяжка 5–10 мин</li>
          </ol>
        </div>

        <p className="text-xl italic text-sport-green text-center mt-12">
          Главное — регулярность и техника. Лучше 3 хорошие тренировки в неделю, чем 6 плохих.
        </p>

        <p className="text-center mt-8 text-gray-400">
          Через 2–3 месяца переходи на сплит (разделение по группам мышц) — прогресс ускорится.
        </p>
      </div>
    </div>
  );
}
  ;
