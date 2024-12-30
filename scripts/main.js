import { getMoodsDetails } from "./moods.js"

const moodsHTML = getMoodsDetails();

const container = document.querySelector('#container')

const containerHTML = `
        <section class="header">
            <h1 class="title">Macho Moods</h1>
        </section>
        <section class="second-header">
            <h2 class="second-title">How are you feeling today?</h2>
        </section>
        <section class="all-moods">
            ${moodsHTML}
        </section>
        `

container.innerHTML = containerHTML
