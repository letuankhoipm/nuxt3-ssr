<template>
  <div class="mb-24 mt-40">
    <hr class="w-[50%] h-[2px] bg-gray-400 mb-24 mx-auto" />
    <Carousel
      :showDots="true"
      :responsive="responsive"
      :autoplay="true"
      :pml200="true"
    >
      <swiper-slide
        v-for="item in projects"
        class="ssm:w-[100%]"
        :key="item.id"
      >
        <div
          class="ssm:h-[150px] h-[250px] flex items-center justify-center select-none"
        >
          <MoreProjectCard
            :id="item.id"
            :name="item.projectTranslations[0].name"
            :description="item.projectTranslations[0].description"
            :image="item.images[0].url"
          />
        </div>
      </swiper-slide>
    </Carousel>
  </div>
</template>
<script>
import Carousel from "@/components/carousel/carousel.vue";
import { SwiperSlide } from "swiper/vue";
import MoreProjectCard from "./more-project-card.vue";
import PortfolioService from "@/services/portfolio/portfolio.service";

export default {
  name: "MoreProject",
  components: {
    Carousel,
    SwiperSlide,
    MoreProjectCard,
  },
  data() {
    return {
      responsive: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      },
      selectedItem: null,
      items: [
        {
          link: "https://www.google.com/",
        },
        {
          link: "https://www.google.com/",
        },
        {
          link: "https://www.google.com/",
        },
        {
          link: "https://www.google.com/",
        },
        {
          link: "https://www.google.com/",
        },
        {
          link: "https://www.google.com/",
        },
      ],
      projectsInfo: {},
      projects: [],
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const res = await PortfolioService.getProjects();
      this.projectsInfo = res.data;
      this.projectsInfo.content.forEach(async (item) => {
        let id = item.id + "";
        await this.getProject(id);
      });
    },
    async getProject(id) {
      const res = await PortfolioService.getProject(id);
      this.projects.push(res.data);
    },
  },
};
</script>
