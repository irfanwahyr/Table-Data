document.addEventListener("DOMContentLoaded", () => {
    function saveDataKeLocalStorage() {
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
             localStorage.setItem('data', JSON.stringify(data));
             isiTable(data);
         })
         .catch(error => console.error('Error: ', error));
    }

    if (localStorage.getItem('data')) {
        const dataTersimpan = JSON.parse(localStorage.getItem('data'));
        isiTable(dataTersimpan);
    } else {
        saveDataKeLocalStorage();
    }
});