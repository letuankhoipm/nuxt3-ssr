<template>
  <div
    class="custom-container lg:grid lg:grid-cols-12 pb-[40px] overflow-hidden md:pt-[10vh] relative z-[2]"
  >
    <div class="flex flex-col lg:flex-row lg:col-start-2 lg:col-end-12">
      <div class="lg:w-[35%] mb-[40px] lg:mb-0">
        <div class="relative">
          <h1 class="font-title font-black md:text-5xl text-3xl text-left">
            {{ $t("home.gallery.title") }}
          </h1>
          <div
            class="md:h-[8px] h-[6px] w-20 bg-primary absolute left-0 md:-bottom-[30px] -bottom-[10px] rounded"
          ></div>
        </div>

        <p class="text-base text-left font-bold mt-12">
          {{ $t("home.gallery.content") }}
        </p>
      </div>

      <div class="lg:w-[65%] overflow-hidden pb-[40px] flex">
        <div class="left w-[35%] pr-5">
          <GalleryCard
            :id="gallery[0] ? gallery[0].id + '' : ''"
            :images="gallery[0] ? gallery[0].images : []"
            :urlImage="gallery[0] ? gallery[0].images[0].url : ''"
            :class="'h-[215px] lg:h-[275px] xl:h-[430px] mb-5'"
          />
          <GalleryCard
            :id="gallery[1] ? gallery[1].id + '' : ''"
            :images="gallery[1] ? gallery[1].images : []"
            :urlImage="gallery[1] ? gallery[1].images[0].url : ''"
            :class="'h-[170px] lg:h-[230px] xl:h-[340px]'"
          />
        </div>
        <div class="right w-[65%]">
          <GalleryCard
            :id="gallery[2] ? gallery[2].id + '' : ''"
            :images="gallery[2] ? gallery[2].images : []"
            :urlImage="gallery[2] ? gallery[2].images[0].url : ''"
            :class="'h-[105px] lg:h-[165px] xl:h-[210px] mb-5'"
          />

          <div class="flex">
            <GalleryCard
              :id="gallery[3] ? gallery[3].id + '' : ''"
              :images="gallery[3] ? gallery[3].images : []"
              :urlImage="gallery[3] ? gallery[3].images[0].url : ''"
              :class="'w-[50%] h-[280px] lg:h-[340px] xl:h-[560px] mr-5'"
            />
            <div class="w-[50%]">
              <GalleryCard
                :id="gallery[4] ? gallery[4].id + '' : ''"
                :images="gallery[4] ? gallery[4].images : []"
                :urlImage="gallery[4] ? gallery[4].images[0].url : ''"
                :class="'h-[130px] lg:h-[160px] xl:h-[270px] mb-5'"
              />
              <GalleryCard
                :id="gallery[5] ? gallery[5].id + '' : ''"
                :images="gallery[5] ? gallery[5].images : []"
                :urlImage="gallery[5] ? gallery[5].images[0].url : ''"
                :class="'h-[130px] lg:h-[160px] xl:h-[270px]'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Carousel from "@/components/carousel/carousel.vue";
import homeService from "@/services/home/home.service";
import GalleryCard from "@/pages/home/component/gallery/gallery-card.vue";
export default {
  name: "Gallery",
  components: {
    Carousel,
    GalleryCard,
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
      gallery: [],
    };
  },
  created() {
    this.getGallery();
  },
  methods: {
    async getGallery() {
      const res = await homeService.getGallery();
      this.gallery = res.data;
    },
  },
};
</script>
<style lang="scss">
.gallery-card {
  @apply w-full  bg-gray-300 rounded-xl cursor-pointer;
}
</style>
