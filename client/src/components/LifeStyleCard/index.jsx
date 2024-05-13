import  './style.scss'
 import React from 'react'
 import lifestyle1 from '../../assets/lifeStyle/lifestyle1.svg'
 import lifestyle2 from '../../assets/lifeStyle/lifestyle2.svg'
 import {useTranslation} from 'react-i18next'

 
 const LifeStyleCard = () => {
  const {t} = useTranslation()
  
   return (
     <section className='big-card'>
        <div className="mini-card">
            <img src={lifestyle1} alt="" />
            <div className="txt-sec">
                <h2>{t('lifestyleH2')}</h2>
                <p>{t('lifestyleP')}</p>
            </div>
            <button>{t('lifestyleButton')}</button>
        </div>

        <div className="mini-card">
            <img src={lifestyle2} alt="" />
            <div className="txt-sec">
                <h2>{t('miniCardH2')}</h2>
                <p>{t('miniCardP')}</p>
            </div>
            <button>{t('lifestyleButton')}</button>
        </div>

        


     </section>
   )
 }
 
 export default LifeStyleCard