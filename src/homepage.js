import './homepage.css';
import project_container from '../dom_modules/project_container.js';
import introduction from '../dom_modules/introduction.js';

const main = document.querySelector('main');
const intro = introduction();
const project = project_container();

main.append(intro, project);