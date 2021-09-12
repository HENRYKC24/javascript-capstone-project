import './main.css';
import getData from './modules/dom.js';
import { getLikes } from './modules/likes';

const foods = [];

getData(foods);
getLikes();
