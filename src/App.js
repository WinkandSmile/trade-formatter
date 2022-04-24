import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Trades from './components/Trades'
import Addtrade from './components/Addtrade'
import About from './components/About'


const App = () => {
  const[showAddTrade, setShowAddTrade] = useState (false)
  const [trades, setTrades] = useState([])

  useEffect(() =>{
      const getTrades = async () => {
        const tradesFromServer = await fetchTrades()
        setTrades(tradesFromServer)
      }

      getTrades()
  }, [])

  // Fetch trades ** instead of using json.server we should use whatever REST api and language and server we choose. 
  const fetchTrades = async () => {
    const res = await fetch('https://my-json-server.typicode.com/WinkandSmile/trade-formatter/trades')
    const data = await res.json()

    return data
  }
  // Add trades
  // Add Task
  const addTrade = async (trade) => {
    const res = await fetch('https://my-json-server.typicode.com/WinkandSmile/trade-formatter/trades', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(trade),
    })

    const data = await res.json()

    setTrades([...trades, data])
    // Add Trade
      // const addTrade = (trade) => {
      //   const id = Math.floor(Math.random() * 10000) +1
      //   const newTrade = {id, ...trade }
      //   setTrades([...trades, newTrade])
      //}
  }

  
    // delete Trade

    const deleteTrade = async (id) => {
      await fetch(`https://my-json-server.typicode.com/WinkandSmile/trade-formatter/trades/${id}`, 
      {method: 'DELETE'
    })
      setTrades(trades.filter((trade)=> trade.id !== 
      id))
    }

//export to copy


  return (
    <Router>
      <div className='container'>
        <Header
              onAdd={() => setShowAddTrade
            (!showAddTrade)} 
            showAdd={showAddTrade}
            
            />
        <Routes>
          <Route
            path='/'
            element={
              <>
            {showAddTrade && <Addtrade onAdd={addTrade} />
            }
              {trades.length > 0 ? (
                <Trades trades={trades} onDelete=
              {deleteTrade} /> 
              ): (
            'No trades to show'
            )}

            </>
          }
        />
        <Route path='/about' element={<About />} />
        </Routes>
      <Footer />
      </div>
      </Router>
      )
      }
      


export default App
