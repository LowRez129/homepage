import './project_content.css';

export default function project_content () {
    const div = document.createElement('div');
    const img = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('project-content');
    img.classList.add('project-img');
    p.classList.add('project-text');
    p.append(
        "As the army of the Crimson King approaches the castle,",
        "they poured seething oceans of blood upon the townfolks,",
        "drowning them in red choking miasmic liquid.",
    );

    div.append(img, p);

    return div;
}