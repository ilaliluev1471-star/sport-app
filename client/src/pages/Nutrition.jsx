import { useState } from "react";

export default function Nutrition() {

const [weight,setWeight]=useState("")
const [height,setHeight]=useState("")
const [age,setAge]=useState("")
const [gender,setGender]=useState("male")
const [activity,setActivity]=useState(1.55)
const [goal,setGoal]=useState("maintain")

function calculateCalories(){

if(!weight||!height||!age){
return null
}

let bmr

if(gender==="male"){
bmr=10*weight+6.25*height-5*age+5
}else{
bmr=10*weight+6.25*height-5*age-161
}

let calories=Math.round(bmr*activity)

if(goal==="lose"){
calories-=300
}

if(goal==="gain"){
calories+=300
}

return calories

}

const calories=calculateCalories()

return (

<div className="max-w-4xl mx-auto px-6 py-16">

<h1 className="text-5xl font-bold mb-10 text-center">
Польза правильного питания в спорте
</h1>

<div className="prose prose-invert text-lg leading-relaxed">

<p>
Правильное питание — это основа здоровья и спортивных результатов.
Даже самая эффективная программа тренировок не даст максимального
результата без сбалансированного рациона.
</p>

<p>
Сбалансированное питание помогает поддерживать высокий уровень
энергии, улучшает выносливость, ускоряет восстановление мышц.
</p>

<ul className="list-disc pl-6 my-8 space-y-4 text-gray-300">

<li>Увеличивает энергию и выносливость</li>

<li>Помогает быстрее восстанавливаться</li>

<li>Сжигает жир и помогает строить мышцы</li>

<li>Укрепляет иммунитет</li>

</ul>

<div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-700 my-12">

<h2 className="text-3xl font-bold text-center mb-6">

Калькулятор калорий

</h2>

<p className="text-gray-400 text-center mb-6">

Рассчитай примерную дневную норму калорий

</p>

<div className="grid md:grid-cols-2 gap-4">

<input
type="number"
placeholder="Вес (кг)"
value={weight}
onChange={(e)=>setWeight(e.target.value)}
className="bg-zinc-800 p-3 rounded-xl"
/>

<input
type="number"
placeholder="Рост (см)"
value={height}
onChange={(e)=>setHeight(e.target.value)}
className="bg-zinc-800 p-3 rounded-xl"
/>

<input
type="number"
placeholder="Возраст"
value={age}
onChange={(e)=>setAge(e.target.value)}
className="bg-zinc-800 p-3 rounded-xl"
/>

<select
value={gender}
onChange={(e)=>setGender(e.target.value)}
className="bg-zinc-800 p-3 rounded-xl"
>

<option value="male">

Мужчина

</option>

<option value="female">

Женщина

</option>

</select>

<select
value={activity}
onChange={(e)=>setActivity(Number(e.target.value))}
className="bg-zinc-800 p-3 rounded-xl"
>

<option value={1.2}>
Минимальная активность
</option>

<option value={1.375}>
Лёгкая активность
</option>

<option value={1.55}>
Средняя активность
</option>

<option value={1.725}>
Высокая активность
</option>

</select>

<select
value={goal}
onChange={(e)=>setGoal(e.target.value)}
className="bg-zinc-800 p-3 rounded-xl"
>

<option value="lose">

Похудение

</option>

<option value="maintain">

Поддержание веса

</option>

<option value="gain">

Набор массы

</option>

</select>

</div>

{calories && (

<div className="mt-8 text-center">

<p className="text-4xl font-bold text-green-400">

{calories} ккал

</p>

<p className="text-gray-400">

Рекомендуемая дневная норма

</p>

</div>

)}

</div>

<h2 className="text-3xl font-bold mt-12 mb-4">

Почему питание так важно

</h2>

<p>
Во время тренировок организм расходует большое количество энергии.
Без правильного питания восстановление ухудшается.
</p>

<h2 className="text-3xl font-bold mt-12 mb-4">

Основные элементы питания

</h2>

<h3 className="text-2xl font-semibold mt-8">

Белки

</h3>

<p>

Белок помогает восстанавливать и строить мышцы.

</p>

<h3 className="text-2xl font-semibold mt-8">

Углеводы

</h3>

<p>

Углеводы являются главным источником энергии.

</p>

<h3 className="text-2xl font-semibold mt-8">

Жиры

</h3>

<p>

Полезные жиры нужны для гормонального баланса.

</p>

<h2 className="text-3xl font-bold mt-12 mb-4">

Роль воды

</h2>

<p>

Пей воду регулярно в течение дня.

</p>

<p className="text-sport-green text-2xl font-medium mt-10">

Главное правило:

40% углеводов + 30% белков + 30% жиров + много воды

</p></div>

</div>

)

}
