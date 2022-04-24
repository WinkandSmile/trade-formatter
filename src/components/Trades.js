import Trade from './Trade'

const Trades = ( { trades, onDelete}) => {
 return (
<>
{trades.map((trade, index) => (
<Trade key={index} trade={trade}
    onDelete={onDelete}
    />
    ))
    }
</>
  )
}

export default Trades