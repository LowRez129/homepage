import './project_container.css';
import project_content from './project_content.js';

export default function project_container () {
    const div = document.createElement('div');
    const project1 = project_content();
    const project2 = project_content();
    const project3 = project_content();
    const project4 = project_content();

    div.classList.add('project-container');
    div.append(project1, project2, project3, project4);
    
    return div;
}