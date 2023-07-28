import React, {useState} from 'react'

// приложение которое делит счёт на количство гостей используя useState

export default function App() {
  const [result, setResult] = useState('no data')
  const [bill, setBill] = useState('')
  const [guests, setGuests] = useState('')
  let moneyPerGuest = null

  const calculate = () => {
    if (bill.trim() === '' || guests.trim() === '') {
      alert('Not enough data, please check your introduced data.')
    } else {
      moneyPerGuest = bill / guests
      setResult(Number(Math.round(moneyPerGuest)))
      setBill('')
      setGuests('')
    }
  }

  return (
    <div className={'main'}>
      <h1>Bill Calculator</h1>
      <input type="text" placeholder={'Bill amount...'} value={bill} onChange={(e) => setBill(e.target.value)}/>
      <input type="text" placeholder={'Amount of guests...'} value={guests} onChange={(e) => setGuests(e.target.value)}/>
      <div className={'result'}>Every guest pays:   ~{result}</div>
      <button onClick={calculate}>Calculate!</button>
    </div>
  )
}
