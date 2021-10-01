import '../index.html';
import '../style/main.less';

import {gameSession} from '../js/modules/game.js'
import {modalPopUp} from '../js/modules/popup.js'

window.addEventListener('DOMContentLoaded', () => {

    modalPopUp();
    document.querySelector('#play').addEventListener('click', gameSession)

})

