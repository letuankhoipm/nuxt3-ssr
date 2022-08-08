<template>
  <div class="banner overflow-hidden md:min-h-[100vh] relative">
    <div class="content custom-container lg:grid lg:grid-cols-12">
      <div
        class="lg:col-start-2 lg:col-end-12 items-center justify-between flex md:flex-row flex-col-reverse mb-[150px] mt-[150px]"
      >
        <div class="flex-1 flex flex-col items-start mt-8">
          <div>
            <h1
              class="text-white font-bold text-left md:text-4xl lg:text-5xl text-3xl mb-5 font-title"
            >
              {{ $t("home.heading1") }} <br />
              {{ $t("home.heading2") }}
            </h1>
          </div>
          <p class="text-left text-white font-light lg:text-2xl text-xl">
            {{ $t("home.desc") }}
          </p>
          <div
            class="live-us mt-3 border mr-auto inline-flex relative w-[180px] h-[40px] rounded-md"
          >
            <span
              class="btn-live-us text-white flex items-center uppercase px-7 cursor-pointer hover:opacity-80 font-britannic"
              @click="toggleModal"
            >
              <!-- <PlayIcon class="h-6 w-6 mr-2" /> -->
              {{ $t("home.buttons.btn1") }}</span
            >
          </div>
        </div>
        <div class="ml-10 md:w-96 w-70 mb-5 md:mb-0">
          <!-- <Galaxy></Galaxy> -->

          <img class="rounded-md" src="~/assets/ab.svg" alt="banner image" />
        </div>
      </div>
    </div>
    <!-- Background and animation -->
    <div class="w-screen absolute bottom-0 left-0 wave z-[4]"></div>

    <div
      class="w-screen absolute bottom-0 left-0 wave wave-1 transform scale-125 opacity-20 z-[2]"
    ></div>
    <div
      class="w-screen absolute bottom-0 left-0 wave wave-2 transform scale-150 opacity-30 z-[3]"
    ></div>
  </div>
  <!-- start modal -->
  <div>
    <Teleport to="body">
      <div
        v-if="showModal"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex h-[100vh]"
        @click="closeModal"
      >
        <div class="relative w-auto my-6 mx-auto max-w-6xl">
          <!--content-->
          <div
            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            @click.stop
          >
            <!--header-->
            <div
              class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
            >
              <h3 class="text-3xl font-semibold">
                Hear me! And rejoices to making lots of awesome software.
              </h3>
              <button
                class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                v-on:click="toggleModal()"
              >
                <span
                  class="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
                >
                  x
                </span>
              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto">
              <p class="mb-4">QKIT Software, Inc</p>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F101932425695680%2Fvideos%2F540235557258769%2F&show_text=false&width=560&t=0"
                width="100%"
                height="500px"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <!--footer-->
            <div
              class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
            >
              <button
                class="text-red-500 bg-transparent border border-solid border-black-500 hover:bg-black-500 hover:text-white active:bg-black-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="toggleModal()"
              >
                Close
              </button>
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
  <!-- end modal -->
</template>

<script>
export default {
  components: {},
  name: "HomeBanner",
  data() {
    return {
      bannerVideoUrl: "https://www.youtube.com/embed/KxZAdEGpYAw",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 150px 0px 120px;
  position: relative;
  background-image: url("@/assets/bg.png");
  background-size: cover;
  background-position: center;
  .btn-live-us {
    font-size: 18px;
    font-weight: bold;
    min-width: 185px;
  }
}
@media (min-width: 1024px) {
  .banner-image {
    width: 22.375rem !important;
  }
}

.wave {
  height: 150px;
  background-size: 2000px 150px;
  background-position: 0 0;
  background-image: url("@/assets/wave.png");

  &.wave-1 {
    animation: animate 20s linear infinite;
  }
  &.wave-2 {
    animation: animate2 20s linear infinite;
  }
}

.live-us {
  border-radius: var(--el-border-radius-round);
}

@keyframes animate {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 2000px;
  }
}

@keyframes animate2 {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: -2000px;
  }
}
</style>
