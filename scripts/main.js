import { getMoodsDetails } from "./moods.js"

const moodsHTML = getMoodsDetails();

const container = document.querySelector('#container')

container.innerHTML = moodsHTML
