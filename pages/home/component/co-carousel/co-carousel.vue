<template>
  <div class="custom-container pb-[40px] overflow-hidden">
    <Carousel :responsive="responsive" slide-auto :autoplay="true">
      <swiper-slide v-for="(item, index) in cooperator" :key="`item-${index}`">
        <div
          class="w-full h-[80px] flex items-center justify-center select-none"
          @click="openDialog(item)"
        >
          <img
            class="w-[100px] cursor-pointer"
            :src="item.image.url"
            alt="co logo"
          />
        </div>
      </swiper-slide>
    </Carousel>
  </div>
  <!-- Dialog -->
  <!-- <el-dialog
    v-model="centerDialogVisible"
    custom-class="md:w-[50%] w-[90%] rounded-md"
    :destroy-on-close="true"
    append-to-body
  >
    <template #header>
      <h1 class="text-xl font-bold uppercase">Business Partner</h1>
      <hr class="mt-4" />
    </template>
    <template #footer>
      <div v-if="selectedItem" class="flex justify-end">
        <a :href="selectedItem.link" target="_blank">
          <div
            class="font-bold uppercase flex cursor-pointer hover:text-primary text-xs items-center"
          >
            Go to company page
            <ArrowNarrowRightIcon class="h-6 w-6 ml-5 text-primary" />
          </div>
        </a>
      </div>
    </template>
    <div v-if="selectedItem">
      <img class="w-[200px]" :src="selectedItem.img" alt="co logo" />
      <h1 class="font-bold text-xl my-5">Tenlot Group</h1>
      <p class="text-base font-light">
        TENLOT is a lottery and gaming license holder and operator, active in
        numerous countries globally through local subsidiaries on behalf of
        national governments and in close cooperation with respectable
        charitable organizations. The company provides turn-key solutions based
        on advanced gaming systems, solid lottery and gaming know-how, project
        implementation experience and extensive operational services.
      </p>
    </div>
  </el-dialog> -->
</template>
<script>
import Carousel from "@/components/carousel/carousel.vue";
import { swiperMixin } from "@/mixins/swiper.mixin";
import homeService from "@/services/home/home.service";
export default {
  mixins: [swiperMixin],
  name: "Co-Carousel",
  components: {
    Carousel,
  },
  data() {
    return {
      centerDialogVisible: false,
      responsive: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 100,
        },
      },
      selectedItem: null,
      items: [
        {
          link: "https://www.google.com/",
          openDialog: false,
          img: "~/assets/7a.png",
        },
        {
          link: "https://www.google.com/",
          openDialog: false,
          img: "~/assets/g10.png",
        },
        {
          link: "https://www.google.com/",
          openDialog: false,
          img: "~/assets/LTV_Logo_New.png",
        },
        {
          link: "https://www.google.com/",
          openDialog: false,
          img: "~/assets/pullman.png",
        },
        {
          link: "~/https://www.google.com/",
          openDialog: false,
          img: "./assets/skiple.png",
        },
        {
          link: "https://www.google.com/",
          openDialog: false,
          img: "~/assets/tenlot_logo.png",
        },
      ],
      cooperator: [],
    };
  },
  methods: {
    openDialog(item) {
      this.centerDialogVisible = true;
      this.selectedItem = item;
    },
    getCooperator() {
      homeService.getCooperator().then((res) => {
        this.cooperator = res.data;
      });
    },
  },
  created() {
    this.getCooperator();
  },
};
</script>
<style lang="scss"></style>
