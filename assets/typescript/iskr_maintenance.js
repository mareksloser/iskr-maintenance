import './helpers/utils/dom';
import {initScrollUpController} from "./Control/default";

/**
 * @return {void}
 */
function initBaseComponents() {

}

/**
 * @return {void}
 */
function reinitBaseComponents() {
}

window.reinitBaseComponents = reinitBaseComponents;
window.initBaseComponents = initBaseComponents;

initBaseComponents();
reinitBaseComponents();

function onWindowResize() {

}

onWindowResize();
window.addEventListener('resize', onWindowResize);

window.GOV_DS_CONFIG = {
    iconsPath: '../../../icons'
}