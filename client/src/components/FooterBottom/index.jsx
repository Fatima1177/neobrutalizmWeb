import './style.scss'
import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'



const FotterBottom = () => {
  return (
    <div className='footer-bottom'>
        <h1>© Gemash V2 2023 all right reserved.</h1>
        <div className="links">
          <img src={icon4} alt="" />
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
        </div>

    </div>
  )
}

export default FotterBottom