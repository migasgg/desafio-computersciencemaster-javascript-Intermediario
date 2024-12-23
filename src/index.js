const firstDateInput = document.querySelector("#firstDate")
const secondDateInput = document.querySelector("#secondDate")
const calendar = document.querySelector("tbody")
const buttonElement = document.querySelector("button")
const daysCalender = Array.from(calendar.children).map((tr) => tr.children)

function resetStyles() {
  for (let i in daysCalender) {
    for (let j in daysCalender[i]) {
      const day = daysCalender[i][j]
      const contentDay = Number(day.textContent)
      if (day.textContent) {
        day.style.background = "white"
      }
    }
  }
}

function setContent(firstDayValue, secondDayValue) {
  for (let i in daysCalender) {
    for (let j in daysCalender[i]) {
      const day = daysCalender[i][j]
      const contentDay = Number(day.textContent)
      if (day.textContent) {
        if (firstDayValue === contentDay || secondDayValue === contentDay) {
          day.style.background = "green"
        } else if (firstDayValue < contentDay && secondDayValue > contentDay) {
          day.style.background = "blue"
        }
      }
    }
  }
}

function dateValidation(firstDateValue, secondDateValue) {
  const firstDate = firstDateValue.split("-")
  const secondDate = secondDateValue.split("-")
  return (
    Number(firstDate[2]) > Number(secondDate[2]) ||
    Number(firstDate[1]) > Number(secondDate[1]) ||
    Number(firstDate[0]) > Number(secondDate[0])
  )
}

buttonElement.onclick = (ev) => {
  ev.preventDefault()

  const firstDateValue = firstDateInput.value
  const firstDayValue = Number(firstDateValue.split("-")[2])
  const secondDateValue = secondDateInput.value
  const secondDayValue = Number(secondDateValue.split("-")[2])

  resetStyles()
  if (dateValidation(firstDateValue, secondDateValue)) {
    return alert(
      "A primeira data não pode ser uma data que venha antes da primeira data!"
    )
  }
  setContent(firstDayValue, secondDayValue)
}
