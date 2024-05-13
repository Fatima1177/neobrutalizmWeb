import "./style.scss"
import {Link} from 'react-router-dom'
import girls from '../../assets/collection/girls.svg'
import arrow from '../../assets/icons/arrow.svg'
import {useTranslation} from 'react-i18next'

const 
CollectionSec = () => {
    const {t} = useTranslation()

  return (
    <div className="CollectionSec">
        <div className="linkBox">
            <div className="miniBox">
                <Link>
                    <span>{t('collection')}</span>
                    <img src={arrow} alt="" />
                </Link>
            </div>
            
            <div className="miniBox">
                <Link>
                    <span>GEMASH X Cupicupita</span>
                    <img src={arrow} alt="" />
                </Link>
            </div>
            <div className="miniBox">
                <Link>
                    <span>{t('selaras')}</span>
                    <img src={arrow} alt="" />
                </Link>
            </div>
            <div className="miniBox">
                <Link>
                    <span>{t('camo')}</span>
                    <img src={arrow} alt="" />
                </Link>
            </div>
        </div>
        <div className="imgBox">
            <img src={girls} alt="" />
        </div>
    </div>
  )
}

export default CollectionSec