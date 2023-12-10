import './project_content.css';

export default function project_content () {
    const div = document.createElement('div');
    div.classList.add('project-content');
    div.textContent = "text";

    return div;
}