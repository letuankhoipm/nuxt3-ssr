<template>
  <div class="overflow-hidden lg:mt-40 mt-12 mb-32">
    <!-- slide-auto
      :autoplay="true" -->
    <Carousel v-if="images.length" :responsive="responsive" :autoplay="true">
      <swiper-slide class="" v-for="item in images" :key="item.id">
        <div class="h-[80vh] w-full rounded-md overflow-hidden">
          <img
            class="h-full w-full object-cover"
            :src="item.url"
            alt="image project"
          />
        </div>
      </swiper-slide>
    </Carousel>
    <div class="desc mt-8">
      <p class="ssm:px-0 px-8">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/carousel/carousel.vue";
import { SwiperSlide } from "swiper/vue";
export default {
  name: "CarouSelPart",
  props: {
    images: { type: Array, default: () => [] },
    desc: String,
  },
  components: {
    Carousel,
    SwiperSlide,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
      responsive: {
        350: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1536: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      },
    };
  },
};
</script>
