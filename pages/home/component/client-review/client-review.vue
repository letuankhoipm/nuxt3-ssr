<template>
  <div
    class="custom-container pb-[40px] overflow-hidden md:pt-[10vh] relative z-[2] lg:grid lg:grid-cols-12"
  >
    <div class="flex flex-col-reverse md:flex-row lg:col-start-2 lg:col-end-12">
      <div class="md:w-[60%] lg:w-[65%] overflow-hidden pb-[40px] lg:mr-2">
        <Carousel
          :autoplay="true"
          slide-auto
          :responsive="responsive"
          :pml100="true"
          v-if="clientTestimonial.length"
        >
          <swiper-slide
            class="ssm:w-[400px]"
            v-for="(item, index) in clientTestimonial"
            :key="index"
          >
            <ReviewCard
              :clientName="item.clientName"
              :position="item.position"
              :numberOfStar="item.numberOfStar"
              :content="item.content"
              :avatar="item.avatar ? item.avatar.url : ''"
            />
          </swiper-slide>
        </Carousel>
      </div>
      <div class="md:w-[40%] lg:w-[35%] mb-[40px] md:mb-0">
        <div class="relative">
          <h1 class="font-title font-black md:text-5xl text-3xl text-right">
            {{ $t("home.clientsReview.title") }}
          </h1>
          <div
            class="md:h-[8px] h-[6px] w-48 bg-primary absolute right-0 md:-bottom-[30px] -bottom-[10px] rounded"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Carousel from "@/components/carousel/carousel.vue";
import homeService from "@/services/home/home.service";
import { swiperMixin } from "@/mixins/swiper.mixin";
import ReviewCard from "@/pages/home/component/client-review/review-card.vue";
export default {
  name: "Co-Carousel",
  mixins: [swiperMixin],
  components: {
    Carousel,
    ReviewCard,
  },

  data() {
    return {
      responsive: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      items: [1, 2, 3, 4],
      clientTestimonial: [],
    };
  },
  created() {
    this.getClientTestimonial();
  },
  methods: {
    async getClientTestimonial() {
      const res = await homeService.getClientTestimonial();
      this.clientTestimonial = res.data;
    },
  },
};
</script>
