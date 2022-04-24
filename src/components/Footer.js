import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <p>Copyright &copy; 2022</p>
    <Link to='/about'>About</Link><br></br>
    <a href='https://traderbeasts.xyz' target="_blank" rel="noreferrer">TraderBeasts</a><br></br>
    <a href='https://twitter.com' target="_blank" rel="noreferrer">Twitter</a>
    </footer>
  )
}

export default Footer