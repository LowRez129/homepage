import './project_content.css';
import anchor from './anchor_DOM.js';

export default function project_content () {
    const div = document.createElement('div');
    const img = document.createElement('div');
    const info_container = document.createElement('div');
    const link_container = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('project-content');
    img.classList.add('project-img');
    p.classList.add('project-text');
    p.classList.add('project-link');
    info_container.classList.add('info-container');
    link_container.classList.add('link-container');
    
    p.append(
        "As the army of the Crimson King approaches the castle,",
        "they poured seething oceans of blood upon the townfolks,",
        "drowning them in red choking miasmic liquid.",
    );

    link_container.append(
        anchor("Project: Homepage", "/#"), 
        anchor("Github: Homepage", "/#")
    );
    info_container.append(p, link_container);
    div.append(img, info_container);

    return div;
}