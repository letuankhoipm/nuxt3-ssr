<template>
  <div>
    <div
      class="navbar custom-container lg:grid lg:grid-cols-12 w-screen absolute top-5 left-0 bg-transparent z-[100]"
    >
      <div
        class="lg:col-start-1 lg:col-end-13 xl:col-start-2 xl:col-end-12 py-5 flex items-center justify-between"
      >
        <div class="navbar-brand">
          <NuxtLink :to="{ path: 'home' }"
            ><img class="logo" src="@/assets/logo/4x/logo.png" alt="logo"
          /></NuxtLink>
        </div>
        <div class="nav flex flex-1 hidden lg:flex justify-end min-w-[590px]">
          <NuxtLink
            to="/"
            class="nav-item text-white text-xl mr-3 px-4 py-2 lg:px-2 xl:px-4 hover:opacity-50 transition-opacity"
            >{{ $t("navbar.home") }}</NuxtLink
          >
          <NuxtLink
            to="/portfolio"
            class="nav-item text-white text-xl mr-3 px-4 py-2 lg:px-2 xl:px-4 hover:opacity-50 transition-opacity"
            >{{ $t("navbar.portfolio") }}</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="nav-item text-white text-xl mr-3 px-4 py-2 lg:px-2 xl:px-4 hover:opacity-50 transition-opacity"
            >{{ $t("navbar.contact") }}</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="nav-item text-white text-xl mr-3 px-4 py-2 lg:px-2 xl:px-4 hover:opacity-50 transition-opacity"
            >{{ $t("navbar.about") }}</NuxtLink
          >
          <NuxtLink
            to="/blogs"
            class="nav-item text-white text-xl mr-3 px-4 py-2 lg:px-2 xl:px-4 hover:opacity-50 transition-opacity"
            >{{ $t("navbar.blogs") }}</NuxtLink
          >
        </div>

        <!-- Mobile humbugger button -->
        <div class="toggle-btn cursor-pointer lg:hidden" @click="toggleSidebar">
          <!-- <MenuAlt3Icon class="h-6 w-6 text-white" /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- Mobile sidebar -->
    <Teleport to="body">
      <div
        class="mobile-sidebar w-screen h-screen flex flex-col fixed p-6 pl-12 top-0 left-0 transform transition-transform duration-500 z-10"
        :class="{
          'translate-x-0 ease-in': openSidebar,
          '-translate-x-full ease-out': !openSidebar,
        }"
      >
        <!-- Sidebar Header -->
        <div class="flex justify-between items-center">
          <div class="logo">
            <img class="h-12" src="@/assets/logo/4x/logo.png" alt="logo" />
          </div>
          <div class="setting-btn cursor-pointer" @click="toggleSidebar">
            <!-- <XIcon class="h-5 w-5 text-white" /> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <!-- Sidebar items -->
        <div class="nav-mobile mt-24 flex flex-col flex-1">
          <NuxtLink
            v-for="(item, key) in navbarItems"
            :key="key"
            :to="{ path: item.path, params: {} }"
            class="text-white text-lg font-thin mb-7 hover:opacity-50 transition-opacity"
          >
            <span @click="toggleSidebar">
              {{ item.label }}
            </span></NuxtLink
          >
        </div>
        <!-- sidebar footer -->
        <p class="copyright text-white text-xs font-thin">
          © 2022 QKIT SOFTWARE
        </p>
      </div>
    </Teleport>
    <!-- Setting dialog -->
  </div>
</template>

<script>
export default {
  mixins: [],
  data() {
    return {
      openSidebar: false,
      themeMode: "light",
      visible: false,
      isLocale: "en",
    };
  },
  computed: {
    navbarItems() {
      return [
        {
          label: "Home",
          path: "home",
          toName: "HOME_PAGE",
        },
        {
          label: "Portfolio",
          path: "portfolio",
          toName: "PORTFOLIO_PAGE",
        },
        {
          label: "Contact",
          path: "contact",
          toName: "CONTACT_PAGE",
        },
        {
          label: "About",
          path: "about",
          toName: "ABOUT_PAGE",
        },
        {
          label: "Blogs",
          path: "blogs",
          toName: "BLOGS_PAGE",
        },
      ];
    },
  },
  methods: {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar;
      this.$emit("onToggle", this.openSidebar);
    },
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.isLocale = locale;
      this.visible = false;
      const htmlTag = document.documentElement;
      htmlTag.setAttribute("lang", locale);
    },
  },
  watch: {
    themeMode(newValue) {
      this.$emit("changeThemeMode", this.themeMode);
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  background-color: transparent;
}
.logo {
  max-width: 20%;
  min-width: 120px;
}
.nav {
  .router-link-active {
    border: 1px solid white;
    border-radius: 5px;
  }
  &:lang(vi) {
    margin-left: auto;
  }
}
.setting-btn.cog-icon {
  width: 28.75px;
  height: 28.75px;
}

.mobile-sidebar {
  background: #000;
}

.nav-mobile {
  .router-link-active span {
    border-bottom: 1px solid white;
  }
}
.languages {
  border: none;
}
</style>
