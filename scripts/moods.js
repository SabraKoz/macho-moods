import { moodsData } from "./database.js";


export const getMoodsDetails = () => {
    const moodsDataList = moodsData();

    let moodsHTML = "";

    const moodsArray = moodsDataList.map(
        (mood) => {
            return `
            <section class="moods">
                <article class="mood-title">
                    <div class="mood-name">${mood.name}</div>
                    <img src="${mood.imageUrl}" class="mood-img">
                </article>
                <article class="mood-box">
                    <div class="advice">Macho Advice: </div>
                    <div class="quotes">"${mood.quotes.join('" "')}"</div>
                </article>
            </section>
            `
        }
    )
    moodsHTML += moodsArray.join("")
    return moodsHTML
}

//     for (const mood of moodsDataList) {
//         moodsHTML += `
//             <section class="moods">
//                 <article class="mood-title">
//                     <div class="mood-name">${mood.name}</div>
//                     <img src="${mood.imageUrl}" class="mood-img">
//                 </article>
//                 <article class="mood-box">
//                     <div class="text-advice">${mood.text}:</div>
//                     <div class="quotes">${mood.quotes}</div>
//                 </article>
//             </section>
//             `;
//     }
//     return moodsHTML
// };