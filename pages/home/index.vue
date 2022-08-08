<template>
  <div>
    <HomeBanner></HomeBanner>
    <CoCarousel></CoCarousel>
    <ClientStatistic></ClientStatistic>
    <IntroCompany></IntroCompany>
    <div
      class="curve-bg-container relative w-screen md:min-h-[150vh] min-h-[50vh]"
    >
      <!-- Curve bg -->
      <div
        class="z-1 curve-bg w-screen absolute md:-top-[15vh] -top-[20px] left-0 bg-center bg-no-repeat md:h-[150vh] h-[50vh] md:bg-[length:130vw_150vh] bg-[length:130vw_50vh]"
      ></div>
      <!-- Contents -->
      <ClientReview></ClientReview>
      <Gallery />
    </div>
  </div>
</template>
<script>
import HomeBanner from "./component/banner/home-banner.vue";
import ClientStatistic from "./component/client-statistic/client-statistic.vue";
import CoCarousel from "./component/co-carousel/co-carousel.vue";
import IntroCompany from "./component/intro-company/intro-company.vue";
import ClientReview from "@/pages/home/component/client-review/client-review.vue";
import Gallery from "@/pages/home/component/gallery/gallery.vue";
import HomeService from "../../services/home/home.service";

export default {
  name: "Home",
  components: {
    HomeBanner,
    ClientStatistic,
    CoCarousel,
    IntroCompany,
    ClientReview,
    Gallery,
    HomeService,
  },
};
</script>
<style lang="scss"></style>
