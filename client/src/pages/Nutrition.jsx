export default function Nutrition() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-10 text-center">Польза правильного питания в спорте</h1>
      <div className="prose prose-invert text-lg leading-relaxed">
        <p>Правильное питание — это 70% успеха в любом виде спорта.</p>
        <ul className="list-disc pl-6 my-8 space-y-4 text-gray-300">
          <li>Увеличивает энергию и выносливость</li>
          <li>Помогает быстрее восстанавливаться после тренировок</li>
          <li>Сжигает жир и строит мышцы</li>
          <li>Укрепляет иммунитет и улучшает сон</li>
        </ul>
        <p className="text-sport-green text-2xl font-medium">Главное правило: 40% углеводов + 30% белков + 30% жиров + много воды!</p>
      </div>
    </div>
  );
}