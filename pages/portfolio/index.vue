<template>
  <div>
    <Banner
      :title="$t('portfolio.heading')"
      :description="bannerObj.description"
      :image="bannerObj.image"
    />
    <SimpleMakeBeautiful></SimpleMakeBeautiful>
    <RecentWorks></RecentWorks>
  </div>
</template>
<script>
import RecentWorks from "@/pages/portfolio/component/recent-works/recent-works.vue";
import SimpleMakeBeautiful from "./component/simple-make-beautiful/simple-make-beautiful.vue";
import Banner from "@/components/banner/banner.vue";

export default {
  name: "Portfolio",
  components: {
    RecentWorks,
    Banner,
    SimpleMakeBeautiful,
  },
  data() {
    return {
      bannerObj: {
        description: "",
        image: "./assets/banner-portfolio.jpg",
      },
    };
  },
  created() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
};
</script>
