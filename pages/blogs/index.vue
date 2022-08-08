<template>
  <div>
    <Banner
      :title="$t('blogs.heading')"
      :description="bannerObj.description"
      :image="bannerObj.image"
    />
    <div class="custom-container lg:grid lg:grid-cols-12">
      <div class="lg:col-start-2 lg:col-end-12"><BlogsCard></BlogsCard></div>
    </div>
  </div>
</template>

<script>
import BlogsCard from "./blogs-card/blogs-card.vue";
import Banner from "@/components/banner/banner.vue";
import BlogService from "@/services/blog/blog.service";

export default {
  name: "BlogPage",
  components: {
    BlogsCard,
    Banner,
  },
  data() {
    return {
      bannerObj: {
        description: "",
        image: "./assets/image-about-page.jpg",
      },
      blogInfo: {},
    };
  },

  created() {
    this.getBlogInfo();
  },
  methods: {
    async getBlogInfo() {
      const res = await BlogService.getBlogInfo();
      this.blogInfo = res.data;
    },
  },
};
</script>
