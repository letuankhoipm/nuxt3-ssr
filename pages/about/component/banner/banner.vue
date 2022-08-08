<template>
  <div class="w-screen h-screen">
    <!-- Hero Banner -->
    <div
      class="relative bg-no-repeat bg-cover bg-center bg-opacity-80 w-full"
      :style="{
        'background-image': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
        height: '80%',
      }"
    >
      <!-- Hero Text -->
      <div
        class="relative md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 left-1/3 top-1/2 translate-y-2/3 md:rotate-0 rotate-90 hero_title"
      >
        <!-- Hero Title -->
        <p
          class="font-title font-bold opacity-30 md:text-9xl sm:text-8xl text-7xl text-white tracking-widest uppercase"
        >
          {{ title }}
        </p>
      </div>
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="2xl:mx-28 xl:mx-24 lg:mx-12 md:mx-10 sm:mx-8 mx-4">
        <div>
          <div class="md:mb-4 sm:mb-2 mb-2">
            <p
              class="font-title uppercase lg:text-7xl text-5xl font-semibold text-eerieBlack opacity-80 text-left 2xl:pl-40 xl:pl-36 lg:pl-32 md:pl-28 sm:pl-24 pl-4 tracking-wider"
            >
              {{ title }}
            </p>
          </div>
          <div class="flex items-center flex-wrap">
            <div class="lg:w-1/2 sm:w-full w-full">
              <div class="px-4">
                <p
                  class="font-medium text-left tracking-wider md:text-base sm:text-xs text-xs"
                >
                  {{ description }}
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 sm:w-full w-full lg:block hidden">
              <div class="px-4">
                <div class="w-full bg-gray-200" style="height: 2px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}
.wave svg {
  position: relative;
  display: block;
  width: calc(100% + 2px);
  height: 100px;
}
@media (max-width: 639px) {
  .wave svg {
    width: calc(110% + 10px);
    height: 60px;
  }
}
.wave .shape-fill {
  fill: #ffffff;
}

@media (max-width: 375px) {
  .hero_title {
    top: 40% !important;
  }
}
</style>
