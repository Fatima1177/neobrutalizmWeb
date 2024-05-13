import './style.scss'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const Header = () => {
    const {t} = useTranslation()

  return (
    <header>
        <div className="linkBox">
            <Link>
                <span>{t('payday')}</span>
            </Link>
        </div>
        
        <div className="linkBox">
            <Link>
                <span>{t('seller')}</span>
            </Link>
        </div>

        <div className="linkBox">
            <Link>
                <span>{t('top')}</span>
            </Link>
        </div>

        <div className="linkBox">
            <Link>
                <span>{t('bottom')}</span>
            </Link>
        </div>

        <div className="linkBox">
            <Link>
                <span>{t('lifestyle')}</span>
            </Link>
        </div>
        <div className="linkBox" >
            <Link>
                <span>{t('about')}</span>
            </Link>
        </div>
        


    </header>
  )
}

export default Header