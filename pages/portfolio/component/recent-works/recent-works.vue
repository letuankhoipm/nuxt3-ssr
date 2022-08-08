<template>
  <div
    class="custom-container lg:grid lg:grid-cols-12 pb-[40px] overflow-hidden"
  >
    <div class="lg:col-start-2 lg:col-end-12">
      <div class="recent-work grid grid-cols-12 pb-0">
        <div
          class="order-last md:order-first col-span-10 col-start-2 md:text-6xl text-3xl text-darkLavender font-bold grid justify-center mb-5 font-primary"
        >
          {{ $t("portfolio.title.title2") }}
        </div>
        <hr />
      </div>
      <div class="card grid md:grid-cols-12 grid-cols-2 mb-5 gap-x-8">
        <div
          class="md:col-span-4 lg:col-span-4 col-span-1 rounded-xl shadow-lg shadow-gray mb-10 md:mt-10"
          v-for="(item, index) in projects"
          :key="item.id"
        >
          <div class="grid grid-rows-8 grid-cols-1" v-if="index < maxProject">
            <div class="row-span-5 recent-img lg:h-80 md:h-72">
              <a href="qkit.vn">
                <img
                  :src="item.images[0].url"
                  alt=""
                  class="object-cover lg:h-80 md:h-72 lg:w-full rounded-t-xl"
                />
              </a>
            </div>
            <div
              class="md:text-2xl text-md recent-card-title row-span-1 text-left font-bold md:pl-5 pt-3 pl-3 pr-3 md:pr-5 md:pt-4 md:pb-4"
            >
              <a href="qkit.vn"
                ><p class="md:mb-3 font-britannic font-bold">
                  {{ item.projectTranslations[0].name }}
                </p></a
              >
              <hr />
            </div>
            <div
              class="md:line-clamp-2 hidden md:block recent-content row-span-1 md:text-sm text-xs text-left md:pl-5 md:pr-5"
            >
              {{ item.projectTranslations[0].description }}
            </div>
            <NuxtLink
              :to="{
                path: `/portfolio/detail/${item.id}`,
              }"
              class="row-span-1 pt-2 pb-2 justify-self-end pl-5 pr-5"
            >
              <span>
                <svg
                  class="w-7 h-7"
                  stroke="var(--el-color-primary)"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="mb-10 mt-5 text-center"
        v-if="maxProject < projects.length"
        @click="seeMore"
      >
        <button round class="view-more w-60 text-md">
          {{ $t("portfolio.button") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import PortfolioService from "@/services/portfolio/portfolio.service";

export default {
  name: "RecentWorks",
  data() {
    return {
      projectsInfo: {},
      projects: [],
      maxProject: 3,
    };
  },
  async created() {
    await this.getProjects();
  },
  methods: {
    async getProjects() {
      const res = await PortfolioService.getProjects();
      this.projectsInfo = res.data;
      this.projectsInfo.content.forEach(async (item) => {
        let id = item.id + "";
        await this.getProject(id);
      });
    },
    async getProject(id) {
      const res = await PortfolioService.getProject(id);
      this.projects.push(res.data);
    },
    seeMore() {
      this.maxProject += 1;
    },
  },
};
</script>
<style lang="scss">
.divider {
  background-color: #707070 !important;
}
</style>
