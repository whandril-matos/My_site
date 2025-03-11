'use client';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './LanguageSwitcher.scss'; // Importe o arquivo SCSS

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18next.changeLanguage(lang);
    };

    return (
        <div className="language-switcher">
            <select
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-select"
            >
                <option value={'en'}>EN-US</option>
                <option value={'pt'}>PT-BR</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
