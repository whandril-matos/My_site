'use client';

import './style.scss';
import Part1 from './componets/bannersStart/type2/cardStart';
import Navbar from './componets/Navbar/type2/navbar';
import Footer from './componets/footer/type2/Footer';
import List from './componets/list/type5/list';
import CardInfo from './componets/FullPageCard/type3/type3';
import RoadMapExperience from './componets/roadMap/type1/type1';
import ShowProjects from './componets/roadMap/type2/type2';
import Contacts from './componets/contact/type1/ContactLinks';

import { useTranslation } from 'react-i18next';

// TO ADD NEW GENERAL COMPONENTS
// NEW BANNERS START TYPE 2
// NEW NAVBAR TYPE 2
// NEW LIST TYPE 5
// NEW PAGE CARD TYPE 3
// ROAD MAP TO WORK TYPE1
export default function Home() {
    const { t }: { t: (key: string) => string } = useTranslation();

    
    return (
        <>
            <Navbar
                nameLogo={t('nameLogo')}
                links={t('links') as unknown as []}
            />
            <a id="home"></a>
            <Part1
                ctaLink={t('bannerStart.ctaLink')}
                ctaText={t('bannerStart.ctaText')}
                description={t('bannerStart.description')}
                name={t('bannerStart.name')}
                role={t('bannerStart.role')}
            />
            <a id="about"></a>
            <CardInfo
                title={t('iconProfessional.title')}
                description={t('iconProfessional.description')}
                imageUrl={t('iconProfessional.imageUrl')}
                imageAlt={t('iconProfessional.imageAlt')}
            />
            <a id="projects"></a>
            <ShowProjects
                projects={t('project.projects') as unknown as []}
                button1={t('project.button1')}
                button2={t('project.button2')}
                close={t('project.close')}
                title={t('project.title')}
            />
            <a id="skills"></a>
            <List
                title={t('list.title')}
                techs={t('list.techs') as unknown as []}
            />
            <a id="contacts"></a>
            <Contacts
                title={t('contact.title')}
                linkedin={t('contact.linkedin')}
                github={t('contact.github')}
                twitter={t('contact.twitter')}
                instagram={t('contact.instagram')}
                youtube={t('contact.youtube')}
                email={t('contact.email')}
                phone={t('contact.phone')}
                copyMensage={t('contact.copyMensage')}
                copyOn={t('contact.copyOn')}
                emailTextDefaut={t('contact.emailTextDefaut')}
                phoneTextDefaut={t('contact.phoneTextDefaut')}
            />
            <a id="experience"></a>
            <RoadMapExperience
                titleButtom1={t('infosRoadMap.titleButton1')}
                titleButtom2={t('infosRoadMap.titleButton2')}
                title={t('infosRoadMap.titleRoadMap')}
                experiences={t('infosRoadMap.roadMapWork') as unknown as []}
            />
            <Footer
                aboutText={t('footer.aboutText')}
                aboutTitle={t('footer.aboutTitle')}
                copyrightText={t('footer.copyrightText')}
                followUsTitle=""
                quickLinksTitle=""
                socialLinks={{}}
                quickLinks={[
                    { label: '', href: '' },
                    { label: '', href: '' },
                    { label: '', href: '' },
                ]}
            />
        </>
    );
}
