<template>
  <div class="w-screen h-screen">
    <!-- Hero Banner -->
    <div
      class="relative bg-no-repeat bg-cover bg-center bg-opacity-80 w-full"
      :style="{
        'background-image': `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('${image}')`,
        height: '80%',
      }"
    >
      <!-- Hero Text -->
      <div
        class="relative md:top-1/2 md:left-2/3 md:-translate-x-1/2 md:-translate-y-1/2 left-1/3 top-1/2 translate-y-2/3 md:rotate-0 rotate-90 hero_title"
      >
        <!-- Hero Title -->
        <p
          class="font-title font-bold opacity-30 md:text-9xl sm:text-8xl text-7xl text-white tracking-widest uppercase"
        >
          <!-- {{ title }} -->
        </p>
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
    <div class="custom-container lg:grid lg:grid-cols-12">
      <div class="lg:col-start-2 lg:col-end-12 mr-0">
        <div>
          <div class="md:mb-4 mt-4 sm:mb-2 mb-2">
            <p
              class="font-title uppercase lg:text-7xl text-5xl font-semibold text-eerieBlack opacity-80 text-right 2xl:pl-40 xl:pl-36 lg:pl-32 md:pl-28 sm:pl-24 pl-4 ssm:pl-0 tracking-wider"
            >
              {{ title }}
            </p>
          </div>
          <div class="flex items-center flex-wrap">
            <div class="lg:w-1/2 sm:w-full w-full">
              <div class="px-4">
                <p
                  class="font-medium text-left tracking-wider md:text-base sm:text-xs text-xs truncate"
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

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
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
});
</script>

<style lang="scss">
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
@media (max-width: 639px) {
  .wave svg {
    width: calc(110% + 10px);
    height: 60px;
  }
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

@media (max-width: 375px) {
  .hero_title {
    top: 40% !important;
  }
}
</style>

<style lang="scss" scoped></style>
