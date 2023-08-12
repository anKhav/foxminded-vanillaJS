import '../styles/product.css'


export const Product = (product) => {
    const starTemplate = `<div class="star">
                        <svg width="13" height="13" viewBox="0 0 0 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.92143 4.83452L6.40831 0L4.89532 4.83452H0L3.96072 7.82226L2.44773 12.6574L6.40831 9.6684L10.369 12.6574L8.85604 7.82226L12.8168 4.83452H7.92143Z" fill="#CC5520"/>
                        </svg>
                    </div>`
    const getFullRatingTemplate = (number) => {
        const arr = []
        for (let i= 0; i <= number; i++){
            arr.push(starTemplate)
        }
        return arr.join(' ')
    }

    return(
        `<div class="item">
            <div class="item__image">
                <img src=${product.image} alt="fox">
                <button class="item__button"><span class="cross">+</span><span class="add">Add</span></button>
            </div>
            <div class="item__info">
                <h4 class="item__title">${product.title}</h4>
                <span class="item__price">$${product.price}</span>
                <div class="item__rating">
                    ${getFullRatingTemplate(product.rating)}
                </div>
                <span class="item__topic">${product.topic}</span>
            </div>
        </div>`
    )
}