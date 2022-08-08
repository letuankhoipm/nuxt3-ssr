<template>
  <div>
    <div class="pb-12">
      <div v-for="result in results" :key="result.id">
        <div class="blogs-card bg-transparent lg:pt-12 pb-32 pt-12 pb-0">
          <div
            class="main_card grid lg:grid-cols-2 grid-cols-1 lg:p-8 xl:p-8 2xl:p-8 md:p-6 sm:p-6 p-6"
          >
            <div
              class="image sm:p-10 md:p-10 lg:pl-12 xl:pl-16 2xl:pl-18 p-6"
              :style="{
                'background-image': `url('${result.thumbnail.url}')`,
              }"
            >
              <div class="info text-left flex flex-row items-center lg:pb-20">
                <img
                  :src="result.author ? result.author.urlCV : ''"
                  class="object-cover w-16 h-16 rounded-full"
                />
                <div class="ml-4 text-white">
                  <div class="text-xl font-black font-title">
                    {{ result.author ? result.author.fullname : "" }}
                  </div>
                  <div class="font-extralight text-lg">
                    {{
                      result.author
                        ? result.author.jobPositions[0].jobPosition.name
                        : ""
                    }}
                  </div>
                </div>
              </div>
              <div
                class="description lg:mt-96 sm:mt-60 md:mt-60 xl:mt-96 2xl:mt-96 mt-60 text-right text-white"
              >
                <div
                  class="font-extralight text-lg lg:pl-28 sm:pl-44 md:pl-56 truncate"
                >
                  {{ result.shortDescription }}
                </div>
              </div>
            </div>
            <div
              class="lg:pl-12 xl:pl-14 flex flex-col sm:mt-8 mt-8 md:mt-8 lg:mt-0"
            >
              <div class="flex-1 flex justify-end items-center">
                <div class="text-right">
                  <div class="text-3xl font-black text-black font-title">
                    {{ result.title }}
                  </div>
                  <div
                    class="lg:py-4 xl:py-4 md:py-8 2xl:py-4 text-lg sm:py-8 py-8 text-gray-500"
                  >
                    {{ result.shortDescription }}
                  </div>
                  <div class="sm:text-right text-center sm:mb-12 lg:mb-0">
                    <button
                      class="bg-darkLavender border border-white text-white rounded-full sm:px-24 md:px-32 lg:px-16 xl:px-16 2xl:px-24 py-3 w-full sm:w-auto"
                      @click="goBlogsDetail(result.id)"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
              <div class="sm:text-left">
                <div
                  class="flex lg:justify-end sm:justify-start lg:items-end xl:items-end 2xl:items-end lg:mt-0 sm:-mt-5 sm:pb-0.5 justify-between mt-4"
                >
                  <div class="flex">
                    <div class="mr-1">22:00 AM</div>
                    <div class="font-extrabold">22/02/2022</div>
                  </div>

                  <div class="sm:ml-8 ml-4 flex flex-row">
                    <div class="sm:mr-2 mr-2 md:mr-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="lg:flex lg:justify-center lg:items-center py-2 cursor-pointer bg-darkLavender border border-white text-white rounded-full w-72 mx-auto md:w-80 lg:bg-transparent lg:border lg:border-white lg:text-gray-700 lg:mb-20 mb-20 mt-10"
      @click="openAddPage"
      v-if="showBtn"
    >
      <div class="lg:mr-8 lg:font-extrabold lg:text-xl text-center">
        {{ $t("blogs.button") }}
      </div>
      <div class="h-6 w-6 lg:block hidden">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 490 490"
          style="enable-background: new 0 0 490 490"
          xml:space="preserve"
        >
          <g>
            <path
              d="M52.8,311.3c-12.8-12.8-12.8-33.4,0-46.2c6.4-6.4,14.7-9.6,23.1-9.6s16.7,3.2,23.1,9.6l113.4,113.4V32.7
              c0-18,14.6-32.7,32.7-32.7c18,0,32.7,14.6,32.7,32.7v345.8L391,265.1c12.8-12.8,33.4-12.8,46.2,0c12.8,12.8,12.8,33.4,0,46.2
              L268.1,480.4c-6.1,6.1-14.4,9.6-23.1,9.6c-8.7,0-17-3.4-23.1-9.6L52.8,311.3z"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import BlogService from "@/services/blog/blog.service";
export default {
  data() {
    return {
      showBtn: true,
      arrs: [],
      index: 1,
      results: [],
      blogInfo: {},
    };
  },
  methods: {
    goBlogsDetail(id) {
      this.$router.push({
        path: "blogs/detail/" + id,
      });
    },
    openAddPage() {
      this.index = this.index + 3;
      this.results = this.arrs.slice(0, this.index);
      if (this.results.length === this.arrs.length) {
        this.showBtn = false;
      }
    },
    async getBlogInfo() {
      const res = await BlogService.getBlogInfo();
      this.blogInfo = res.data;
    },
  },
  async created() {
    await this.getBlogInfo();

    this.results = [
      {
        ...this.blogInfo.content[0],
      },
    ];

    this.arrs = this.blogInfo.content.map((item) => {
      return {
        ...item,
      };
    });
  },
};
</script>

<style lang="scss">
.image {
  background-size: cover;
  background-position: center;
}
</style>
