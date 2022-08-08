<template>
  <swiper
    class="custom-swiper"
    :class="{
      'has-transition': addTransitionClass,
      pml100: pml100,
      pml200: pml200,
    }"
    :modules="showNav ? [...modules, navigationModule] : modules"
    :slides-per-view="isGallery ? 'auto' : slideAuto ? 'auto' : slidePerPage"
    :space-between="50"
    :centeredSlides="true"
    :pagination="showDots ? pagination : false"
    :navigation="navigation"
    :autoplay="
      autoplay && {
        delay: autoplayTimeout,
        pauseOnMouseEnter: pauseOnMouseEnter,
      }
    "
    :loop="loop"
    :lazy="lazyload"
    :initial-slide="startPosition"
    :breakpoints="isGallery ? {} : responsive"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <!-- Pagination -->
    <div v-if="showDots" class="custom-pagination"></div>
    <!-- Navigation -->
    <div v-if="showNav" class="navigation-button-next left-[7%]">
      <!-- <ArrowNarrowLeftIcon class="h-6 w-6 text-grey-600" /> -->
    </div>
    <div v-if="showNav" class="navigation-button-prev right-[7%]">
      <!-- <ArrowNarrowRightIcon class="h-6 w-6 text-grey-600" /> -->
    </div>
    <!-- Slides -->
    <slot></slot>
  </swiper>
</template>

<script lang="ts">
import { swiperMixin } from "@/mixins/swiper.mixin";
import { Autoplay, Lazy, Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { defineComponent } from "vue";

export default defineComponent({
  mixins: [swiperMixin],
  props: {
    showDots: {
      type: Boolean,
      defalut: false,
    },
    showNav: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    startPosition: {
      type: Number,
      default: 0,
    },
    slidePerPage: {
      type: Number,
      default: 3,
    },
    slideAuto: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: Object,
      default: {
        "640": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "768": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "1024": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    autoplayTimeout: {
      type: Number,
      default: 3000,
    },
    pauseOnMouseEnter: {
      type: Boolean,
      default: false,
    },
    lazyload: {
      type: Boolean,
      default: false,
    },
    isGallery: {
      type: Boolean,
      default: false,
    },
    pml100: {
      type: Boolean,
      default: false,
    },
    pml200: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "Carousel",
  emits: ["onInit", "onChange"],

  data() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (_: number, className: string) {
          return `<span class="${className} dot-circle"></span>`;
        },
      },
      navigation: {
        nextEl: ".navigation-button-next",
        prevEl: ".navigation-button-prev",
      },

      modules: [Pagination, Lazy, Autoplay],
      navigationModule: Navigation,
      addTransitionClass: false,
    };
  },
  methods: {
    onSwiper(swiper: any) {
      setTimeout(() => {
        this.addTransitionClass = true;
      }, 100);
      this.$emit("onInit", swiper);
    },
    onSlideChange() {
      this.$emit("onChange");
    },
  },
});
</script>

<style lang="scss">
:root {
  --swiper-theme-color: var(--el-color-primary) !important;
}
.custom-swiper {
  overflow: hidden;
  &.pml100 {
    @media (min-width: 1280px) {
      .swiper-wrapper {
        // transform: translate3d(0px, 0px, 0px);
        margin-left: -228px;
      }
    }
    @media (min-width: 1536px) {
      .swiper-wrapper {
        // transform: translate3d(0px, 0px, 0px);
        margin-left: -275px;
      }
    }
  }
  &.pml200 {
    @media (min-width: 1280px) {
      .swiper-wrapper {
        // transform: translate3d(0px, 0px, 0px);
        margin-left: -420px;
      }
    }
    @media (min-width: 1536px) {
      .swiper-wrapper {
        // transform: translate3d(0px, 0px, 0px);
        margin-left: -349px;
      }
    }
  }

  &.has-transition {
    .swiper-slide.gallery {
      transition: transform 0.2s ease;

      &.swiper-slide-next,
      &.swiper-slide-prev {
        transition: transform 0.2s ease-in-out;
      }
    }
  }

  .swiper-slide.gallery {
    width: 60% !important;

    &.swiper-slide-next,
    &.swiper-slide-prev {
      filter: blur(3px);
      transform: scaleY(0.9);
    }
  }
  .swiper-slide.gallery80 {
    width: 75% !important;

    &.swiper-slide-next,
    &.swiper-slide-prev {
      filter: blur(3px);
      transform: scaleY(0.9);
    }
  }

  .navigation-button-next,
  .navigation-button-prev {
    @apply flex cursor-pointer w-12 h-12 bg-gray-300 items-center rounded-full justify-center hover:opacity-80 absolute;

    z-index: 1;
    top: 50%;
    transform: translateY(-50%);

    svg {
      // @apply text-primary;
    }
    &.swiper-button-disabled {
      @apply bg-gray-200;
      cursor: not-allowed;

      svg {
        // @apply text-primary/50;
      }
    }
  }

  .swiper-pagination {
    bottom: -40px !important;

    .dot-circle {
      width: 1.5rem;
      height: 11px;
      border-radius: 1rem;
      background-color: white;
      border: 1px solid var(--el-color-primary);
      margin-right: 10px;
      &.swiper-pagination-bullet-active {
        width: 3rem;
        border-color: var(--el-color-purple) !important;
        background-color: var(--el-color-purple);
      }
    }
  }

  @media (max-width: 640px) {
    .swiper-slide.gallery {
      width: 100% !important;
    }
  }
}
</style>
