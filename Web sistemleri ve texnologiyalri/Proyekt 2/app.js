const DOM = window.document.documentElement
const query = document.querySelector.bind(document)

const setCSSProperty = (key, value, el = DOM) => {
  el.style.setProperty(key, value)
}

const controls = {
  amount: query('#amount'),
  rgb: query('#rgb'),
  oklch: query('#oklch'),
}

const supportNotice = query('.support-notice')

const container = query('.container')

const render = () => {
  const amount = +controls.amount.value
  const color = controls.rgb.checked ? 'rgb' : 'oklch'
  setCSSProperty('--amount', amount)
  const divs = Array.from(Array(amount), (_, i) => `
    <div style="--i: ${i}"></div>
  `).join('')
  container.classList.toggle('rgb', color === 'rgb')
  container.classList.toggle('oklch', color === 'oklch')
  container.innerHTML = divs
}

const hideSupportNotice = () => {
  supportNotice.classList.add('hidden')
}

supportNotice.addEventListener('click', hideSupportNotice)

controls.amount.addEventListener('input', render)
controls.rgb.addEventListener('change', render)
controls.oklch.addEventListener('change', render)
render()