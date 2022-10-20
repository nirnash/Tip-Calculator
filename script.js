let billInputDiv = document.getElementById('billTotalInput')
let tipInputDiv = document.getElementById('tipInput')
let numOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonDiv = document.getElementById('perPersonTotal')

let numOfPeople = Number(numOfPeopleDiv.innerText)

const calculateBill = () => {
  bill = Number(billInputDiv.value)
  tip = tipInputDiv.value / 100
  tipTotal = bill * tip
  total = tipTotal + bill
  perPerson = (total / numOfPeopleDiv.innerText).toFixed(2)
  perPersonDiv.innerText = '$' + perPerson
}

const increasePeople = () => {
  numOfPeople = Number(numOfPeopleDiv.innerText) + 1
  numOfPeopleDiv.innerText = numOfPeople
  calculateBill()
}

const decreasePeople = () => {
  if (numOfPeople <= 1) {
    return
  }
  numOfPeople = Number(numOfPeopleDiv.innerText) - 1
  numOfPeopleDiv.innerText = numOfPeople
  calculateBill()
}