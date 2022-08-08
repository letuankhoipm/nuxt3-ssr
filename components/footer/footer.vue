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
              <h4 class="hidden sm:block text-primary mb-2 font-bold">
                {{ $t("footer.company.title") }}
              </h4>
              <a href="qkit.vn"
                ><li class="text-black opacity-75 hover:text-primary">
                  {{ $t("footer.company.title") }}
                </li></a
              >
              <a href="qkit.vn"
                ><li class="text-black opacity-75 hover:text-primary">
                  {{ $t("footer.company.item1") }}
                </li></a
              >
              <a href="qkit.vn"
                ><li class="text-black opacity-75 hover:text-primary">
                  {{ $t("footer.company.item2") }}
                </li></a
              >
              <li
                class="hidden sm:block text-black opacity-75 hover:text-primary"
              >
                {{ $t("footer.company.item3") }}
              </li>
            </ul>
          </div>
          <div
            class="col-span-1 md:ml-5 lg:ml-0 md:col-start-3 hidden sm:block md:justify-self-start"
          >
            <ul class="leading-9 text-lg footer-link md:-mr-10">
              <h4 class="hidden sm:block md:block text-primary mb-2 font-bold">
                {{ $t("footer.resource.title") }}
              </h4>
              <a href="qkit.vn"
                ><li class="text-black opacity-75 hover:text-primary">
                  {{ $t("footer.resource.item1") }}
                </li></a
              >
              <a href="qkit.vn"
                ><li class="text-black opacity-75 hover:text-primary">
                  {{ $t("footer.resource.item2") }}
                </li></a
              >
              <a href="qkit.vn"
                ><li class="text-black opacity-75 hover:text-primary">
                  {{ $t("footer.resource.item3") }}
                </li></a
              >
            </ul>
          </div>
          <div
            class="col-span-1 md:ml-10 lg:ml-0 md:col-start-5 footer-legal text-lg md:justify-self-start"
          >
            <ul class="leading-9 footer-link md:-mr-10">
              <h4 class="hidden sm:block text-primary mb-2 font-bold">
                {{ $t("footer.legal.title") }}
              </h4>
              <a href="qkit.vn"
                ><li class="text-black opacity-75 hover:text-primary">
                  {{ $t("footer.legal.item1") }}
                </li></a
              >
              <a href="qkit.vn"
                ><li class="text-black opacity-75 hover:text-primary">
                  {{ $t("footer.legal.item2") }}
                </li></a
              >
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
                <!-- <svg
                  class="w-8 h-8 ml-auto mr-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="var(--el-color-primary)"
                >
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  /></svg
              > -->
              </a>
            </div>
            <div class="col-end-4">
              <a
                href="https://www.linkedin.com/company/qkit/"
                target="_blank"
                class="cursor-pointer hover:bg-red"
              >
                <!-- <svg
                  class="w-8 h-8 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="var(--el-color-primary)"
                >
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg> -->
              </a>
            </div>
          </div>
          <div class="languages h-8">
            <!-- <el-dropdown>
              <div class="languages-logo mr-6">
                <span class="el-dropdown-link grid grid-cols-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p
                    class="col-span-2 self-center ml-2 text-lg"
                    v-if="isLocale === ''"
                  >
                    Languages
                  </p>
                  <p
                    class="col-span-2 self-center ml-2 text-lg lg:pl-8 xl:pl-14"
                    v-if="isLocale === 'en'"
                  >
                    English
                  </p>
                  <p
                    class="col-span-2 self-center ml-2 text-lg lg:ml-1 xl:pl-5"
                    v-if="isLocale === 'vi'"
                  >
                    Vietnamese
                  </p>
                </span>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="changeLocale('en')"
                    >English</el-dropdown-item
                  >
                  <el-dropdown-item @click="changeLocale('vi')"
                    >Vietnamese</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown> -->
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
    return {};
  },
  methods: {
    changeLocale(value) {
      this.$i18n.locale = value;
    },
  },
  computed: {
    isLocale() {
      return this.$i18n.locale;
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
