import './introduction.css';

export default function introduction () {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const br = document.createElement('br');

    div.classList.add('introduction-container');
    img.classList.add('introduction-img');
    p.classList.add('introduction-p');
    p.append(
        "Higher than mountain, of cavernous people.",
        "Searching for the lighthouse in the fog.",
        "I found the reason to leave you for this long.",
        "All i could do is forgive your heart.",
        "Trap in this town made of ember for too long.",
        "All i could do is forgive your heart."
    );

    div.append(img, p);

    return div;
}