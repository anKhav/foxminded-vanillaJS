import '../../styles/about.css'
import img1 from '/history_foxes.jpg'
import img2 from '/foxes2.jpg'


const About = () => {
    const aboutDOM = document.createElement('section')
    document.body.classList.add('header--white')
    aboutDOM.innerHTML = `<main class="history">
    <div class="history__wrapper">
        <div class="history__header">
            <h3 class="history__subtitle">Home/About us</h3>
            <h1 class="history__title">Our history</h1>
        </div>
    </div>
    <div class="section-inner history__content">
        <div class="story">
            <div class="story__content">
                <div class="story__title">Lorem ipsum dolor sit amet.</div>
                <p class="story__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet cum dignissimos eveniet labore magnam molestiae necessitatibus rem temporibus? Amet aperiam autem beatae commodi consectetur consequuntur corporis cumque debitis eaque earum, enim error fugiat id itaque magni molestias nisi nobis numquam optio placeat quaerat recusandae reiciendis, reprehenderit sed vel veniam?</p>
                <p class="story__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet cum dignissimos eveniet labore magnam molestiae necessitatibus rem temporibus? Amet aperiam autem beatae commodi consectetur consequuntur corporis cumque debitis eaque earum, enim error fugiat id itaque magni molestias nisi nobis numquam optio placeat quaerat recusandae reiciendis, reprehenderit sed vel veniam?</p>
            </div>
            <div class="story__image">
                <img src=${img1} alt="Fox">
            </div>
        </div>
        <div class="story">
            <div class="section-outer story__content">
                <div class="story__title">Lorem ipsum dolor sit amet.</div>
                <p class="story__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet cum dignissimos eveniet labore magnam molestiae necessitatibus rem temporibus? Amet aperiam autem beatae commodi consectetur consequuntur corporis cumque debitis eaque earum, enim error fugiat id itaque magni molestias nisi nobis numquam optio placeat quaerat recusandae reiciendis, reprehenderit sed vel veniam?</p>
                <p class="story__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet cum dignissimos eveniet labore magnam molestiae necessitatibus rem temporibus? Amet aperiam autem beatae commodi consectetur consequuntur corporis cumque debitis eaque earum, enim error fugiat id itaque magni molestias nisi nobis numquam optio placeat quaerat recusandae reiciendis, reprehenderit sed vel veniam?</p>
            </div>
            <div class="story__image">
                <img src=${img2} alt="Fox">
            </div>
        </div>
    </div>
</main>`
    return aboutDOM
}
export default About