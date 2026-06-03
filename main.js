function toggleAns(id) {
    const box = document.getElementById(id);
    if (!box) return;
    box.classList.toggle('show');
}
