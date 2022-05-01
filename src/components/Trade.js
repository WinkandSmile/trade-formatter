import { FaTimes } from 'react-icons/fa'

const Trade = ({ trade, onDelete }) => {
  return (
    <div className='trade'>
        <h3>{trade.instrument} trade info: <br></br>
        Copy 'n paste the text below (inc @traderbeasts) into a new tweet, and send. <FaTimes style={ { color: 
          'red', cursor: 'pointer'}}
          onClick= {() => onDelete(trade.id)}  
          />
          </h3>
        <p>@traderbeasts,</p>
        <p>Unique trade ID, {trade.id},</p>
        <p>Instrument, {trade.instrument},</p>             
        <p>Entry Date/Time, {trade.entrydt},</p>
        <p>Direction, {trade.direction},</p>    
        <p>Entry Price, {trade.entryprice},</p>
        <p>Price Target, {trade.takeprofit},</p>
        <p>Stop Loss, {trade.stoploss},</p>
        <p>Trade Account Risk (%), {trade.tarpercent},</p>   
        <p>Good til Close Date/Time, {trade.gtcdt},</p>  
    
        </div>
   
  )
  
}

export default Trade

