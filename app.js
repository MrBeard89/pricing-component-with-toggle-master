const checkBox = document.querySelector('.checkbox')
const basicCash = document.querySelector('.basic_cash')
const professionalCash = document.querySelector('.professional_cash')
const masterCash = document.querySelector('.master_cash')

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    basicCash.textContent = '19.99'
    professionalCash.textContent = '24.99'
    masterCash.textContent = '39.99'
  } else {
    basicCash.textContent =
      Math.round(Number(basicCash.textContent) * 10) - 0.01
    professionalCash.textContent =
      Math.round(Number(professionalCash.textContent) * 10) - 0.01
    masterCash.textContent =
      Math.round(Number(masterCash.textContent) * 10) - 0.01
  }
})

//Checkbox reset
window.addEventListener('DOMContentLoaded', () => {
  checkBox.checked = true
  console.log('Checkbox resetted')
})
