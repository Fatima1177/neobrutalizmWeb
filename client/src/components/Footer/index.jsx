import './style.scss'
import {useTranslation} from 'react-i18next'


import React from 'react'

const Footer = () => {
  const {t} = useTranslation()

  return (
    <div className='footer-sec'>
        <div className="big-box">
            <div className="mini-box">
                <ul>
                    <h2>{t('catalog')}</h2>
                    <li>{t('payday')}</li>
                    <li>{t('seller')}</li>
                    <li>{t('bottom')}</li>
                    <li>{t('top')}</li>
                    <li>{t('bags')}</li>
                    <li>{t('accessories')}</li>
                </ul>
            </div>
            <div className="mini-box">
                <ul>
                    <h2>{t('info')}</h2>
                    <li>{t('aboutUs')}</li>
                    <li>{t('stockist')}</li>
                    <li>{t('lifestyle')}</li>
                    <li>{t('fags')}</li>
                    <li>{t('contact')}</li>
                    <li>{t('business')}</li>
                </ul>
            </div>
            <div className="mini-box">
                <ul>
                    <h2>{t('legal')}</h2>
                    <li>{t('deliveries')}</li>
                    <li>{t('terms')}</li>
                    <li>{t('refund')}</li>
                    <li>{t('privacy')}</li>
                </ul>
            </div>
            <div className="inpt-box">
                <h1>{t('inptH1')}</h1>
                <input type="text" placeholder='Whats your email address?'/>
                <button>{t('subscribe')}</button>
            </div>
            
        </div>

    </div>
    
  )
}

export default Footer