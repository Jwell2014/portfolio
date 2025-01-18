import React from 'react';
import { MegaMenu } from 'primereact/megamenu';


const Header: React.FC = () => {
    const items = [
        {
            label: 'Projets',
            icon: 'pi pi-fw pi-briefcase',
        },
        {
            label: 'À propos',
            icon: 'pi pi-fw pi-info-circle',
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
        }
    ];

    const start = <i className="pi pi-circle-fill mr-4" style={{ color: 'white' }}></i>;
    const end = <i className="pi pi-circle-fill ml-4" style={{ color: 'white' }}></i>


    return (
        <div className="card">
            <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
        </div>
    );
};

export default Header;
