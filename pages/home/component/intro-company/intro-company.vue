<template>
  <div class="custom-container">
    <div class="lg:grid lg:grid-cols-12">
      <span
        class="divider md:col-start-4 lg:col-start-2 lg:col-end-12 md:col-span-6 col-span-12 bg-gray-300 md:h-0.5 h-0.4 mb-16"
      ></span>
    </div>
    <div class="intro-company">
      <!-- q -->
      <div
        class="intro-company-card grid md:grid-rows-1 md:grid-cols-12 pb-10 pt-0"
      >
        <div
          class="md:col-start-2 md:col-span-4 w-full h-full grid order-last md:order-first mt-10 md:mt-0"
        >
          <img src="@/assets/banner-macbook-1.png" alt="banner" />
          <div
            class="grid grid-cols-5 border border-primary border-solid rounded-full h-10 md:justify-self-end justify-self-center md:hidden inline-flex"
          >
            <div
              class="col-span-4 pl-3 pr-3 flex items-center text-xs text-primary"
            >
              <a href="qkit.vn">LET US KNOW WHAT YOU WANT</a>
            </div>
            <div
              class="button-intro bg-primary border border-primary border-solid rounded-full h-10 m-[-0.09em]"
            >
              <span>
                <svg
                  class="ml-5"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div
          class="md:col-end-12 md:col-span-6 grid md:grid-rows-3 grid-rows-3 md:pl-4"
        >
          <div class="row-span-1 grid justify-start font-bold">
            <p
              class="ssm:pt-16 sm:pt-16 md:pt-0 text-left h-10 text-2xl lg:text-5xl md:text-4xl -mr-20 md:mb-10 lg:mb-14 flex relative font-black font-primary lg:w-full xl:w-auto"
            >
              {{ $t("home.intro.q.title") }}
            </p>
          </div>
          <div class="text-primary text-left row-span-2 grid">
            <p
              class="text-hidden absolute grid justify-self-end md:mr-10 font-black md:block hidden opacity-25 font-primary"
            >
              Q
            </p>
            <p
              class="text-hidden-1 text-primary grid justify-self-end md:mr-10 font-black md:hidden block absolute opacity-25 font-primary"
            >
              Q
            </p>
            <span
              class="divider bg-gray-300 md:h-0.5 h-0.4 mb-5 hidden md:block md:mb-3 mt-2"
            ></span>
            <p
              class="text-left col-start-1 justify-self-end mr-20 md:mr-0 lg:pt-4 lg:mb-10 md:mb-8 mt-10 lg:-mt-4 xl:-mt-12 text-base lg:text-xl"
            >
              {{ $t("home.intro.q.content") }}
            </p>
          </div>
          <div
            class="row-span-1 grid text-primary border border-primary border-solid rounded-full h-10 justify-self-end md:inline-flex hidden"
          >
            <div class="pl-5 pr-3 -center flex items-center pt-0.5">
              <a href="qkit.vn"> {{ $t("home.intro.q.button") }}</a>
            </div>
            <div
              class="button-intro bg-primary border border-primary border-solid rounded-full w-14 m-[-0.09em] flex items-center justify-center"
            >
              <span>
                <a href="qkit.vn">
                  <svg
                    class="w-7 h-7 mx-auto"
                    stroke="white"
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
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="divider-2 grid grid-cols-12">
        <span
          class="divider md:col-start-4 col-start-2 col-end-12 md:col-span-6 col-span-12 bg-gray-300 md:h-0.5 h-0.4 mb-5"
        ></span>
      </div>
      <!-- k -->
      <div class="intro-company-card grid md:grid-cols-12 pt-5 pb-10">
        <div
          class="md:col-start-2 grid grid-rows-2 md:col-span-6 justify-around"
        >
          <div
            class="row-span-1 grid justify-start font-bold order-fist -mt-5 md:mt-0"
          >
            <p
              class="md:pl-5 text-2xl flex items-center lg:text-5xl md:text-4xl mb-10 ssm:mb-12 font-black md:mb-14 lg:mb-10 font-primary"
            >
              {{ $t("home.intro.k.title") }}
            </p>
          </div>
          <div
            class="text-primary text-left md:pr-4 row-start-2 flex items-center grid -mt-10"
          >
            <p
              class="text-hidden opacity-25 absolute text-10xl grid justify-start-end md:mr-10 font-black md:block hidden font-primary"
            >
              K
            </p>
            <p
              class="text-hidden-2 opacity-25 text-primary md:mr-10 font-black md:hidden block grid justify-items-end md:justify-items-start -mb-16 font-primary"
            >
              K
            </p>
            <div class="relative intro-content md:-mt-20">
              <span
                class="divider bg-gray-300 md:h-0.5 h-0.4 mb-5 hidden md:block md:mb-3 md:ml-7"
              ></span>
              <p
                class="md:pl-7 mr-12 md:mr-0 ssm:mt-0 -mt-10 md:mt-0 text-base lg:text-xl"
              >
                {{ $t("home.intro.k.content") }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="md:col-end-12 md:col-span-4 grid md:justify-center justify-start order-first md:order-last"
        >
          <img
            class="md:pb-10 mb-20 ssm:mb-28 md:mb-0"
            src="@/assets/banner-macbook-2.png"
            alt="banner"
          />
        </div>
      </div>
      <!-- i -->
      <div
        class="intro-company-card pt-5 pb-10 ssm:pb-0 grid grid-rows-2 md:grid-rows-3"
      >
        <div class="grid grid-cols-12 font-bold order-fist row-span-1">
          <p
            class="text-2xl flex items-center lg:text-5xl md:text-4xl mb-10 font-black col-start-2 col-span-full md:col-start-6 lg:col-start-3 lg:col-end-12 font-primary ssm:text-left ssm:-ml-4 lg:ml-auto"
          >
            {{ $t("home.intro.i.title") }}
          </p>
          <p
            class="text-primary text-hidden md:block hidden -mt-80 md:-mt-80 opacity-25 text-10xl font-black col-start-2 md:col-start-11 lg:col-start-10 font-primary"
          >
            I
          </p>
          <p
            class="text-primary text-hidden-2 md:hidden block -mt-80 md:-mt-80 opacity-25 text-10xl font-black col-start-2 ssm:col-start-1 md:col-start-11 lg:col-start-10 font-primary ssm:pt-8"
          >
            I
          </p>
        </div>
        <div
          class="hidden md:block -mt-20 md:-mt-28 row-span-1 md:grid md:grid-cols-12"
        >
          <span
            class="divider bg-gray-300 md:h-0.5 h-0.4 mb-5 hidden md:block md:mb-3 md:col-start-5 md:col-span-full lg:col-start-5 lg:col-end-12"
          ></span>
        </div>
        <div
          class="md:-mt-80 md:grid md:grid-cols-12 pt-5 pb-10 -mt-40"
          id="tabs-intro"
        >
          <ul
            class="hidden md:block md:col-span-3 md:col-start-2 xl:col-start-2 xl:col-span-2"
            id="tabs-key"
          >
            <li
              v-for="(item, index) in companySolutions"
              :key="item.id"
              class="py-6 pr-4 text-left md:text-base lg:text-xl cursor-pointer"
              :class="{ active: isActive == index }"
              @click="slideIntroItem(index)"
            >
              {{
                $i18n.locale === "en"
                  ? item.companySolutionTranslations[0].title
                  : item.companySolutionTranslations[1].title
              }}
              <span
                class="md:top-2 md:bottom-2 md:left-36 lg:left-44"
                :class="{ 'bg-primary': isActive == index }"
              ></span>
            </li>
          </ul>
          <ul
            class="hidden md:block col-span-12 md:col-start-5 md:col-span-7 xl:col-end-12"
            id="tabs-content"
          >
            <li
              v-for="(item, index) in companySolutions"
              :key="item.id"
              class="tab-content text-left"
              :class="{ active: isActive == index }"
            >
              <p class="text-base lg:text-xl">
                {{ item.companySolutionTranslations[0].content }}
              </p>
              <img
                class="mx-auto h-80"
                :src="item.images[0].url"
                alt="image intro"
              />
            </li>
          </ul>
          <ul
            class="-mt-28 md:hidden col-span-12 md:col-start-5 lg:col-start-4 xl:col-start-5 xl:col-end-12 xl:-ml-8"
            id="tabs-content-small"
          >
            <li
              v-for="(item, index) in companySolutions"
              :key="item.id"
              class="tab-content-small text-left"
              :class="{ active: isActiveSmall == index }"
            >
              <p>
                {{
                  $i18n.locale === "en"
                    ? item.companySolutionTranslations[0].content
                    : item.companySolutionTranslations[1].content
                }}
              </p>
              <img
                class="mx-auto h-80 object-contain"
                :src="item.images[0].url"
                alt="img intro"
              />
            </li>
          </ul>

          <!-- dots -->
          <ul
            class="w-full flex flex-row justify-center gap-8 my-8 md:hidden"
            id="intro-dots"
          >
            <li
              class="intro-dot-item w-8 h-4 border-2 border-solid rounded-lg border-primary"
              :class="{
                active: isActiveSmall == 0,
                'bg-primary': isActiveSmall == 0,
              }"
              @click="slideIntroItemSmall(0)"
            ></li>
            <li
              class="intro-dot-item w-8 h-4 border-2 border-solid rounded-lg border-primary"
              :class="{
                active: isActiveSmall == 1,
                'bg-primary': isActiveSmall == 1,
              }"
              @click="slideIntroItemSmall(1)"
            ></li>
            <li
              class="intro-dot-item w-8 h-4 border-2 border-solid rounded-lg border-primary"
              :class="{
                active: isActiveSmall == 2,
                'bg-primary': isActiveSmall == 2,
              }"
              @click="slideIntroItemSmall(2)"
            ></li>
          </ul>
        </div>
      </div>
      <!-- t -->
      <div
        class="intro-company-card pt-5 pb-10 md:grid md:grid-cols-12 mt-20 ssm:mt-10"
      >
        <div
          class="w-full grid grid-cols-12 md:col-span-6 md:col-start-2 lg:col-start-2 lg:col-span-6"
        >
          <div
            class="col-span-1 col-start-1 lg:col-span-2 lg:col-start-1 md:-ml-10 text-primary font-bold"
          >
            <p
              class="text-hidden md:block hidden text-10xl opacity-25 -ml-4 lg:ml-10 -mt-40 font-primary"
            >
              T
            </p>
            <p
              class="text-primary text-hidden-2 md:hidden block text-10xl opacity-25 -mt-40 font-primary ssm:pt-12"
            >
              T
            </p>
          </div>
          <div
            class="col-span-full col-start-3 md:col-start-2 lg:col-start-3 lg:ml-2"
          >
            <p class="text-left text-base lg:text-xl col-start-2 col-span-full">
              {{ $t("home.intro.t.content") }}
            </p>
            <p
              class="text-2xl text-left flex items-center lg:text-5xl md:text-4xl mb-10 font-black col-span-full mt-8 font-primary"
            >
              {{ $t("home.intro.t.title") }}
            </p>
          </div>
        </div>
        <div
          class="w-full grid grid-cols-3 gap-8 lg:gap-y-8 lg:gap-x-0 md:col-span-4 md:-mt-20 md:pl-8 md:pr-0 mb-20"
        >
          <div
            v-for="item in technologies"
            class="flex justify-center"
            @click="toggleModal(item)"
          >
            <img
              class="w-24 h-24 md:pb-8 lg:pb-0"
              :src="item.image.url"
              alt="technology item"
            />
          </div>
        </div>
        <Teleport to="body">
          <div
            v-if="showModal"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
            @click="closeModal"
          >
            <div class="relative my-6 mx-auto min-w-[500px]">
              <!--content-->
              <div
                class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                @click.stop
              >
                <!--header-->
                <div
                  class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                >
                  <h3 class="text-3xl font-semibold">Technology</h3>
                  <button
                    class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    v-on:click="closeModal"
                  >
                    <span
                      class="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
                    >
                      ×
                    </span>
                  </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto">
                  <div>
                    <img
                      class="w-[200px]"
                      :src="technologyImg"
                      alt="technology image"
                    />
                    <h1 class="font-bold text-xl my-5">{{ technologyName }}</h1>
                    <p class="text-base font-light">
                      {{ technologyDesc }}
                    </p>
                  </div>
                </div>
                <!--footer-->
                <div
                  class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
                >
                  <div class="flex justify-end">
                    <a href="https://angular.io/docs" target="_blank">
                      <div
                        class="font-bold uppercase flex cursor-pointer hover:text-primary text-xs items-center"
                      >
                        Go to docs page
                        <!-- <ArrowNarrowRightIcon class="h-6 w-6 ml-5 text-primary" /> -->
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="showModal"
            class="opacity-25 fixed inset-0 z-40 bg-black"
          ></div>
        </Teleport>
      </div>
    </div>
  </div>
</template>
<script>
import homeService from "@/services/home/home.service";
// import HomeService from "@/modules/landing-page/services/home/home.service";

// import required modules

export default {
  components: {},
  name: "IntroCompany",
  data() {
    return {
      isActive: 0,
      isActiveSmall: 0,
      isOpen: false,
      centerDialogVisible: false,
      selectedItem: null,
      technologies: [],
      technologyName: "",
      technologyDesc: "",
      technologyImg: "",
      companySolutions: [],
      timing: 0,
      showModal: false,
    };
  },
  created() {
    this.getTechnologies();
    this.getCompanySolutions();
  },
  computed: {},
  methods: {
    openDialog(item) {
      this.centerDialogVisible = true;
      this.selectedItem = item;
      this.technologyName = item.name;
      this.technologyImg = item.image.url;
    },
    slideIntroItem(item) {
      this.isActive = item;
      const tabsContent = document.getElementsByClassName("tab-content");
      const tab_0 = tabsContent[0];
      const tab_1 = tabsContent[1];
      const tab_2 = tabsContent[2];
      if (this.isActive === 0) {
        tab_0.style.top = "0";
        tab_1.style.top = 800 + "px";
        tab_2.style.top = 1600 + "px";
      } else if (this.isActive === 1) {
        tab_0.style.top = -800 + "px";
        tab_1.style.top = "0";
        tab_2.style.top = 800 + "px";
      } else {
        tab_0.style.top = -1600 + "px";
        tab_1.style.top = -800 + "px";
        tab_2.style.top = "0";
      }
    },
    slideIntroItemSmall(item) {
      this.isActiveSmall = item;
      const tabsContent = document.getElementsByClassName("tab-content-small");
      const tab_0 = tabsContent[0];
      const tab_1 = tabsContent[1];
      const tab_2 = tabsContent[2];
      if (this.isActiveSmall === 0) {
        tab_0.style.left = "0";
        tab_1.style.left = 100 + "%";
        tab_2.style.left = 200 + "%";
      } else if (this.isActiveSmall === 1) {
        tab_0.style.left = -100 + "%";
        tab_1.style.left = "0";
        tab_2.style.left = 100 + "%";
      } else {
        tab_0.style.left = -200 + "%";
        tab_1.style.left = -100 + "%";
        tab_2.style.left = "0";
      }
    },
    async getTechnologies() {
      const res = await homeService.getTechnologies();
      this.technologies = res.data;
    },
    async getCompanySolutions() {
      const res = await homeService.getCompanySolution();
      this.companySolutions = res.data;
    },
    toggleModal(item) {
      if (item) {
        this.technologyName = item.name;
        this.technologyImg = item.image.url;
      }
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
<style lang="scss">
.divider {
  background-color: #707070 !important;
  height: 0.06em;
}

.text-hidden {
  font-size: 14.5em;
  margin-top: -1em;
}
.text-hidden-1 {
  font-size: 9.5em;
  margin-top: -0.7em;
}

.text-hidden-2 {
  font-size: 9.5em;
  margin-top: -1.45em;
}

.button-intro {
  margin: -0.09em;
}
#tabs-intro {
  #tabs-key {
    li {
      font-size: 1.25rem;
      font-weight: bold;
      color: #757575;
      position: relative;
      span {
        display: none;
        position: absolute;
        top: 0.5rem;
        bottom: 0.5rem;
        width: 0.75rem;
        background: #fff;
        border-radius: 0.5rem;
        display: block;
        transition: all 0.25s ease-in-out;
      }
    }
  }
  #tabs-content {
    height: 500px;
    position: relative;
    overflow: hidden;
    li {
      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 500px;
      }
      &:nth-child(3) {
        top: 1000px;
      }
      position: absolute;
      left: 0;
      right: 0;
      display: block;
      font-size: 1rem;
      line-height: 2rem;
      transition: all 0.5s ease-out;
      &.active {
        top: 0;
        display: block;
      }
    }
  }
  #tabs-content-small {
    height: 500px;
    position: relative;
    overflow: hidden;
    li {
      width: 100%;
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        left: 100%;
      }
      &:nth-child(3) {
        left: 200%;
      }
      position: absolute;
      top: 0;
      bottom: 0;
      display: block;
      font-size: 1rem;
      line-height: 2rem;
      transition: all 0.5s ease-out;
      &.active {
        left: 0;
        display: block;
      }
    }
  }
}

.intro-dot-item {
  transition: all 0.5s ease-in-out;
  &.active {
    width: 3rem !important;
  }
}
</style>
