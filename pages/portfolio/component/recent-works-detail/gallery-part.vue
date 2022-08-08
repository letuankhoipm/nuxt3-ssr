<template>
  <div class="relative recent-works-detail my-20">
    <div
      class="grid grid-row-1 lg:grid-rows-2 xl:grid-rows-2 lg:grid-cols-3 xl:grid-cols-2 gap-1 ssm:grid-rows-4 ssm:grid-cols-1"
    >
      <div
        class="row-start-1 row-span-2 col-start-1 col-span-2 xl:col-start-1 xl:col-span-1 ssm:row-span-1 ssm:col-span-1 bg-flashWhite flex items-center ssm:block"
        v-if="images.length"
      >
        <img
          :src="images[0] ? images[images.length - 1].url : ''"
          alt="Image"
          class="h-fit"
        />
      </div>
      <div
        class="flex row-start-1 row-span-2 col-span-1 ssm:row-start-2 ssm:row-span-1 ssm:col-start-1 bg-flashWhite items-center justify-center"
      >
        <img
          :src="images[1] ? images[images.length - 2].url : ''"
          alt="Image"
        />
      </div>
      <div
        class="flex row-start-3 row-span-1 col-start-1 col-span-2 xl:col-start-1 xl:col-span-1 ssm:row-start-4 ssm:row-span-1 ssm:col-start-1 bg-flashWhite items-center justify-center"
      >
        <button class="flex items-center justify-center" @click="toggleGallery">
          <p class="inline-block btn-text mr-7">VIEW ALL PICTURE</p>
          <svg
            class="w-9 fill-darkLavender inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="flex row-start-3 row-span-1 col-span-1 col-start-3 xl:col-start-2 ssm:row-start-3 ssm:row-span-1 ssm:col-start-1 bg-flashWhite items-center"
      >
        <p class="text-desc text-base xl:text-2xl text-right p-12">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>

  <!-- Dialog gallery -->
  <GalleryDialog
    :visible="centerDialogVisible"
    @toggleGallery="toggleGallery"
    :images="images"
  />
  <!-- End dialog gallery -->
</template>

<script>
import GalleryDialog from "./gallery-dialog.vue";

export default {
  name: "GalleryPart",
  props: {
    images: { type: Array, default: () => [] },
    desc: String,
  },
  components: { GalleryDialog },
  data() {
    return {
      img1: "http://www.clker.com/cliparts/F/1/t/D/a/R/purple-rec-square-hi.png",
      img2: "https://miro.medium.com/max/1400/0*l3WYOVnvK0HKAT62",
      img3: "https://upipayments.co.in/wp-content/uploads/2019/07/phone-2.png",
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

<style scoped>
.btn-text {
  font-style: "nunito", sans-serif;
  font-size: 22px;
  font-weight: 900;
}
.front-banner-img {
  width: 334px;
  height: 688px;
}
</style>
