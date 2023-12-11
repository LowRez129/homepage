import './project_content.css';

export default function project_content () {
    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    div.classList.add('project-content');
    div.append(
        "As the army of the Crimson King approaches the castle, they poured seething oceans of blood upon the townfolks, drowning them in red choking miasmic liquid."
    );

    return div;
}