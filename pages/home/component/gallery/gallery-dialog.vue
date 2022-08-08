<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="gallery-overlay w-screen h-screen overflow-hidden fixed top-0 flex items-center justify-center"
      @click.self="closeGallery"
    >
      <div class="absolute top-[30px] right-[50px]" @click="closeGallery">
        <!-- <XIcon class="w-6 h-6 text-gray-300 cursor-pointer" /> -->
      </div>
      <div class="w-[95%] overflow-hidden" v-if="images.length">
        <Carousel :is-gallery="true" :show-nav="false">
          <swiper-slide class="gallery" v-for="item in images" :key="item.id">
            <div class="h-[65vh] w-full rounded-md overflow-hidden">
              <img
                class="h-full w-full object-cover"
                :src="item.url"
                alt="gallery"
              />
            </div>
          </swiper-slide>
        </Carousel>
      </div>
    </div>
  </Teleport>
</template>
<script>
import Carousel from "@/components/carousel/carousel.vue";
import { swiperMixin } from "@/mixins/swiper.mixin";

export default {
  mixins: [swiperMixin],
  name: "GalleryDialog",
  components: { Carousel },
  emits: ["toggleGallery"],
  props: {
    visible: { type: Boolean, default: false },
    images: { type: Array, default: () => [] },
    id: String,
  },
  data() {
    return {};
  },
  methods: {
    closeGallery() {
      this.$emit("toggleGallery");
    },
  },
};
</script>
<style lang="scss">
.gallery-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
