<template>
  <div>
    <Banner
      :title="title"
      :description="
        projectDetail.projectTranslations[0]
          ? projectDetail.projectTranslations[0].description
          : ''
      "
      :image="projectDetail.images[0] ? projectDetail.images[0].url : ''"
    />
    <div class="custom-container lg:grid lg:grid-cols-12">
      <div class="lg:col-start-2 lg:col-end-12">
        <CarouselPart
          :images="projectDetail.images"
          :desc="
            projectDetail.projectTranslations[0]
              ? projectDetail.projectTranslations[0].description
              : ''
          "
        ></CarouselPart>
        <GalleryPart
          :images="projectDetail.images"
          :desc="
            projectDetail.projectTranslations[0]
              ? projectDetail.projectTranslations[0].description
              : ''
          "
        ></GalleryPart>
        <MoreProject></MoreProject>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/banner/banner.vue";
import GalleryPart from "../component/recent-works-detail/gallery-part.vue";
import CarouselPart from "../component/recent-works-detail/carousel-part.vue";
import MoreProject from "../component/recent-works-detail/more-project.vue";
import PortfolioService from "@/services/portfolio/portfolio.service";

export default {
  name: "PortfolioDetailPage",
  components: { Banner, GalleryPart, CarouselPart, MoreProject },
  data() {
    return {
      bannerObj: {
        title: "Military 7a medical application",
        description: "Application for health management end medicals",
        image: "./assets/banner-contact-us.jpg",
      },
      projectDetail: {
        published: true,
        createdAt: "",
        updatedAt: "",
        projectTranslations: [],
        images: [],
      },
    };
  },
  created() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (typeof this.$route.params.id === "string") {
      this.getProjectDetail(this.$route.params.id);
    }
  },
  methods: {
    async getProjectDetail(id) {
      const res = await PortfolioService.getProject(id);
      this.projectDetail = res.data;
    },
  },
  computed: {
    title() {
      return this.projectDetail.projectTranslations[0]
        ? this.projectDetail.projectTranslations[0].name
        : "";
    },
  },
};
</script>

<style scoped></style>
