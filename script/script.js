const fixedform = document.querySelector('.fixed-form');
const openpopup = document.querySelector('#openpopup');
const closeBtn = document.querySelector('#closeBtn');

closeBtn.onclick = (e) => {
    e.preventDefault()
    fixedform.style.display = 'none';
    openpopup.style.display = 'block';
}

openpopup.onclick = (e) => {
    e.preventDefault()
    fixedform.style.display = 'block';
    openpopup.style.display = 'none';
}