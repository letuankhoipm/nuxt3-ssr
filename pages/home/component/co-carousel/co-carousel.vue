<template>
  <div class="custom-container pb-[40px] overflow-hidden">
    <Carousel :responsive="responsive" slide-auto :autoplay="true">
      <swiper-slide v-for="(item, index) in cooperator" :key="`item-${index}`">
        <div
          class="w-full h-[80px] flex items-center justify-center select-none"
          @click="toggleModal(item)"
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
  <Teleport to="body">
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
      @click="closeModal"
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          @click.stop
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-3xl font-semibold">Business Partner</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="closeModal"
            >
              <span
                class="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <img class="w-[200px]" :src="urlImg" alt="co logo" />
            <h1 class="font-bold text-xl my-5">Tenlot Group</h1>
            <p class="my-4 text-slate-500 text-lg leading-relaxed">
              TENLOT is a lottery and gaming license holder and operator, active
              in numerous countries globally through local subsidiaries on
              behalf of national governments and in close cooperation with
              respectable charitable organizations. The company provides
              turn-key solutions based on advanced gaming systems, solid lottery
              and gaming know-how, project implementation experience and
              extensive operational services.
            </p>
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
          >
            <a href="https://www.google.com/" target="_blank">
              <div
                class="font-bold uppercase flex cursor-pointer hover:text-primary text-xs items-center"
              >
                Go to company page
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </Teleport>
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
      showModal: false,
      urlImg: "",
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
    toggleModal(item) {
      // this.urlImg = item.img.url;
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = !this.showModal;
    },
  },
  created() {
    this.getCooperator();
  },
};
</script>
<style lang="scss"></style>
