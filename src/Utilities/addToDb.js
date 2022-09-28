const addToLoacl = (id) => {
    const card = getStroadData();
    const quantity = card[id];
    if (quantity) {
        card[id] = quantity + 1;
    } else {
        card[id] = 1;
    }
    localStorage.setItem("card", JSON.stringify(card));
};

const getStroadData = () => {
    let card = {};
    const stroedCard = localStorage.getItem("card");
    if (stroedCard) {
        card = JSON.parse(stroedCard);
    }
    return card;
};

export { addToLoacl, getStroadData };
