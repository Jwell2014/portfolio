import React from 'react';

const Introduction = () => {
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
                        <li>Mes <strong>diplômes et certifications</strong>, qui témoignent de mon expertise.</li>
                        <li>Mes <strong>projets professionnels</strong> et personnels, qui reflètent ma polyvalence et mon engagement.</li>
                        <li>Une <strong>vision dynamique</strong> de mon travail, basée sur des technologies modernes et des approches DevOps.</li>
                    </ul>
                </div>
                <p className="text-lg md:text-xl mb-5" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                    <strong>Pourquoi ce portfolio ?</strong><br />
                    Parce que chaque projet est une histoire, et j’ai à cœur de partager la mienne avec vous. Que vous soyez recruteur, collaborateur ou simplement curieux, j’espère que ce site répondra à vos attentes et vous inspirera confiance.
                </p>
                <p className="text-lg font-bold">
                    N’hésitez pas à <a href="#contact" style={{ color: '#2196F3', textDecoration: 'underline' }}>me contacter</a> pour échanger ou en savoir plus. Bonne visite !
                </p>
            </section>
        </>
    );
};

export default Introduction;