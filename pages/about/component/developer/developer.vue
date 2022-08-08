<template>
  <div id="developer" class="custom-container lg:grid lg:grid-cols-12 mb-24">
    <div class="lg:col-start-2 lg:col-end-12">
      <span class="developer__line block mx-auto w-[80%] mb-10"></span>
      <div
        class="text-darkLavender font-title sm:text-5xl text-4xl font-black capitalize"
      >
        Experienced Developer
      </div>
      <div class="developer__content lg:mt-16 lg:flex lg:flex-row">
        <div class="developer__left sm:mt-16 lg:mt-0 lg:w-[60%]">
          <Carousel :responsive="responsive" slide-auto>
            <swiper-slide v-for="item in employees" :key="item.id">
              <DeveloperCard
                :fullName="item.fullname"
                :jobs="item.jobPositions"
                :avatar="item.avatar.url"
                :desc="item.employeeTranslations[0].shortDescription"
              />
            </swiper-slide>
          </Carousel>
        </div>
        <div
          class="developer__right lg:w-[40%] sm:mt-16 ssm:mt-12 pt-4 lg:text-right"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quod
          nisi placeat, voluptatibus eius perferendis excepturi commodi modi
          quasi eveniet facere rerum fuga dignissimos totam consectetur omnis
          recusandae ab sunt.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeveloperCard from "./developer-card.vue";
import Carousel from "@/components/carousel/carousel.vue";
import { SwiperSlide } from "swiper/vue";
import aboutService from "@/services/about/about.service";
export default {
  name: "Developer",
  components: {
    DeveloperCard,
    Carousel,
    SwiperSlide,
  },
  data() {
    return {
      responsive: {
        300: {
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
          spaceBetween: 30,
        },
      },
      employees: [],
    };
  },
  created() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      const res = await aboutService.getEmployees();
      this.employees = res.data;
    },
  },
};
</script>

<style lang="scss">
#developer {
  .developer__line {
    border-top: 1px solid gray;
  }
  .developer__right {
    border-top: 1px solid gray;
  }
}
</style>
