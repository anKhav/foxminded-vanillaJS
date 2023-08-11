import imgUrl from '/pngwing.png'


export const Home = () => {
    return(
        `<section>
        <div class="section-outer main-screen">
            <div class="section-inner">
                <h2 class="main-screen__title">Discover foxlife</h2>
                <h4 class="main-screen__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus facilis hic maxime quod soluta.</h4>
            </div>
        </div>
    </section>
    <section class="section-outer">
        <div class="section-inner food">
            <div class="food__wrapper">
                <div class="food__container">
                    <div class="food__content">
                        <span class="food__tag">#Food</span>
                        <h3 class="food__title">Lorem ipsum dolor sit amet, consectetur.</h3>
                    </div>
                    <div class="food__image">
                        <img src=${imgUrl} alt="Chicken">
                    </div>
                </div>
                <div class="food__container">
                    <div class="food__content">
                        <span class="food__tag">#Food</span>
                        <h3 class="food__title">Lorem ipsum dolor sit amet, consectetur.</h3>
                    </div>
                    <div class="food__image">
                        <img src=${imgUrl} alt="Chicken">
                    </div>
                </div>
                <div class="food__container">
                    <div class="food__content">
                        <span class="food__tag">#Food</span>
                        <h3 class="food__title">Lorem ipsum dolor sit amet, consectetur.</h3>
                    </div>
                    <div class="food__image">
                        <img src=${imgUrl} alt="Chicken">
                    </div>
                </div>
            </div>
            <div class="food__button">All foxes</div>
        </div>
    </section>
    <section class="section-outer newsletter">
        <div class="section-inner newsletter__wrapper">
            <h2 class="newsletter__title">
                Join our newsletter
            </h2>
            <p class="newsletter__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad architecto culpa cumque fugit, laborum laudantium, minus nostrum officiis provident reiciendis sed soluta, sunt voluptates.
            </p>
            <form class="form">
                <input placeholder="Enter email" type="email" class="form__input">
                <button class="form__button" type="submit">Subscribe</button>
            </form>
        </div>
    </section>`
    )
}