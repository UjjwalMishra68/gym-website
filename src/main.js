import "../styles/modern-normalize.css"
import '../styles/style.css'
import "../styles/components/navigation.css"
import "../styles/components/hero.css"
import "../styles/components/about.css"
import '../styles/components/trainers.css'
import '../styles/components/testimonials.css'
import '../styles/components/contact.css'
import '../styles/components/faq.css'
import '../styles/components/footer.css'
import "../styles/utils.css"

import testimonialSwiper from './utils/testimonial-swiper.js';
import accordionOpener from './utils/accordion.js';
import lazyLoading from "./utils/lazy-loading.js"
testimonialSwiper()
accordionOpener();
lazyLoading()
