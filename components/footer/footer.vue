<template>
  <footer
    class="dark:bg-gray-800 dark:text-white custom-container lg:grid lg:grid-cols-12 pb-4"
  >
    <div
      class="footer text-left text-sm grid grid-cols-1 md:grid-cols-12 flex md:place-items-center lg:col-start-2 lg:col-end-12"
    >
      <div
        class="col-span-1 md:col-start-1 md:col-span-4 sm:col-span-3 space-y-3 md:self-start md:pt-1 md:justify-self-start"
      >
        <div class="footer-img">
          <a href="#"><img src="@/assets/logo/SVG/logo.svg" alt="logo" /></a>
        </div>
        <div class="footer-content font-medium text-lg md:text-xl md:-mr-10">
          <p class="mb-1">{{ $t("footer.content.content1") }}</p>
          <p>{{ $t("footer.content.content2") }}</p>
        </div>
        <p
          class="text-black opacity-60 leading-4 hidden sm:block place-content-end flex self-end text-sm md:text-lg md:-mr-10"
        >
          {{
            $t("footer.copyright", {
              icon: `&copy;`,
            })
          }}
        </p>
      </div>
      <div
        class="col-span-1 md:col-start-5 grid-cols-2 grid w-full md:col-span-8 md:grid-cols-8 pt-10 md:pt-0 justify-between"
      >
        <div
          class="grid place-content-end col-span-1 md:col-start-2 md:col-end-6 md:col-span-5 sm:col-span-5 sm:grid-cols-5 order-last md:order-none sm:order-none md:text-xs text-sm w-full"
        >
          <div class="col-span-1">
            <ul
              class="leading-9 text-lg md:justify-self-start footer-link md:-mr-10"
            >
              <p class="hidden sm:block text-primary mb-2 font-bold">
                {{ $t("footer.company.title") }}
              </p>
              <li class="text-black opacity-75 hover:text-primary">
                <a href="qkit.vn">
                  {{ $t("footer.company.title") }}
                </a>
              </li>

              <li class="text-black opacity-75 hover:text-primary">
                <a href="qkit.vn">
                  {{ $t("footer.company.item1") }}
                </a>
              </li>

              <li class="text-black opacity-75 hover:text-primary">
                <a href="qkit.vn">
                  {{ $t("footer.company.item2") }}
                </a>
              </li>

              <li class="text-black opacity-75 hover:text-primary">
                <a href="qkit.vn">
                  {{ $t("footer.company.item3") }}
                </a>
              </li>
            </ul>
          </div>
          <div
            class="col-span-1 md:ml-5 lg:ml-0 md:col-start-3 hidden sm:block md:justify-self-start"
          >
            <ul class="leading-9 text-lg footer-link md:-mr-10">
              <p class="hidden sm:block md:block text-primary mb-2 font-bold">
                {{ $t("footer.resource.title") }}
              </p>
              <li class="text-black opacity-75 hover:text-primary">
                <a href="qkit.vn">
                  {{ $t("footer.resource.item1") }}
                </a>
              </li>
              <li class="text-black opacity-75 hover:text-primary">
                <a href="qkit.vn">
                  {{ $t("footer.resource.item2") }}
                </a>
              </li>
              <li class="text-black opacity-75 hover:text-primary">
                <a href="qkit.vn">
                  {{ $t("footer.resource.item3") }}
                </a>
              </li>
            </ul>
          </div>
          <div
            class="col-span-1 md:ml-10 lg:ml-0 md:col-start-5 footer-legal text-lg md:justify-self-start"
          >
            <ul class="leading-9 footer-link md:-mr-10">
              <p class="hidden sm:block text-primary mb-2 font-bold">
                {{ $t("footer.legal.title") }}
              </p>
              <li class="text-black opacity-75 hover:text-primary">
                <a href="qkit.vn">
                  {{ $t("footer.legal.item1") }}
                </a>
              </li>
              <li class="text-black opacity-75 hover:text-primary">
                <a href="qkit.vn">
                  {{ $t("footer.legal.item2") }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="grid col-span-1 md:col-start-7 md:col-span-2 grid-rows-1 md:justify-self-end justify-start self-start md:self-end pt-3 md:pt-0 flex space-x-3 space-y-3"
        >
          <div class="social-logo grid grid-cols-3 mb-5">
            <div class="col-end-3">
              <a
                href="https://www.facebook.com/QKIT-Software-101932425695680"
                target="_blank"
                class="cursor-pointer hover:bg-red"
              >
                <svg
                  class="w-8 h-8 ml-auto mr-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="var(--el-color-primary)"
                >
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  />
                </svg>
                <strong>QKIT Inc, Page</strong>
              </a>
            </div>
            <div class="col-end-4">
              <a
                href="https://www.linkedin.com/company/qkit/"
                target="_blank"
                class="cursor-pointer hover:bg-red"
              >
                <svg
                  class="w-8 h-8 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="var(--el-color-primary)"
                >
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg>
                <strong>QKIT Inc, Linkin</strong>
              </a>
            </div>
          </div>
          <div class="languages h-8">
            <!-- start dropdown -->
            <div>
              <div class="relative">
                <!-- Dropdown toggle button -->
                <button
                  @click="isOpen"
                  class="text-right p-2 pr-4 text-black rounded-md w-full"
                >
                  <span class="mr-4">{{ isLocale }}</span>
                  <svg
                    class="w-5 h-5 dark:text-white inline-block text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <!-- Dropdown menu -->
                <div
                  v-show="show"
                  class="absolute right-0 -top-[60px] py-2 mt-2 bg-gray-300 rounded-md shadow-xl w-44"
                >
                  <span
                    class="block px-4 py-2 text-sm text-black hover:bg-indigo-400 hover:text-black"
                    @click="changeLocale('en')"
                  >
                    English
                  </span>
                  <span
                    class="block px-4 py-2 text-sm text-black hover:bg-indigo-400 hover:text-black"
                    @click="changeLocale('vi')"
                  >
                    Vietnamese
                  </span>
                </div>
              </div>
            </div>
            <!-- end dropdown-->
          </div>
        </div>
      </div>
      <div class="sm:hidden block place-content-end flex self-end">
        <p
          class="text-black opacity-60 leading-10 text-lg set-color text-legit"
        >
          &copy; QKIT Human Resource - All Right Reserved 2022
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    changeLocale(value) {
      this.$i18n.locale = value;
      this.show = !this.show;
    },
    isOpen() {
      this.show = !this.show;
    },
  },
  computed: {
    isLocale() {
      return this.$i18n.locale === "en" ? "English" : "Vietnamese";
    },
  },
};
</script>
<style lang="scss">
.languages-logo {
  width: 4.5em;
  height: 4.5em;
}

.languages {
  border-bottom: 0.1em solid #707070;
}

.footer-link,
.footer-language {
  font-size: 19px;
}

.text-legit {
  font-size: 0.9em !important;
}
</style>
