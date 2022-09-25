import { group_seven } from './group';
// import Swiper JS
import Swiper from 'swiper/swiper-bundle.min.js';
// import Swiper styles
import 'swiper/swiper-bundle.min.css';
import './sass/_common.scss';
import './sass/_example.scss';

const openModalBtn = document.querySelector('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

const cards = document.querySelector('.card-wrapper');

const makeCard = ({ photo, name, description }) => {
  return `
  <div class="swiper-slide card">
      <div class="image-content">
        <span class="overlay"></span>

        <div class="card-image">
          <img src="${photo}" alt="" class="card-img" />
        </div>
      </div>

      <div class="card-content">
        <h2 class="name">${name}</h2>
        <p class="description">
          ${description}
        </p>

        <button class="button">View More</button>
      </div>
    </div>
  `;
};

const makeCardsList = group_seven.map(makeCard).join('');
cards.insertAdjacentHTML('beforeend', makeCardsList);

var swiper = new Swiper('.slide-container', {
  slidesPerView: 3,
  spaceBetween: 30,

  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    520: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
