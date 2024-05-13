import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const resources = {
    en: {
        translation: {
            payday: 'Payday Deals',
            seller: 'Best Seller',
            top: "Top",
            bottom: "Bottom",
            lifestyle: "Lifestyle",
            about: "About",

            collection: "Gelora Collection",
            selaras: "Selaras Collection",
            camo: "Camo Collection",

            signH1: "Sign up to the newsletter",
            signP: "Sign up to our newsletter to receive discounts, offers, and early access to sale, and whole lot of other fun things.",
            subscribe: "Subscribe",

            lifestyleH2: "The 5 Golden Rules of Athleisure: Is It Really Acceptable to Wear Yoga Pants All Day Long?",
            lifestyleP: "Blame the designer athleisure boom or the annual glut of New Year’s resolutions to hit the gym on the regular, but this month you can expect to see even more women than usual wearing workout gear.",
            lifestyleButton: "Read Article",
            miniCardH2: 'he 5 Golden Rules of Athleisure: Is It Really Acceptable to Wear Yoga Pants All Day Long?',
            miniCardP: 'Blame the designer athleisure boom or the annual glut of New Year’s resolutions to hit the gym on the regular, but this month you can expect to see even more women than usual wearing workout gear.',

            catalog: "Catalog",
            bags: "Bags",
            accessories: "Accessories",
            info: "Customer Info",
            aboutUs: "About Us",
            stockist: "Stockist",
            fags: "FAQS",
            contact: "Contact",
            business: " For Business",

            legal: "Legal Pages",
            deliveries: "Deliveries & Returns",
            terms: "Terms & Conditions",
            refund: "Refund Policy",
            privacy: "Privacy Policy",
            inptH1: "Sign Up For Updates",




            
        },
    },
    az: {
        translation: {
            payday: 'Maaş',
            seller: 'Satıcı',
            top: "Top",
            bottom: "Əsas",
            lifestyle: "Həyat tərzi",
            about: "Haqqımizda",

            collection: "Gelora Kolleksiyası",
            selaras: "Selaras Kolleksiyası",
            camo: "Camo Kolleksiyası",

            signH1: "Xəbər bülleteni üçün qeydiyyatdan keçin",
            signP: "Endirimlər, təkliflər və satışa erkən giriş və bir çox başqa əyləncələr əldə etmək üçün bülletenimizə abunə olun.",
            subscribe: "Abunə ol",

            lifestyleH2: "İdmanın 5 Qızıl Qaydası: Bütün gün Yoqa Şalvarını Geymək Doğrudanmı Məqbuldur?",
            lifestyleP: "",
            lifestyleButton: "Read Article",
            miniCardH2: 'İdmanın 5 Qızıl Qaydası: Bütün gün Yoqa Şalvarını Geymək Doğrudanmı Məqbuldur?',
            miniCardP: 'İdman zalına müntəzəm olaraq getmək üçün dizaynerlərin idman bumunu və ya Yeni il qərarlarının illik çoxluğunu günahlandırın, lakin bu ay məşq alətləri taxan adi haldan daha çox qadın görəcəyinizi gözləyə bilərsiniz.',

            catalog: "Kataloq",
            bags: "Çantalar",
            accessories: "Aksesuarlar",
            info: "Müştəri Məlumatı",
            aboutUs: "Bizim haqqımızda",
            stockist: "Stokçu",
            fags: "Tez-tez verilən suallar",
            contact: "Əlaqə",
            business: "İş üçün",

            legal: "Hüquqi Səhifələr",
            deliveries: "Çatdırılma & Qaytarma",
            terms: "Şərtlər və qaydalar",
            refund: "Geri qaytarma siyasəti",
            privacy: "Gizlilik Siyasəti",
            inptH1: "Yeniləmələr üçün Qeydiyyatdan Keçin",
        },
    },
    ru: {
        translation: {
            payday: 'Зарплата',
            seller: 'Бестселлер',
            top: "Топ",
            bottom: "Основа",
            lifestyle: "Стиль жизни",
            about: "О нас",

            collection: "Коллекция Gelora",
            selaras: "Коллекция Selaras",
            camo: "Коллекция Camo",

            signH1: "Подпишитесь на рассылку",
            signP: "Подпишитесь на нашу рассылку, чтобы получать скидки, предложения, ранний доступ к распродажам и множество других интересных вещей.",
            subscribe: "Подписаться",

            lifestyleH2: "5 золотых правил спорта: действительно ли приемлемо носить штаны для йоги весь день?",
            lifestyleP: "Вините в этом бум дизайнерского спортивного досуга или ежегодное избыток новогодних обещаний регулярно посещать спортзал, но в этом месяце вы можете ожидать увидеть даже больше женщин, чем обычно, в спортивном снаряжении.",
            lifestyleButton: "Читать статью",
            miniCardH2: '5 золотых правил спорта: действительно ли приемлемо носить штаны для йоги весь день?',
            miniCardP: 'Вините в этом бум дизайнерского спортивного досуга или ежегодное избыток новогодних обещаний регулярно посещать спортзал, но в этом месяце вы можете ожидать увидеть даже больше женщин, чем обычно, в спортивном снаряжении.',

            catalog: "Каталог",
            bags: "Сумки",
            accessories: "Аксессуары",
            info: "Информация о клиенте",
            aboutUs: "О нас",
            stockist: "Продавец",
            fags: "Часто задаваемые вопросы",
            contact: "Контакты",
            business: "Для бизнеса",

            legal: "Юридические страницы",
            deliveries: "Доставка & возврат",
            terms: "Условия использования",
            refund: "Политика возврата",
            privacy: "Политика конфиденциальности",
            inptH1: "Подпишитесь на обновления",


        },
    }
}

i18n.use(initReactI18next).init({
    lng: 'en',
    resources,
})
export default i18n