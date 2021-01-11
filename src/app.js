import { sum } from "./math";
import './style.scss';
import webpackImage from './naver.png';

window.addEventListener('DOMContentLoaded', ()=> {
    const el = document.querySelector('#app');
    el.innerHTML = `
        <h1>1 + 2 = ${sum(1,2)}</h1>
        <img src="${webpackImage}" alt="naver" />
    `
})