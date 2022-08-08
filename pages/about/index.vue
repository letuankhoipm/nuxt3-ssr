<template>
  <div>
    <Banner
      :title="$t('about.heading')"
      :description="bannerObj.description"
      :image="bannerObj.image"
    ></Banner>
    <div>
      <CompanySolution />
      <CarouselPlatform></CarouselPlatform>
      <Developer />
      <CompanyExpert></CompanyExpert>
    </div>
  </div>
</template>
<script>
import CompanyExpert from "@/pages/about/component/company-expert/company-expert.vue";
import CompanySolution from "@/pages/about/component/company-solution/company-solution.vue";
import Developer from "@/pages/about/component/developer/developer.vue";
import Banner from "@/components/banner/banner.vue";
import CarouselPlatform from "@/pages/about/component/carousel-platform/carousel-platform.vue";

export default {
  name: "About",
  components: {
    CompanyExpert,
    CompanySolution,
    Banner,
    CarouselPlatform,
    Developer,
  },
  data() {
    return {
      bannerObj: {
        title: "About us",
        description: "",
        image: "./assets/banner-about-us.jpg",
      },
    };
  },
};
</script>
