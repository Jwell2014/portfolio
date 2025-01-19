import React from 'react';
import { Dialog } from 'primereact/dialog';


const Introduction = () => {
    const [isContactVisible, setContactVisibility] = React.useState(false);
    return (
        <>

            <h2 className="text-center m-0 mb-6 border-y-2" style={{ fontSize: '6vw', color: '#2196F3' }}>Bienvenue sur mon portfolio !</h2>

            <section className="flex flex-column align-items-center justify-content-center text-center py-2 px-4 bg-light" style={{ backgroundColor: '#1c1c1c', color: '#FFF' }}>

                <p className="text-2xl md:text-2xl mb-5" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                    Je suis <strong>Coraline Sotos</strong>, conceptrice et développeuse d’applications passionnée par la création de solutions innovantes et performantes. À travers ce portfolio, découvrez mon parcours, mes compétences et mes projets, réalisés avec soin et créativité.
                </p>
                <div className="text-lg md:text-xl mb-5" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                    <p><strong>Que trouverez-vous ici ?</strong></p>
                    <ul className="list-disc ml-5 text-left" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
                        <li>Mes <strong>projets professionnels</strong> et personnels, qui reflètent ma polyvalence et mon engagement.</li>
                        <li>Une <strong>vision dynamique</strong> de mon travail, basée sur des technologies modernes et des approches DevOps.</li>
                    </ul>
                </div>
                <p className="text-lg md:text-xl mb-5" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                    <strong>Pourquoi ce portfolio ?</strong><br />
                    Parce que chaque projet est une histoire, et j’ai à cœur de partager la mienne avec vous. Que vous soyez recruteur, collaborateur ou simplement curieux, j’espère que ce site répondra à vos attentes et vous inspirera confiance.
                </p>
                <p className="text-lg font-bold">
                    N’hésitez pas à <a href="#contact" onClick={() => setContactVisibility(true)} style={{ color: '#2196F3', textDecoration: 'underline' }}>me contacter</a> pour échanger ou en savoir plus. Bonne visite !
                </p>

                <div className="grid">
                    <Dialog className='sm:w-8' header={"Contact"} visible={isContactVisible} onHide={() => {
                        if (isContactVisible) setContactVisibility(false);
                    }}>
                        <p className="m-0">
                            Vous souhaitez me contacter pour discuter d’un projet, d’une collaboration ou simplement pour me dire bonjour ?<br />
                            N’hésitez pas à m’envoyer un message en m’envoyant un e-mail à l’adresse suivante :<br /><br />
                            <a
                                href="mailto:sotoscoraline@gmail.com"
                                className="text-primary underline hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                sotoscoraline@gmail.com
                            </a>
                        </p>
                        <p>Je vous répondrai dans les plus brefs délais !</p>
                        <p>Vous pouvez également me contacter par téléphone au numéro suivant :</p>
                        <p>
                            <a
                                href="tel:+41778133367"
                                className="text-primary underline hover:underline"
                            >
                                +41 77 813 33 67
                            </a>
                        </p>
                        <p>À très bientôt !</p>
                    </Dialog>
                </div>
            </section>
        </>
    );
};

export default Introduction;