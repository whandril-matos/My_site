'use client';

import './style.scss';
import Part1 from '../../app/componets/bannersStart/type2/cardStart';
import Navbar from '../../app/componets/Navbar/type2/navbar';
import Footer from '../../app/componets/footer/type2/Footer';
import List from '../../app/componets/list/type5/list';
import CardInfo from '../../app/componets/FullPageCard/type3/type3';
import RoadMapExperience from '../../app/componets/roadMap/type1/type1';
import ShowProjects from '../../app/componets/roadMap/type2/type2';
import Contacts from '../../app/componets/contact/type1/ContactLinks';

const jsonScope = {
    bannerStart: {
        ctaLink: '#about',
        ctaText: 'Vamos começar!',
        description: 'Programador Front-End há mais de 6 anos.',
        name: 'Olá, me chamo Whandril Matos!',
        role: 'Transformando sonhos em negócios digitais.',
    },
    nameLogo: 'W.M.R',
    links: [
        { label: 'Início', href: '#home' },
        { label: 'Sobre', href: '#about' },
        { label: 'Projetos', href: '#projects' },
        { label: 'Habilidades ', href: '#skills' },
        { label: 'Contato', href: '#contacts' },
        { label: 'Experiência', href: '#experience' },
    ],
    list: {
        title: 'Tecnologias',
        techs: [
            { name: 'HTML5', iconName: 'HTML5' },
            { name: 'CSS3', iconName: 'CSS3' },
            { name: 'SCSS', iconName: 'SCSS' },
            { name: 'JavaScript', iconName: 'JavaScript' },
            { name: 'TypeScript', iconName: 'TypeScript' },
            { name: 'React', iconName: 'React' },
            { name: 'Next.js', iconName: 'Next.js' },
            { name: 'Node.js', iconName: 'Node.js' },
            { name: 'Python', iconName: 'Python' },
        ],
    },
    iconProfecional: {
        title: 'Quem sou?',
        description:
            'Desenvolvedor Front End com mais de 6 anos de experiência em desenvolvimento web. Especializado em criar interfaces intuitivas e visualmente atraentes que melhoram a experiência do usuário e impulsionam as conversões. Apaixonado por tecnologia e inovação, possuo sólidos conhecimentos em desenvolvimento web. Comprometido em entregar soluções de alta qualidade.',
        imageUrl: '/iconPerfil.png',
        imageAlt: 'Ícone de Desenvolvimento',
    },
    infosRoadMap: {
        titleRoadMap: 'Experiência profissional',
        titleButtom1: 'mostrar mais',
        titleButtom2: 'mostrar menos',
        roadMapWork: [
            {
                companyName: 'Reconhecer Padrão, Portugal',
                position: 'Desenvolvedor Front End (Remoto)',
                description: [
                    'A empresa de mídia precisava de um desenvolvedor para criar websites personalizados sob demanda e garantir a atualização contínua de conteúdos, melhorando a experiência do usuário e a eficiência do atendimento ao cliente.',
                    'Minha responsabilidade era desenvolver sites dinâmicos e intuitivos, além de manter e atualizar postagens recorrentes. Utilizei HTML5, CSS3, JavaScript e WordPress, sempre aplicando princípios de UX Design para aprimorar a usabilidade e a retenção dos visitantes.',
                    'Desenvolvi e implementei layouts responsivos e otimizados para diferentes dispositivos.',
                    'Melhorei a estrutura de navegação e usabilidade dos sites, garantindo uma experiência mais fluida.',
                    'Automatizei atualizações de postagens no WordPress, reduzindo o tempo gasto em tarefas manuais.',
                    'Otimizei o carregamento das páginas, diminuindo o tempo de espera e melhorando a performance geral.',
                    'Aumento de 12,63% na retenção de usuários, impulsionado pelas melhorias de UX e carregamento.',
                    'Redução de 2,34% nos problemas de atendimento ao cliente, devido à automação e melhor organização das informações.',
                ],
                startDate: 'Janeiro 2024',
                endDate: 'Janeiro 2025',
            },
            {
                companyName: 'Quality Digital, Brasil',
                position: 'Desenvolvedor front end (Remoto)',
                description: [
                    'Criação e manutenção de sites baseados em imagens utilizando CSS3, HTML5, JavaScript e Python.',
                    'Implementação de melhorias para otimização e responsividade de websites.',
                    'Trabalho em estreita colaboração com designers para garantir a fidelidade ao protótipo e a excelência visual.',
                    'Com a minha participação, os projetos foram concluídos 1,3% mais rápido, e o aspecto visual do site proporciona uma experiência fluida ao usuário(feedback coletado',
                ],
                startDate: 'Outubro 2023',
                endDate: 'Dezembro 2023',
            },
            {
                companyName: 'Freelancer, Mundial',
                position: 'desenvolvedor python de automação (Remoto)',
                description: [
                    'Clientes individuais precisavam de soluções personalizadas desenvolvidas em Python para atender às suas necessidades específicas, desde automação de tarefas até aplicações web e processamento de dados.',
                    'Meu papel era analisar as necessidades do cliente, projetar e desenvolver sistemas eficientes e escaláveis, garantindo que fossem fáceis de usar e atenderiam aos requisitos propostos.',
                    'Realizei levantamentos de requisitos para entender as dores e expectativas de cada cliente.',
                    'Desenvolvi sistemas sob medida, utilizando Python e frameworks adequados, como Django e Flask.',
                    'Implementei automações de processos, otimizando fluxos de trabalho e reduzindo tarefas manuais repetitivas.',
                    'Criei documentações e treinamentos para garantir que os clientes pudessem utilizar e manter os sistemas facilmente.',
                    'Redução de até 40% no tempo de execução de processos manuais por meio de automação.',
                    'Aumento da eficiência operacional dos clientes, eliminando gargalos e otimizando fluxos de trabalho.',
                    'Satisfação elevada dos clientes, garantindo soluções funcionais e adaptáveis às suas necessidades.',
                ],
                startDate: 'Junho  2019',
                endDate: 'Janeiro 2020',
            },
            {
                companyName: 'Beliza, Brasil',
                position: 'Desenvolvedor front end (Remoto)',
                description: [
                    'Otimização de Desempenho: Reduzi o tempo de carregamento do site em 35%, implementando técnicas como lazy loading, otimização de imagens e minificação de arquivos CSS e JavaScript.',
                    'Implementação de Novos Recursos: Desenvolvi funcionalidades que melhoraram a conversão, incluindo um sistema de checkout otimizado, filtros avançados de produtos e notificações personalizadas, aumentando as conversões em 15%.',
                    'Colaboração em Equipe: Trabalhei com um time de 12 profissionais, participando de dailies, code reviews e sprints ágeis para garantir entregas consistentes e de alta qualidade',
                    'Trabalho Remoto e Metodologias Ágeis: Utilizei Scrum e Kanban para organizar e priorizar tarefas, garantindo a entrega de features dentro dos prazos estabelecidos.',
                ],
                startDate: 'Janeiro 2017',
                endDate: 'Janeiro 2022',
            },
        ],
    },
    project: {
        title: 'Projetos',
        button1: 'Repositório do projeto',
        button2: 'Site do projeto',
        close: 'Voltar',
        projects: [
            {
                id: 1,
                title: 'Cronos Contabilidade',
                image: '/cronosCont.png',
                description:
                    'Uma landing page dinâmica desenvolvida com foco em desempenho, modularidade e reutilização de código. Utilizando React para estruturar a interface de forma dinâmica e Next.js para otimizar o carregamento da página, o site apresenta uma organização modular eficiente. O estilo é gerenciado com SCSS (Sass) para maior flexibilidade e otimização, enquanto TypeScript pode ser integrado para garantir tipagem estática e segurança no código. A estrutura é baseada em componentes reutilizáveis, permitindo fácil manutenção e escalabilidade, com props dinâmicas que possibilitam personalização sem necessidade de refatoração. O site é dividido em seções modulares, incluindo banner principal, perfil da empresa, serviços oferecidos, clientes atendidos e rodapé com informações de contato. Entre os diferenciais técnicos, destacam-se a flexibilidade para atualização de conteúdo, código organizado seguindo boas práticas, otimização de desempenho, SEO aprimorado e design responsivo adaptável a diversos dispositivos. Este projeto é um excelente exemplo de desenvolvimento front-end moderno, combinando design intuitivo, boas práticas de código e eficiente componentização para oferecer uma experiência profissional e fluida.',
                repoLink:
                    'https://github.com/whandril-matos/Cronos-_Accounting',
                liveLink: 'https://cronos-accounting.vercel.app/',
            },
            {
                id: 2,
                title: 'Banner The Last Of Us',
                image: '/theLastOfUs.png',
                description:
                    'Este projeto é uma homenagem ao universo de The Last of Us, trazendo uma experiência digital envolvente através da combinação de HTML, CSS e JavaScript. A estrutura do site é construída em HTML para garantir uma navegação fluida e intuitiva, enquanto o CSS é utilizado para criar um design imersivo que reflete a atmosfera do jogo. JavaScript adiciona interatividade, tornando a experiência dinâmica e envolvente. Para otimizar a performance e eficiência, foram aplicados conceitos de Big-O Notation, garantindo um carregamento rápido e responsivo em diferentes dispositivos. O resultado é um espaço online que captura a essência da franquia e proporciona uma imersão única para fãs e novos exploradores desse universo pós-apocalíptico.',
                repoLink:
                    'https://github.com/whandril-matos/site_the_last_of_us',
                liveLink: 'https://site-the-last-of-us-opal.vercel.app/',
            },
            {
                id: 3,
                title: 'Projeto Handyman',
                image: '/HandManProject.png',
                description:
                    'Speed Repair é uma landing page moderna e otimizada, desenvolvida para apresentar os serviços de manutenção e reparo residencial da empresa. Construída com React e SCSS, proporciona uma experiência fluida, responsiva e de carregamento rápido, garantindo uma navegação intuitiva para os usuários. A estrutura do site inclui uma seção de introdução em formato de card de página inteira, uma lista visualmente atraente de serviços como carpintaria, encanamento, elétrica e jardinagem, além de uma explicação detalhada sobre o método de trabalho da empresa. Conta também com uma seção de perguntas frequentes em estilo acordeão para melhor organização da informação, um chamado para ação incentivando o contato via WhatsApp ou telefone e um rodapé com informações adicionais e links úteis. O projeto utiliza React/Next para uma estrutura modular e reutilizável, SCSS para um design profissional e responsivo, e gerenciamento de estado com useState e useEffect para controle eficiente do carregamento da página. Além disso, simula uma API local para facilitar a manipulação de dados. Speed Repair é uma landing page eficiente e objetiva, projetada para atrair clientes de forma rápida e eficaz, destacando os serviços de reparo com clareza e usabilidade.',
                repoLink: 'https://github.com/whandril-matos/HandManProject',
                liveLink: 'https://hand-man-project.vercel.app/',
            },
            {
                id: 4,
                title: 'Alpine Adventure',
                image: '/aupinist.png',
                description:
                    'Alpine Adventure é um site moderno e responsivo, projetado para inspirar e informar entusiastas do montanhismo. A plataforma apresenta conteúdos sobre a emoção de escalar montanhas, dicas práticas, recomendações de equipamentos e uma introdução ao mundo do alpinismo, criando uma experiência envolvente para os usuários. A estrutura do site é baseada em HTML5, garantindo um código semântico e bem organizado. O design é aprimorado com CSS3 e Bootstrap 5.1, proporcionando um layout responsivo e uma interface visualmente atraente. Para tornar a navegação mais interativa, são utilizadas animações e funcionalidades dinâmicas por meio de JavaScript, incluindo menus expansíveis e efeitos suaves de transição. A otimização para SEO e acessibilidade melhora a experiência do usuário, garantindo que o site seja facilmente encontrado em buscas e acessível para diferentes perfis de visitantes. Imagens de alta qualidade e uma tipografia moderna complementam o design, reforçando a identidade visual e a imersão no universo do montanhismo.',
                repoLink: 'https://github.com/whandril-matos/aupinist_site',
                liveLink: 'https://aupinist-site.vercel.app/',
            },
        ],
    },
};

export default function CompletePage() {
    return (
        <>
            <>
                <Navbar nameLogo={jsonScope.nameLogo} links={jsonScope.links} />
                <a id="home"></a>
                <Part1
                    ctaLink={'a'}
                    ctaText={jsonScope.bannerStart.ctaText}
                    description={jsonScope.bannerStart.description}
                    name={jsonScope.bannerStart.name}
                    role={jsonScope.bannerStart.role}
                />
                <a id="about"></a>
                <CardInfo
                    title={jsonScope.iconProfecional.title}
                    description={jsonScope.iconProfecional.description}
                    imageUrl={jsonScope.iconProfecional.imageUrl}
                    imageAlt={jsonScope.iconProfecional.imageAlt}
                />
                <a id="projects"></a>
                <ShowProjects
                    projects={jsonScope.project.projects}
                    button1={jsonScope.project.button1}
                    button2={jsonScope.project.button2}
                    close={jsonScope.project.close}
                    title={jsonScope.project.title}
                />
                <a id="skills"></a>
                <List
                    title={jsonScope.list.title}
                    techs={jsonScope.list.techs}
                />
                <a id="contacts"></a>
                <Contacts
                    title="Meus Contatos"
                    linkedin="https://www.linkedin.com/in/seu-perfil"
                    github="https://github.com/seu-usuario"
                    twitter="https://twitter.com/seu-perfil"
                    instagram="https://www.instagram.com/seu-perfil"
                    youtube="https://www.youtube.com/c/seu-canal"
                    email="seuemail@gmail.com"
                    phone="+55 11 99999-9999"
                />
                <a id="experience"></a>
                <RoadMapExperience
                    titleButtom1={jsonScope.infosRoadMap.titleButtom1}
                    titleButtom2={jsonScope.infosRoadMap.titleButtom2}
                    title={jsonScope.infosRoadMap.titleRoadMap}
                    experiences={jsonScope.infosRoadMap.roadMapWork}
                />
                <Footer
                    aboutText="Apresente seu trabalho ao mundo!"
                    aboutTitle="Vamos construir algo incrível juntos"
                    copyrightText="Todos os direitos reservados"
                    followUsTitle=""
                    quickLinksTitle=""
                    socialLinks={{}}
                    quickLinks={[
                        { label: '', href: 'https://wa.me/5591999999999' },
                        { label: '', href: 'https://facebook.com/seuPerfil' },
                        { label: '', href: 'https://instagram.com/seuPerfil' },
                    ]}
                />
            </>
        </>
    );
}
