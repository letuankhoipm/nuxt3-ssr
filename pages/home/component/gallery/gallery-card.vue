<template>
  <div class="gallery-card" :class="class" @click="toggleGallery">
    <img class="w-full h-full rounded-xl" :src="urlImage" alt="gallery" />
    <div class="overlay lg:p-6 p-2 flex items-center justify-center">
      <div class="flex flex-col justify-center">
        <h1
          class="xl:text-xl lg:text-lg text-base text-white font-bold xl:mb-12 mb-4"
        >
          Costin nano aspti par.
        </h1>
        <div class="flex justify-end">
          <img
            class="lg:w-20 w-10"
            src="@/assets/logo/4x/logo.png"
            alt="logo white"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Dialog gallery -->
  <GalleryDialog
    :visible="centerDialogVisible"
    :id="id"
    :images="images"
    @toggleGallery="toggleGallery"
  />
  <!-- End dialog gallery -->
</template>
<script>
import Carousel from "@/components/carousel/carousel.vue";
import GalleryDialog from "@/pages/home/component/gallery/gallery-dialog.vue";
export default {
  name: "GalleryCard",
  components: { Carousel, GalleryDialog },
  props: {
    class: String,
    id: String,
    images: { type: Array, default: () => [] },
    urlImage: String,
  },
  data() {
    return {
      centerDialogVisible: false,
      items: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    toggleGallery() {
      this.centerDialogVisible = !this.centerDialogVisible;
    },
  },
};
</script>
<style lang="scss">
.gallery-card {
  @apply w-full bg-gray-300 rounded-xl cursor-pointer relative overflow-hidden shadow-xl;

  --photoboxOverlayWidth: 0;
  --photoboxOverlayHeight: 0;
  --photoboxOverlayTop: 50%;
  --photoboxOverlayLeft: 50%;

  &:hover {
    .overlay {
      opacity: 1;
      transition: all 0.3s ease-out;
    }
  }

  img {
    object-fit: cover;
  }
  .overlay {
    // @apply bg-primary/90 rounded-xl;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease-in;
  }
}
</style>
