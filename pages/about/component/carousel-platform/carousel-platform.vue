<template>
  <div
    class="carousel py-36 pb-24 custom-container bg-transparent lg:grid lg:grid-cols-12"
  >
    <div class="flex lg:flex-row flex-col lg:col-start-2 lg:col-end-12">
      <div
        class="text-darkLavender lg:hidden block font-title sm:text-5xl text-4xl font-black mb-20"
      >
        Support Multiple Platform
      </div>
      <div class="lg:w-[50%] overflow-hidden pb-12 lg:px-0">
        <Carousel :responsive="responsive" slide-auto :autoplay="true">
          <swiper-slide v-for="list in lists" :key="list.id">
            <img
              class="object-cover h-80 w-[100%] rounded-xl"
              :src="list.img"
              :alt="list.name"
            />
          </swiper-slide>
        </Carousel>
      </div>
      <div class="lg:text-right lg:w-[50%] lg:pl-12 lg:pr-0">
        <div
          class="text-darkLavender lg:block hidden font-title xl:text-5xl font-black lg:text-5xl text-left"
        >
          {{ $t("about.title.t2") }}
        </div>
        <div
          class="lg:mt-12 lg:text-lg text-gray-500 sm:text-xl 2xl:text-xl text-left"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like reabable English
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/carousel/carousel.vue";
import { SwiperSlide } from "swiper/vue";
export default {
  name: "CarouselPlatform",
  components: {
    Carousel,
    SwiperSlide,
  },
  data() {
    return {
      lists: [
        {
          id: 1,
          img: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/880739/retina_1708x683_cover-angular-5-tutorial-325403e130ba3b2c367174b73bb7275a.png",
          name: "Angular",
        },
        {
          id: 2,
          img: "https://miro.medium.com/max/6416/1*7OCwu--TWqVluPMsZdzWKw.png",
          name: "Vuejs",
        },
        {
          id: 3,
          img: "https://thienanblog.com/wp-content/uploads/2017/10/react-logo.png",
          name: "Reactjs",
        },
      ],
      responsive: {
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1536: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    };
  },
};
</script>

<style></style>
