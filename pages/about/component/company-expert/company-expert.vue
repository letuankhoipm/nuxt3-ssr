<template>
  <div class="custom-container lg:grid lg:grid-cols-12 pb-32">
    <div class="lg:col-start-2 lg:col-end-12">
      <div class="company-expert grid md:grid-cols-12 pb-0">
        <div
          class="text-darkLavender font-title sm:text-5xl text-4xl font-black md:col-start-1 text-left col-span-12 grid justify-start"
        >
          {{ $t("about.title.t3") }}
        </div>
      </div>
      <div class="company-expert grid md:grid-cols-12 pt-10 pb-10 gap-x-10">
        <div
          class="md:col-span-4 rounded-xl shadow-lg shadow-gray grid grid-cols-12 mt-10"
          v-for="(item, index) in major"
          :key="item.id"
        >
          <div
            class="col-span-2 md:mt-3 md:ml-9 mt-4 ml-8 grid justify-self-center"
          >
            <!-- <span class="">
              <svg :fill="item.fill" viewBox="0 0 630 630" class="w-10">
                <path :d="item.icon" />
              </svg>
            </span> -->
            <span>
              <img :src="item.image.url" alt="logo icon" class="w-10" />
            </span>
          </div>
          <div class="col-span-9 col-end-12 grid grid-rows-2 ml-5">
            <div
              class="row-span-1 flex items-center font-bold text-black text-xl text-left relative"
            >
              {{ item.majorTranslations[0].title }}
            </div>
            <div
              class="row-span-1 flex items-center text-left mb-4 -mt-2 md:mt-0 text-sm"
            >
              {{ item.majorTranslations[0].description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AboutService from "@/services/about/about.service";
export default {
  name: "CompanyExpert",
  components: {},
  data() {
    const expertCard = [
      {
        icon: "M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z",
        fill: "var(--el-color-primary)",
        title: "Website Development",
        content:
          "We use the best-in-class frameworks to build sites that work for your business.",
      },

      {
        icon: "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",
        fill: "#3159D9",
        title: "Moblie Development",
        content:
          "We enable you to work on the go with native anf hybrid mobile development.",
      },
      {
        icon: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z",
        fill: "#0FD581",
        title: "UX / UI Design",
        content:
          "We solve your performance problems using human-centered design methods.",
      },

      {
        icon: "M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z",
        fill: "#CE3535",
        title: "Architectural System Build",
        content:
          "We use the best-in-class database to build system that work for your business.",
      },

      {
        icon: "M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z",
        fill: "#000000",
        title: "Project Management",
        content:
          "No matter Agile or Waterfall, we make sure your project stay well-organized.",
      },
      {
        icon: "M477.7 186.1L309.5 18.3c-3.1-3.1-8.2-3.1-11.3 0l-34 33.9c-3.1 3.1-3.1 8.2 0 11.3l11.2 11.1L33 316.5c-38.8 38.7-45.1 102-9.4 143.5 20.6 24 49.5 36 78.4 35.9 26.4 0 52.8-10 72.9-30.1l246.3-245.7 11.2 11.1c3.1 3.1 8.2 3.1 11.3 0l34-33.9c3.1-3 3.1-8.1 0-11.2zM318 256H161l148-147.7 78.5 78.3L318 256z",
        fill: "#CBFB49",
        title: "Quality Assurance",
        content: "Maximize the test coverage to deliver high-quality software.",
      },
    ];

    return {
      expertCard,
      major: {},
    };
  },
  computed: {},
  created() {
    this.getMajor();
  },
  methods: {
    async getMajor() {
      const res = await AboutService.getMajor();
      this.major = res.data;
    },
  },
};
</script>
