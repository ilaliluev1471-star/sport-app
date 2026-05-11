 export default function Training() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-10 text-center text-sport-green">
        Эффективные тренировки для любого уровня
      </h1>

      <div className="prose prose-invert prose-lg leading-relaxed text-gray-300 max-w-none">
        <p>
          Регулярные тренировки — это ключ к сильному телу, хорошему самочувствию и уверенности.
          Главное правило для начала: <span className="text-sport-green font-semibold">3–4 раза в неделю по 45–60 минут</span> вполне достаточно,
          чтобы увидеть первые заметные изменения уже через 4–8 недель.
        </p>

        <h2 className="text-4xl font-bold mt-12 mb-6 text-white">
          Базовые упражнения — основа любой программы
        </h2>
        <p className="text-lg">
          Эти упражнения задействуют сразу несколько крупных мышечных групп. Освой технику — и прогресс пойдёт очень быстро.
        </p>
      </div>

      {/* Сетка с упражнениями */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        
        {/* 1. Приседания */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
          <h3 className="text-2xl font-bold mb-4 text-sport-green">Приседания (Squats)</h3>
          
          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-5">
            <video 
              className="w-full h-full object-cover"
              controls 
              loop 
              muted 
              playsInline
              poster="https://via.placeholder.com/600x340/111827/22c55e?text=Приседания"
            >
              <source src="/videos/squats.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>

          <p className="text-gray-300">
            Ноги на ширине плеч, спина прямая. Опускайся, пока бёдра не будут параллельны полу.
          </p>
          <p className="mt-3 text-gray-400 text-sm">
            Новичкам: 3 подхода × 10–15 повторений
          </p>
        </div>

        {/* 2. Жим лёжа / Отжимания */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
          <h3 className="text-2xl font-bold mb-4 text-sport-green">Жим лёжа / Отжимания (Bench Press / Push-ups)</h3>
          
          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-5">
            <video 
              className="w-full h-full object-cover"
              controls 
              loop 
              muted 
              playsInline
            >
              <source src="/videos/bench-press.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="text-gray-300">
            Развивает грудь, плечи, трицепсы. Если штанга тяжёлая — начинай с отжиманий от пола или от колен.
          </p>
          <p className="mt-3 text-gray-400 text-sm">
            3 подхода × 8–12 повторений
          </p>
        </div>

        {/* 3. Тяга в наклоне / Подтягивания */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
          <h3 className="text-2xl font-bold mb-4 text-sport-green">Тяга в наклоне / Подтягивания</h3>
          
          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-5">
            <video 
              className="w-full h-full object-cover"
              controls 
              loop 
              muted 
              playsInline
            >
              <source src="/videos/bent-over-row.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="text-gray-300">
            Прорабатывает спину и бицепсы. Нет перекладины? Делай тягу гантели одной рукой или австралийские подтягивания.
          </p>
          <p className="mt-3 text-gray-400 text-sm">
            3 подхода × 10–12 повторений
          </p>
        </div>

        {/* 4. Мёртвая тяга */}
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
[11.05.2026 16:29] илья: <h3 className="text-2xl font-bold mb-4 text-sport-green">Мёртвая тяга (Deadlift)</h3>
          
          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-5">
            <video 
              className="w-full h-full object-cover"
              controls 
              loop 
              muted 
              playsInline
            >
              <source src="/videos/deadlift.mp4" type="video/mp4" />
            </video>
          </div>

          <p className="text-gray-300">
            Король упражнений: спина, ноги, ягодицы, хват. Для новичков — румынская тяга с лёгким весом.
          </p>
          <p className="mt-3 text-gray-400 text-sm">
            3 подхода × 8–10 повторений
          </p>
        </div>
      </div>

      {/* Программа для новичка */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          Простая программа для новичка (Full Body, 3 раза в неделю)
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Тренируйся через день: понедельник — среда — пятница
        </p>

        {/* Здесь можно оставить твой текущий список упражнений */}
      </div>
    </div>
  );
}