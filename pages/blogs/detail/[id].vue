<template>
  <div>
    <Banner
      :title="bannerObj.title"
      :description="bannerObj.description"
      :image="bannerObj.image"
    />

    <div
      class="blogs_detail bg-transparent py-16 custom-container lg:grid lg:grid-cols-12"
    >
      <div class="flex flex-col lg:col-start-2 lg:col-end-12">
        <div
          class="flex lg:justify-between lg:items-end flex-col lg:flex-row sm:flex-row sm:justify-between sm:items-end sm:border-b-2 sm:border-gray-300 sm:pb-2 lg:border-b-0"
        >
          <div class="text-left flex items-center mb-8 sm:mb-auto lg:mb-auto">
            <img
              :src="avatar"
              class="object-cover w-16 h-16 rounded-full"
              alt="avatar"
            />
            <div class="ml-4">
              <div class="text-xl font-black font-title text-gray-600">
                {{ fullName }}
              </div>
              <div class="font-extralight text-base font-title">
                {{ jobPosition }}
              </div>
            </div>
          </div>
          <div
            class="flex pb-2 sm:pb-0 lg:pb-2 lg:pl-24 xl:pl-64 lg:border-b-2 lg:border-gray-300 border-b-2 border-gray-300 justify-between sm:border-b-0"
          >
            <div class="flex">
              <div class="mr-1">22:00 AM</div>
              <div class="font-extrabold">22/02/2022</div>
            </div>
            <div class="lg:ml-16 ml-8 flex flex-row">
              <div class="mr-4">
                <svg
                  class="h-6"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 612 612"
                  style="enable-background: new 0 0 612 612"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M609.608,315.426c3.19-5.874,3.19-12.979,0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72
                          S60.857,188.931,2.393,296.573c-3.19,5.874-3.19,12.979,0,18.853C60.858,423.069,174.892,496.147,306,496.147
                          S551.143,423.069,609.608,315.426z M306,451.855c-80.554,0-145.855-65.302-145.855-145.855S225.446,160.144,306,160.144
                          S451.856,225.446,451.856,306S386.554,451.855,306,451.855z"
                      />
                      <path
                        d="M306,231.67c-6.136,0-12.095,0.749-17.798,2.15c5.841,6.76,9.383,15.563,9.383,25.198c0,21.3-17.267,38.568-38.568,38.568
                          c-9.635,0-18.438-3.541-25.198-9.383c-1.401,5.703-2.15,11.662-2.15,17.798c0,41.052,33.279,74.33,74.33,74.33
                          s74.33-33.279,74.33-74.33S347.052,231.67,306,231.67z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <span>3 mins</span>
            </div>
          </div>
        </div>
        <img
          :src="thumbnail"
          alt="thumbnail"
          class="mt-16 object-cover h-96 lg:h-auto sm:h-96"
        />
        <div class="lg:py-16 pt-16 pb-8 flex flex-col text-left">
          <div class="mb-12 lg:text-3xl text-2xl font-extrabold text-gray-700">
            {{ title }}
          </div>
          <div
            class="mb-16 text-2xl text-gray-500 font-light lg:text-justify"
            v-html="content"
          ></div>
        </div>
        <div class="">
          <div
            class="mb-12 lg:text-3xl text-2xl font-extrabold text-gray-700 text-left font-title"
          >
            Recommended Articles
          </div>
          <div class="grid lg:grid-cols-2 grid-cols-1">
            <div
              class="py-4 border-b-2 text-gray-500 border-gray-500 text-xl lg:pr-16 sm:pr-36 md:pr-56 pr-16 mb-8 lg:mr-8 text-left cursor-pointer hover:underline"
              @click="openOtherDetail(blog.id)"
              v-for="blog in blogInfo.content"
            >
              {{ blog.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/banner/banner.vue";
import BlogService from "@/services/blog/blog.service";

export default {
  components: {
    Banner,
  },
  data() {
    return {
      bannerObj: {
        title: "Blogs",
        description: "",
        image: "./assets/image-about-page.jpg",
      },
      blogDetail: {},
      blogInfo: {},
    };
  },
  created() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (typeof this.$route.params.id === "string") {
      this.getBlogDetail(this.$route.params.id);
    }
    this.getBlogInfo();
  },
  methods: {
    openOtherDetail(id) {
      this.$router.push(`/blogs/detail/${id}`);
    },
    async getBlogDetail(id) {
      const res = await BlogService.getBlogDetail(id);
      this.blogDetail = res.data;
    },
    async getBlogInfo() {
      const res = await BlogService.getBlogInfo();
      this.blogInfo = res.data;
    },
  },
  computed: {
    title() {
      return this.blogDetail.title;
    },
    content() {
      return this.blogDetail.content;
    },
    fullName() {
      return this.blogDetail.author ? this.blogDetail.author.fullname : "";
    },
    avatar() {
      return this.blogDetail.author ? this.blogDetail.author.urlCV : "";
    },
    jobPosition() {
      return this.blogDetail.author
        ? this.blogDetail.author.jobPositions[0].jobPosition.name
        : "";
    },
    thumbnail() {
      return this.blogDetail.thumbnail ? this.blogDetail.thumbnail.url : "";
    },
  },
};
</script>

<style>
.h-120 {
  height: 30rem !important;
}
</style>
