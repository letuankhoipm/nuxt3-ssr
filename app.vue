<template>
  <div
    class="main min-h-screen transform duration-500 overflow-hidden"
    :class="{
      'translate-x-full ease-in': openSidebar,
      'ease-out': !openSidebar,
      dark: themeMode === 'dark',
    }"
  >
    <Navbar @onToggle="triggerToggle" @changeThemeMode="changeTheme" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import { swiperMixin } from "@/mixins/swiper.mixin";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  mixins: [swiperMixin],
  name: "LandingPage",
  components: { Navbar, Footer },

  head() {
    return {
      htmlAttrs: {
        lang: "en",
      },
      title: "QKIT Software, Inc | Home",
      viewport: "width=device-width, initial-scale=1, maximum-scale=5",
      charset: "utf-8",
      meta: [
        {
          name: "description",
          content: "QKIT Software, Inc - Outsourcing Company in Vietnam",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://res.cloudinary.com/qkit/image/upload/v1659931359/public/images/mini_logo_xcmt16.svg",
        },
      ],
    };
  },

  data() {
    return {
      openSidebar: false,
      themeMode: "light",
    };
  },
  computed: {},
  methods: {
    triggerToggle(value) {
      this.openSidebar = value;
    },
    changeTheme(value) {
      this.themeMode = value;
    },
  },
};
</script>
