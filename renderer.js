const versionEl = document.querySelector('#version');
versionEl.innerText = process.versions.electron;
console.log(process.versions);

const btn = document.querySelector('#toClickBtn');
btn.addEventListener('click', clicked)

function clicked(){
    alert('bla')
}