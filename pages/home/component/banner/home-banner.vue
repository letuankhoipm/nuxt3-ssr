<template>
  <div class="banner overflow-hidden md:min-h-[100vh] relative">
    <div class="content custom-container lg:grid lg:grid-cols-12">
      <div
        class="lg:col-start-2 lg:col-end-12 items-center justify-between flex md:flex-row flex-col-reverse mb-[150px] mt-[150px]"
      >
        <div class="flex-1 flex flex-col items-start mt-8">
          <div>
            <h1
              class="text-white font-bold text-left md:text-4xl lg:text-5xl text-3xl mb-5 font-title"
            >
              {{ $t("home.heading1") }} <br />
              {{ $t("home.heading2") }}
            </h1>
          </div>
          <p class="text-left text-white font-light lg:text-2xl text-xl">
            {{ $t("home.desc") }}
          </p>
          <div
            class="live-us mt-3 border mr-auto inline-flex relative w-[180px] h-[40px] rounded-md"
          >
            <span
              class="btn-live-us text-white flex items-center uppercase px-7 cursor-pointer hover:opacity-80 font-britannic"
              @click="openLiveUsDialog"
            >
              <!-- <PlayIcon class="h-6 w-6 mr-2" /> -->
              {{ $t("home.buttons.btn1") }}</span
            >
          </div>
        </div>
        <div class="ml-10 md:w-96 w-70 mb-5 md:mb-0">
          <!-- <Galaxy></Galaxy> -->

          <img class="rounded-md" src="~/assets/ab.svg" alt="banner image" />
        </div>
      </div>
    </div>
    <!-- Background and animation -->
    <div class="w-screen absolute bottom-0 left-0 wave z-[4]"></div>

    <div
      class="w-screen absolute bottom-0 left-0 wave wave-1 transform scale-125 opacity-20 z-[2]"
    ></div>
    <div
      class="w-screen absolute bottom-0 left-0 wave wave-2 transform scale-150 opacity-30 z-[3]"
    ></div>
  </div>

  <!-- Live us dialog -->
  <!-- <el-dialog
    v-model="centerDialogVisible"
    custom-class="md:w-[70%] w-[90%] rounded-md"
    :destroy-on-close="true"
    append-to-body
  >
    <template #header>
      <h1 class="text-2xl font-bold">
        Hear me! And rejoices to making lots of awesome software.
      </h1>
      <p>QKIT Software, Inc</p>
    </template>

    <iframe
      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F101932425695680%2Fvideos%2F540235557258769%2F&show_text=false&width=560&t=0"
      width="100%"
      height="800px"
      style="border: none; overflow: hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  </el-dialog> -->
  <!-- End live us dialog -->
</template>

<script>
export default {
  components: {},
  name: "HomeBanner",
  data() {
    return {
      centerDialogVisible: false,
      bannerVideoUrl: "https://www.youtube.com/embed/KxZAdEGpYAw",
    };
  },
  methods: {
    openLiveUsDialog() {
      this.centerDialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 150px 0px 120px;
  position: relative;
  background-image: url("@/assets/bg.png");
  background-size: cover;
  background-position: center;
  .btn-live-us {
    font-size: 18px;
    font-weight: bold;
    min-width: 185px;
  }
}
@media (min-width: 1024px) {
  .banner-image {
    width: 22.375rem !important;
  }
}

.wave {
  height: 150px;
  background-size: 2000px 150px;
  background-position: 0 0;
  background-image: url("@/assets/wave.png");

  &.wave-1 {
    animation: animate 20s linear infinite;
  }
  &.wave-2 {
    animation: animate2 20s linear infinite;
  }
}

.live-us {
  border-radius: var(--el-border-radius-round);
}

@keyframes animate {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 2000px;
  }
}

@keyframes animate2 {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: -2000px;
  }
}
</style>
