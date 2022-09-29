window.content = function () {
    return {
        slides: [
            {
                slide: 1,
                image: {
                    mobile:'./images/mobile-image-hero-1.jpg',
                    desktop:'./images/desktop-image-hero-1.jpg',
                    altText: 'white chairs and a table'
                },
                title: 'Discover innovative ways to decorate',
                description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
            },
            {
                slide: 2,
                image: {
                    mobile:'./images/mobile-image-hero-2.jpg',
                    desktop:'./images/desktop-image-hero-2.jpg',
                    altText: 'chairs of different colors'
                },
                title: 'We are available all across the globe',
                description: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
            },
            {
                slide: 3,
                image: {
                    mobile:'./images/mobile-image-hero-3.jpg',
                    desktop:'./images/desktop-image-hero-3.jpg',
                    altText: 'black chair'
                },
                title: 'Manufactured with the best materials',
                description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
            }
        ],
        setSlide: 1,
        animation: false,
        get slide() {
            slidesArray = this.slides.filter(slide => slide.slide === this.setSlide);
            return slidesArray[0];
        },
        previousSlide() {
            return this.setSlide === 1 ? this.setSlide = 3 : this.setSlide === 2 ? this.setSlide = 1 : this.setSlide === 3 ? this.setSlide = 2 : this.setSlide = 1
        },
        nextSlide() {
            return this.setSlide === 1 ? this.setSlide = 2 : this.setSlide === 2 ? this.setSlide = 3 : this.setSlide === 3 ? this.setSlide = 1 : this.setSlide = 1
        },
        animate() {
            this.animation = true;
            setTimeout(function() {this.animation = false}.bind(this) ,800);
        }
    }

}