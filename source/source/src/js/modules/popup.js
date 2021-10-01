export {modalPopUp}; 

let modalPopUp = () => {
    renderPopUp();
    function renderPopUp() {
        document.querySelector('#help').addEventListener('click', () => {
            document.querySelector('.popup').style.display = "block"
        });
        document.querySelector('.popup').addEventListener('click', (e) => {
            console.log(e.target);
            document.querySelector('.popup').style.display = "";
        })
    }
}