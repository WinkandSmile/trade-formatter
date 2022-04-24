import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <p>Copyright &copy; 2022</p>
    <Link to='/about'>About</Link><br></br>
    <a href='https://twitter.com' target="_blank">Twitter</a>
    </footer>
  )
}

export default Footer