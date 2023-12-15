export default function anchor (name = "#", url = "#") {
    const a = document.createElement('a');
    a.textContent = name;
    a.href = url;

    return a;
}