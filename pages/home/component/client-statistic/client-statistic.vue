<template>
  <div class="custom-container lg:grid lg:grid-cols-12">
    <div
      class="lg:col-start-2 lg:col-end-12 client-statistics my-10 grid grid-cols-1 md:grid-cols-3 py-10 xl:grid-cols-3 xl:gap-4"
      v-if="statistics.length"
    >
      <span
        class="divider block sm:hidden md:col-start-4 bg-gray-300 md:h-0.5 h-0.4 mb-5"
      ></span>
      <div
        class="grid w-full mb-8 md:mb-0 md:px-4 lg:px-8 xl:px-2 xl:col-start-1 xl:col-span-1"
      >
        <div class="statistic-card gird grid-rows-3 md:col-span-4">
          <div class="statistic-card-count grid justify-items-start font-black">
            <p class="font-primary">
              {{ statistics[0].statisticsTranslations[0].value }}
            </p>
          </div>
          <div
            class="statistic-card-content flex justify-between font-extrabold items-end"
          >
            <p>{{ statistics[0].statisticsTranslations[0].title }}</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 700"
                class="w-10 h-10"
              >
                <path
                  d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                />
              </svg>
            </span>
          </div>
          <div
            class="statistic-card-note md:justify-items-end justify-items-start ml-12 grid italic"
          >
            <p>{{ statistics[0].statisticsTranslations[0].description }}</p>
          </div>
        </div>
      </div>
      <div
        class="w-full mb-8 md:mb-0 md:pl-0 md:pr-0 md:px-4 lg:px-8 xl:px-2 xl:col-start-2 xl:col-span-1"
      >
        <div class="statistic-card gird grid-rows-3 md:col-span-4">
          <div class="statistic-card-count grid justify-items-start font-black">
            <p class="font-primary">
              {{ statistics[1].statisticsTranslations[0].value }}
            </p>
          </div>
          <div
            class="statistic-card-content flex justify-between font-extrabold items-end"
          >
            <p class="md:pl-6">
              {{ statistics[1].statisticsTranslations[0].title }}
            </p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 700"
                class="w-10 h-10"
              >
                <path
                  d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                />
              </svg>
            </span>
          </div>
          <div
            class="statistic-card-note md:justify-items-end justify-items-start ml-12 grid italic"
          >
            <p>{{ statistics[1].statisticsTranslations[0].description }}</p>
          </div>
        </div>
      </div>
      <div class="md:px-4 lg:px-8 xl:px-2 w-full xl:col-start-3 xl:col-span-1">
        <div class="statistic-card gird grid-rows-3 md:col-span-4">
          <div class="statistic-card-count grid justify-items-start font-black">
            <p class="font-primary">
              {{ statistics[2].statisticsTranslations[0].value }}
            </p>
          </div>
          <div
            class="statistic-card-content flex justify-between font-bold items-end"
          >
            <p class="md:pl-6 font-extrabold">
              {{ statistics[2].statisticsTranslations[0].title }}
            </p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 700"
                class="w-10 h-10"
              >
                <path
                  d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"
                />
              </svg>
            </span>
          </div>
          <div
            class="statistic-card-note md:justify-items-end justify-items-start ml-12 grid italic"
          >
            <p>{{ statistics[2].statisticsTranslations[0].description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeService from "@/services/home/home.service";
export default {
  name: "ClientStatistic",
  components: {},
  data() {
    return {
      statistics: [],
    };
  },
  created() {
    this.getStatistic();
  },
  computed: {},
  methods: {
    async getStatistic() {
      const res = await homeService.getStatistics();
      this.statistics = res.data;
    },
  },
};
</script>
<style lang="scss">
.divider {
  background-color: #707070 !important;
}
.client-statistics {
  color: var(--el-color-primary);
  .statistic-card-count {
    font-size: 3.8125em;
  }
  .statistic-card-content {
    font-size: 2em;
    margin: -0.5em 0 0 1em;
    padding: 0 0 0.1em 0;
    svg {
      color: black;
    }
  }
  .statistic-card-note {
    font-size: 1.0625em;
  }
}
</style>
