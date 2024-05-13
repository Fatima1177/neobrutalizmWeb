import  './style.scss'
import {useTranslation} from 'react-i18next'


const SignUpSec = () => {
  const {t} = useTranslation()
  return (
    <section className='signUp'>
        <div className="txt-sec">
            <h1>{t('signH1')}</h1>
            <p>{t('signP')}</p>
        </div>
        <div className="inpt-sec">
            <input type="text" placeholder='Whats your email address?'/>
            <button>{t('subscribe')}</button>
        </div>
        
    </section>
  )
}

export default SignUpSec