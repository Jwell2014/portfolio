const projects = [
    {
        id: 1,
        title: 'Site web officiel des Films de Là-Bas',
        description: `Ce site a été conçu pour représenter la société de production Les Films de Là-Bas, spécialisée dans la création de documentaires et de projets cinématographiques. 
        Il s’agit d’une plateforme professionnelle qui met en avant leurs réalisations, leurs valeurs et leurs collaborations.`,
        features: [
            'Page d\'accueil dynamique : Présentation claire et immersive de l’univers des Films de Là-Bas.',
            'Catalogue des productions : Liste détaillée des documentaires et films, avec des descriptions et des visuels attractifs.',
            'Blog/Actualités : Section dédiée aux dernières nouvelles et événements liés à la société.',
            'Formulaire de contact : Permet aux visiteurs et partenaires potentiels de prendre facilement contact avec l’équipe.',
            'Responsive design : Site entièrement optimisé pour une expérience fluide sur tous les appareils (ordinateurs, tablettes, et téléphones).',
        ],
        technologies: [
            'WordPress : Utilisé pour la gestion et la création du site.',
            'Thème personnalisé : Adapté aux besoins spécifiques de la société.',
            'Hébergement fiable : Garantit des performances optimales.',
            'Plugins WordPress : Intégrés pour ajouter des fonctionnalités avancées.',
        ],
        objective: `
            Créer une plateforme élégante et fonctionnelle qui reflète la qualité et la créativité des productions cinématographiques de l’entreprise.
        `,
        url: 'https://product.lesfilmsdelabas.com/',
        image: '/film.png',
    },
    {
        id: 2,
        title: 'Site officiel de Jwell Web',
        description: `
                Le site Jwell Web est une vitrine professionnelle destinée à mettre en avant des services de conception web modernes et innovants.
                Il est conçu pour attirer les clients potentiels à la recherche de solutions numériques personnalisées et performantes.
            `,
        features: [
            'Page d\'accueil professionnelle : Présente les services proposés avec un design clair et engageant.',
            'Portfolio : Une section dédiée pour afficher les projets réalisés avec des détails captivants.',
            'Formulaire de contact : Facilité pour les clients de demander des devis ou de poser des questions.',
            'Blog : Des articles informatifs sur les tendances et les bonnes pratiques en développement web.',
            'Responsive design : Optimisation pour offrir une expérience utilisateur fluide sur tous les appareils.',
        ],
        technologies: [
            'WordPress : Plateforme principale pour la création et la gestion du site.',
            'Thème premium : Adapté pour refléter la modernité des services proposés.',
            'Plugins spécialisés : Pour le portfolio, les formulaires et les fonctionnalités avancées.',
            'Hébergement performant : Garantit une navigation fluide et rapide.',
        ],
        objective: `
                Proposer un site attrayant et fonctionnel qui reflète l'expertise de Jwell Web dans le développement de solutions numériques.
            `,
        url: 'https://jwellweb.com/',
        image: '/jwell.png',
    },
    {
        id: 3,
        title: 'Site officiel de Charles Antonin',
        description: `
            Le site Charles Antonin met en avant l’œuvre et l'univers de cet artiste talentueux. Conçu pour refléter son identité unique, il présente ses créations, ses actualités et sa philosophie artistique.
        `,
        features: [
            'Page d\'accueil immersive : Une introduction captivante à l\'univers de Charles Antonin.',
            'Galerie d\'œuvres : Exposition virtuelle des créations avec des visuels de haute qualité.',
            'Blog/Actualités : Articles réguliers pour partager les inspirations et les événements de l\'artiste.',
            'Formulaire de contact : Une passerelle pour échanger avec Charles Antonin ou pour des collaborations.',
            'Responsive design : Une expérience optimisée sur tous les appareils, qu\'il s\'agisse d\'ordinateurs, de tablettes ou de smartphones.',
        ],
        technologies: [
            'WordPress : Utilisé pour créer et gérer le site.',
            'Thème personnalisé : Conçu pour mettre en valeur l’œuvre de l’artiste.',
            'Plugins WordPress : Ajout de fonctionnalités spécifiques pour la galerie et le blog.',
            'Hébergement sécurisé : Assure des performances et une fiabilité optimales.',
        ],
        objective: `
            Créer une plateforme professionnelle et esthétique pour permettre à Charles Antonin de partager son art et de communiquer avec ses admirateurs et partenaires.
        `,
        url: 'https://charlesantonin.com/',
        image: '/charles.png',
    },

    {
        id: 4,
        title: 'CV professionnel',
        description: `
            Le site CV professionnel est un portfolio interactif conçu pour présenter mes compétences, mes réalisations et mon parcours professionnel.
            Il offre une interface moderne et élégante permettant aux visiteurs de découvrir facilement mes projets et mon expertise.
            `,
        features: [
            'Page d\'accueil immersive : Une introduction accueillante et professionnelle à mon univers.',
            'Section Projets : Liste détaillée des projets réalisés, avec des descriptions, des technologies utilisées et des liens vers les sites en ligne.',
            'Diplômes et Expériences : Présentation structurée de mes qualifications et de mon expérience professionnelle.',
            'Formulaire de contact : Permet aux recruteurs ou collaborateurs potentiels de me joindre facilement.',
            'Responsive design : Optimisation complète pour une navigation fluide sur tous les appareils.',
        ],
        technologies: [
            'Frontend : Développé avec React et PrimeFlex pour une interface utilisateur moderne et réactive.',
            'Backend : Gestion dynamique des contenus avec des données structurées.',
            'Hébergement : Déployé sur Vercel pour une disponibilité et une performance optimales.',
            'Styles : Design épuré avec CSS personnalisé et intégration des composants PrimeReact.',
        ],
        objective: `
            Créer un portfolio professionnel qui reflète mon expertise en développement d’applications et permet de mettre en avant mes projets et réalisations de manière claire et attrayante.
        `,
        url: 'https://sotos-coraline-cv.vercel.app/',
        image: '/cv.png',
    },
    {
        id: 5,
        title: 'Simplo Cine - Plateforme de gestion cinématographique',
        description: `
            Le projet Simplo Cine est une application innovante destinée à la gestion complète des informations relatives aux films, utilisateurs et projections.
            Développé dans un environnement DevOps, il met en œuvre les meilleures pratiques pour assurer une livraison continue, une architecture robuste et une interface intuitive.
        `,
        features: [
            'Gestion des films : Création, modification et visualisation des fiches de films avec des détails complets.',
            'Gestion des utilisateurs : Système d’inscription et d’authentification sécurisé pour les utilisateurs.',
            'Planification des projections : Outil intuitif pour gérer les horaires et les salles de projection.',
            'Interface utilisateur réactive : Une expérience fluide et optimisée pour tous les appareils.',
            'Déploiement CI/CD : Automatisation du déploiement pour garantir une livraison rapide et fiable.',
        ],
        technologies: [
            'Frontend : Développé en React avec PrimeFlex pour une interface moderne et réactive.',
            'Backend : API RESTful développée en Java (Spring Boot) pour une gestion efficace des données.',
            'Base de données : PostgreSQL pour un stockage sécurisé et performant.',
            'DevOps : Mise en œuvre d’un pipeline CI/CD avec Docker, GitHub Actions et Kubernetes pour une intégration et un déploiement continus.',
            'Tests automatisés : Couverture complète avec des tests unitaires et d’intégration.',
        ],
        objective: `
            Fournir une solution complète pour la gestion cinématographique, tout en appliquant les principes DevOps pour garantir la qualité, la scalabilité et la disponibilité de l’application.
        `,
        url: 'https://github.com/Jwell2014/simplo-cine-DevOPs',
        image: '/simplo.png',
    },
    {
        id: 6,
        title: 'Plateforme de Cours en Ligne',
        description: 'Une plateforme pour suivre et créer des cours en ligne.',
        url: 'https://lienversmonprojet6.com',
        image: 'https://plus.unsplash.com/premium_photo-1683887033225-16cca6e4c4e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q291cnMlMjBlbiUyMExpZ25lfGVufDB8fDB8fHww',
    },
    {
        id: 7,
        title: 'Jeu Web Interactif',
        description: 'Un jeu interactif développé en JavaScript.',
        url: 'https://lienversmonprojet7.com',
        image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmV1JTIwV2ViJTIwSW50ZXJhY3RpZnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 8,
        title: 'Application de Chat en Temps Réel',
        description: 'Une application de messagerie instantanée avec Socket.io.',
        url: 'https://lienversmonprojet8.com',
        image: 'https://plus.unsplash.com/premium_photo-1681487807762-98fbe8a9db5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlzY3VzaW9ufGVufDB8fDB8fHww',
    },
    {
        id: 9,
        title: 'Tableau de Bord d’Analyse',
        description: 'Un tableau de bord interactif pour visualiser des données.',
        url: 'https://lienversmonprojet9.com',
        image: 'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFibGVhdSUyMGRlJTIwQm9yZHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 10,
        title: 'Application Mobile pour Recettes',
        description: 'Une application pour rechercher et sauvegarder des recettes de cuisine.',
        url: 'https://lienversmonprojet10.com',
        image: 'https://plus.unsplash.com/premium_photo-1666353533749-31a3c805f2a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXBwbGljYXRpb24lMjBNb2JpbGUlMjBwb3VyJTIwUmVjZXR0ZXN8ZW58MHx8MHx8fDA%3D',
    },
];

export default projects;
