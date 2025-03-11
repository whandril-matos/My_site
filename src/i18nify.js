import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../public/locales/en/common.json'; // Verifique se esse caminho está correto
import ptTranslation from '../public/locales/pt/common.json';

const resources = {
    en: {
        translation: enTranslation, // Corrigido de "traslation" para "translation"
    },
    pt: {
        translation: ptTranslation, // Corrigido de "traslation" para "translation"
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        debug: true,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // Corrigido de "escapeVlue" para "escapeValue"
        },
        returnObjects: true,
    });

export default i18n;
