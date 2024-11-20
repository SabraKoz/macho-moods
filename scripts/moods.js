import { moodsData } from "./database.js";


export const getMoodsDetails = () => {
    const moodsDataList = moodsData();

    let moodsHTML = '';

    for (const mood of moodsDataList) {
        moodsHTML += `
            <section class="moods">
                <div class="mood-name">${mood.name}</div>
                <img src="${mood.imageUrl}" class="mood-img">
                <div class="mood-box">
                    <div class="text-advice">${mood.text}</div>
                    <div class="quotes">${mood.quotes}</div>
                </div>
            </section>
            `;
    }
    return moodsHTML
};