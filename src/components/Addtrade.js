import {useState } from 'react'

const Addtrade = ( { onAdd }) => {
    const [instrument, setInstrument] = useState('')
    const [direction, setDirection] = useState('')
    const [entrydt, setEntrydt] = useState('')
    const [entryprice, setEntryprice] = useState('')
    const [takeprofit, setTakeprofit] = useState('')
    const [stoploss, setStoploss] = useState('')
    const [tarpercent, setTarpercent] = useState('')
    const [gtcdt, setGtcdt] = useState('')



const onSubmit = (e) => {
    e.preventDefault()

    if (!instrument) {
        alert ('Please add trade information')
        return
    }

    onAdd( { instrument, entrydt, direction, entryprice, takeprofit, stoploss, tarpercent, gtcdt})

    setInstrument('')
    setEntrydt('')
    setDirection('')
    setEntryprice('')
    setTakeprofit('')
    setStoploss('')
    setTarpercent('')
    setGtcdt('')
}

  return (
    <form className='add-form' onSubmit = {onSubmit}>
        <div className='form-control'>
        <label>What's the trade?</label>
        <input 
        type='text' 
        placeholder='Add Instrument' 
        value={instrument} 
        onChange={(e) => setInstrument(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Date and Time</label>
        <input type='text' 
        placeholder='Date and Time' 
        value={entrydt} 
        onChange={(e) => setEntrydt(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Trade Direction</label>
        <input type='text' 
        placeholder='Buy or Sell?' 
        value={direction} 
        onChange={(e) => setDirection(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Entry Price</label>
        <input type='text' 
        placeholder='Entry price' 
        value={entryprice} 
        onChange={(e) => setEntryprice (e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Price Target</label>
        <input type='text' placeholder='Profit Target' 
        value={takeprofit} 
        onChange={(e) => setTakeprofit(e.target.value)}
        />        
        </div>
        <div className='form-control'>
        <label>Stop Loss</label>
        <input type='text' placeholder='Stop Loss' 
        value={stoploss} 
        onChange={(e) => setStoploss(e.target.value)}
        />  
        </div>
        <div className='form-control'>
        <label>Trade Account Risk % of Trade:</label>
        <input type='text' placeholder='Risk percentage %' 
        value={tarpercent} 
        onChange={(e) => setTarpercent(e.target.value)}
        />  
       </div>  
        <div className='form-control'>
        <label>Good til Close: (trade review date)</label>
        <input type='text' placeholder='Good until Close Date and Time' 
        value={gtcdt} 
        onChange={(e) => setGtcdt(e.target.value)}
        />  
        </div>
        


        <input type='submit' value='Enter Trade Info'
        className='btn' />

    </form>
  )
}

export default Addtrade