import pushupGif from "../assets/gifs/pushup.gif"
import shoulderpressGif from "../assets/gifs/shoulderpress.gif"
import lateralraiseGif from "../assets/gifs/lateralraise.gif"
import closepushupGif from "../assets/gifs/closepushup.gif"

import pullupGif from "../assets/gifs/pullup.gif"
import barbellrowGif from "../assets/gifs/barbellrow.gif"
import bicepcurlGif from "../assets/gifs/bicepcurl.gif"
import hammercurlGif from "../assets/gifs/hammercurl.gif"
import facepullGif from "../assets/gifs/facepull.gif"

import squatGif from "../assets/gifs/squat.gif"
import lungesGif from "../assets/gifs/lunges.gif"
import calfraiseGif from "../assets/gifs/calfraise.gif"
import plankGif from "../assets/gifs/plank.gif"
import crunchGif from "../assets/gifs/crunch.gif"

const exercises = {

push:[

{
name:"1. Отжимания / Жим лёжа",
gif:pushupGif,
reps:"4 подхода × 8–12 повторений"
},

{
name:"2. Жим гантелей вверх",
gif:shoulderpressGif,
reps:"3 подхода × 10–12 повторений"
},

{
name:"3. Разведения гантелей в стороны",
gif:lateralraiseGif,
reps:"3 подхода × 12–15 повторений"
},

{
name:"4. Узкие отжимания",
gif:closepushupGif,
reps:"3 подхода × 10–12 повторений"
}

],

pull:[

{
name:"1. Тяга штанги в наклоне",
gif:barbellrowGif,
reps:"4 подхода × 10–12 повторений"
},

{
name:"2. Подтягивания",
gif:pullupGif,
reps:"3–4 подхода максимум"
},

{
name:"3. Сгибание рук на бицепс",
gif:bicepcurlGif,
reps:"3 подхода × 12 повторений"
},

{
name:"4. Молотки",
gif:hammercurlGif,
reps:"3 подхода × 12 повторений"
},

{
name:"5. Задние дельты",
gif:facepullGif,
reps:"3 подхода × 12–15 повторений"
}

],

legs:[

{
name:"1. Приседания",
gif:squatGif,
reps:"4 подхода × 10–15 повторений"
},

{
name:"2. Выпады",
gif:lungesGif,
reps:"3 подхода × 10–12 повторений"
},

{
name:"3. Подъём на носки",
gif:calfraiseGif,
reps:"4 подхода × 15–20 повторений"
},

{
name:"4. Планка",
gif:plankGif,
reps:"3 подхода × 45–90 секунд"
},

{
name:"5. Скручивания",
gif:crunchGif,
reps:"3 подхода × 15 повторений"
}

]

}

function Section({title,data}){

return(

<div className="mb-20">

<h2 className="text-4xl font-bold text-sport-green mb-8">
{title}
</h2>

<div className="grid md:grid-cols-2 gap-8">

{data.map((item,index)=>(

<div
key={index}
className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700"
>

<h3 className="text-xl font-semibold mb-3">
{item.name}
</h3>

<div className="aspect-video rounded-xl overflow-hidden mb-4">

<img
src={item.gif}
alt={item.name}
className="w-full h-full object-cover"
/>

</div>

<p className="text-gray-400">
{item.reps}
</p>

</div>

))}

</div>

</div>

)

}

export default function Training(){

return(

<div className="max-w-5xl mx-auto px-6 py-16">

<h1 className="text-5xl font-bold mb-10 text-center text-sport-green">

Эффективные тренировки для любого уровня

</h1>
<div className="mb-10 text-gray-300">
  <h1 className="text-4xl font-bold text-green-400 mb-4">
    Тренировки
  </h1>

  <p className="text-lg mb-3">
    Ниже представлены примеры тренировок для начинающего и среднего уровня подготовки.
    Программа разделена по принципу Push / Pull / Legs — это один из самых
    популярных подходов для развития силы, мышечной массы и общего прогресса.
  </p>

  <p className="mb-3">
    Выбирай комфортный вес, соблюдай технику выполнения упражнений
    и не забывай про отдых между подходами.
  </p>

  <p className="text-gray-400">
    Важно: прогресс строится не только на тренировках, но и на
    восстановлении, сне и правильном питании.
  </p>
</div>
<div className="text-gray-300 mb-16">

Понедельник — Среда — Пятница

</div>

<Section
title="Понедельник — Push"
data={exercises.push}
/>

<Section
title="Среда — Pull"
data={exercises.pull}
/>

<Section
title="Пятница — Legs"
data={exercises.legs}
/>

</div>

)

}