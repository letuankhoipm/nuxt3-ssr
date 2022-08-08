<template>
  <div class="contact-info custom-container lg:grid lg:grid-cols-12">
    <div
      class="lg:col-start-2 lg:col-end-12 grid grid-cols-1 lg:grid-cols-3 gap-x-2 auto-cols-fr gap-0 text-left"
    >
      <div
        class="map px-10 sm:px-20 md:px-32 lg:px-4 xl:px-16 py-36 sm:py-44 md:py-48 lg:py-10 2xl:py-36"
      >
        <p class="title font-bold text-white mb-8">
          {{ $t("contact.title.title1") }}
        </p>
        <button
          class="uppercase border border-white text-white rounded-full py-2 font-bold px-10 sm:px-20 lg:px-8 2xl:px-20"
          @click.prevent="openMaps"
        >
          {{ $t("contact.desc.desc1") }}
        </button>
      </div>
      <div
        class="bg-eerieBlack text-white px-10 sm:px-20 md:px-32 lg:px-4 xl:px-16 py-32 md:py-44 lg:py-10 2xl:py-36"
      >
        <p class="title font-bold mb-8">{{ $t("contact.title.title2") }}</p>
        <div class="leading-loose">
          <p>+84 541 654 472</p>
          <p>contactus@qkit.com</p>
          <p>{{ $t("contact.desc.desc2") }}</p>
        </div>
      </div>
      <div
        class="bg-cultured text-neutral-800 px-10 sm:px-20 md:px-32 lg:px-4 xl:px-16 py-32 md:py-44 lg:py-10 2xl:py-36"
      >
        <p class="title font-bold mb-8">{{ $t("contact.title.title3") }}</p>
        <div class="leading-loose">
          <span>{{ $t("contact.desc.desc3.desc31") }}</span>
          <input
            type="text"
            class="bg-transparent border-0 border-b border-neutral-800 mx-2 focus:outline-none mb-2"
            id="iptfullName"
            v-model="fullName"
          />
          <span>{{ $t("contact.desc.desc3.desc32") }}</span>
          <input
            type="email"
            class="bg-transparent border-0 border-b border-neutral-800 mx-2 focus:outline-none"
            id="iptEmail"
            v-model="email"
          />
          <span>{{ $t("contact.desc.desc3.desc33") }}</span>
        </div>
        <div class="flex mt-5 items-center xl:-ml-12 2xl:ml-0">
          <button
            class="bg-darkLavender uppercase border border-white text-white rounded-full px-10 sm:px-20 lg:px-10 xl:px-20 py-2 font-bold"
            @click.prevent="sendContact"
          >
            {{ $t("contact.desc.desc3.btn") }}
          </button>
          <button
            class="bg-darkLavender border border-white text-white rounded-full p-2 ml-5 md:ml-10 xl:ml-10"
            @click.prevent="togglePopup"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Pop Up  -->
  <Teleport to="body">
    <div
      class="flex fixed z-50 top-0 w-screen h-screen overlay items-center justify-center drop-shadow-2xl ease-in-out duration-300"
      v-if="popUpDisplay"
      @click.self="togglePopup"
    >
      <div
        class="bg-white rounded-lg absolute overflow-hidden p-6 w-11/12 lg:w-8/12"
      >
        <div
          class="flex items-center justify-between pb-2 border-b border-darkLavender"
        >
          <p class="popup-title font-bold uppercase text-left">Contact Us</p>
          <button
            class="bg-transparent right-0 top-0 outline-none focus:outline-none"
            @click="togglePopup"
          >
            <svg
              class="w-8 h-8 fill-darkLavender"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="mt-2">
          <p class="text-left text-xl">
            {{ $t("contact.box.q1") }}
          </p>
          <p class="text-left text-xl">
            {{ $t("contact.box.q2") }}
          </p>
        </div>
        <form action="">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 mb-4">
            <input
              type="text"
              id="iptName"
              :placeholder="$t('contact.box.placehoder.p1')"
              class="border-2 border-darksilver rounded text-xl p-2 rounded-2xl"
              v-model="fullName"
              required
            />
            <input
              type="email"
              id="iptEmail"
              :placeholder="$t('contact.box.placehoder.p2')"
              class="border-2 border-darksilver rounded text-xl p-2 rounded-2xl"
              v-model="email"
              required
            />
            <input
              type="text"
              id="iptCompany"
              :placeholder="$t('contact.box.placehoder.p3')"
              class="border-2 border-darksilver rounded text-xl p-2 rounded-2xl"
              v-model="company"
              required
            />
            <input
              type="text"
              id="iptPhone"
              :placeholder="$t('contact.box.placehoder.p4')"
              class="border-2 border-darksilver rounded text-xl p-2 rounded-2xl"
              v-model="phoneNumber"
              required
            />
          </div>

          <textarea
            name=""
            id="txtareaMessage"
            rows="7"
            class="border-2 border-darksilver rounded text-xl mt-6 mb-10 p-2 rounded-2xl resize-none w-full"
            v-model="textMessage"
            :placeholder="$t('contact.box.placehoder.p5')"
            required
          ></textarea>
          <button
            class="md:float-right bg-darkLavender uppercase border border-darkSilver text-base text-white rounded-full md:px-20 py-2 font-bold my-3 w-full md:w-fit"
            @click.prevent="sendContactPopUp"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </Teleport>
  <!-- End Contact Pop Up -->
</template>

<script>
import ContactService from "@/services/contact/contact.service";

export default {
  data() {
    return {
      email: "",
      fullName: "",
      company: "",
      phoneNumber: "",
      textMessage: "",
      popUpDisplay: false,
      state: null,
    };
  },
  created() {},
  methods: {
    openMaps() {
      window.open(
        "https://www.google.com/maps/dir//10.8743114,106.8081475/@10.8741227,106.7731228,13z"
      );
    },
    sendContact() {
      this.postEmail({
        email: this.email,
        subject: "Contact from QKIT offical",
        content:
          "Hello, my name is" +
          this.fullName +
          "and my email is" +
          this.email +
          "and I would like to discuss about my project",
      });
      this.email = "";
      this.fullName = "";
    },
    sendContactPopUp() {
      this.postEmail({
        email: this.email,
        subject: "Contact from QKIT official",
        content:
          "Hello, my name is" +
          this.fullName +
          "and my email is" +
          this.email +
          "and I would like to discuss about my project." +
          this.company +
          "&" +
          this.phoneNumber +
          "." +
          this.textMessage,
      });
      this.email = "";
      this.fullName = "";
      this.company = "";
      this.phoneNumber = "";
      this.textMessage = "";
    },
    togglePopup() {
      this.popUpDisplay = !this.popUpDisplay;
      this.email = "";
      this.fullName = "";
      this.company = "";
      this.phoneNumber = "";
      this.textMessage = "";
    },
    async postEmail(info) {
      const res = await ContactService.postEmail(info);
      this.state = res.data.error ? res.data.error : res.data.message;
    },
  },
};
</script>

<style scoped>
.contact-info {
  padding-top: 150px;
  padding-bottom: 120px;
  position: relative;
}
.title {
  font-family: "Dosis", "sans-serif";
  font-size: 63px;
}
.map {
  background-image: url("@/assets/map.jpg");
}
.overlay {
  background-color: rgba(0, 0, 0, 0.2);
}
.popup-title {
  font-family: "Dosis", "sans-serif";
  font-size: 27px;
}
</style>
