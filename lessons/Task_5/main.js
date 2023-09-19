let totalCalories = 0 // Сумма килокалорий всего блюда

// Функция вывода одного продутка с учетом калорийности и веса
function printProduct(index, title, calories, weight) {
  let productCalories = calories * weight // Расчет калорийности с учетом веса
  totalCalories = totalCalories + productCalories // Прибавляем к общей калорийности блюда

  document.write(`<li class="list__item">
                    ${index}) 
                    ${title},
                    калорийность: ${calories} ккал, 
                    вес: ${weight} гр, 
                    всего: ${productCalories} ккал
                  </li>`)
}

// Функция вывода суммарной калорийности блюда
function printTotalCalories(value) {
  document.write(`<div class="total">
                    Калорийность всего блюда: ${value} ккал
                  </div>`)
}


let index = 0 // Порядковый номер

document.write('<div class="container">')
document.write('<h1 class="main-title">Калькулятор калорийности блюда</h1>')
document.write('<ul class="list">')

// Продукт 1
{
  index++
  let productTitle = prompt(`Введите название продукта ${index}`)
  let productСalories = Number(prompt(`Количество килокалорий в грамме продукта ${index}`))
  let productWeight = Number(prompt(`Вес продукта (гр) ${index}`))
  printProduct(index, productTitle, productСalories, productWeight)
}

// Продукт 2
{
  index++
  let productTitle = prompt(`Введите название продукта ${index}`)
  let productСalories = Number(prompt(`Количество килокалорий в грамме продукта ${index}`))
  let productWeight = Number(prompt(`Вес продукта (гр) ${index}`))
  printProduct(index, productTitle, productСalories, productWeight)
}

// Продукт 3
{
  index++
  let productTitle = prompt(`Введите название продукта ${index}`)
  let productСalories = Number(prompt(`Количество килокалорий в грамме продукта ${index}`))
  let productWeight = Number(prompt(`Вес продукта (гр) ${index}`))
  printProduct(index, productTitle, productСalories, productWeight)
}

document.write('</ul>')

// Вывод суммарной калорийности
printTotalCalories(totalCalories)

document.write('</div>')
