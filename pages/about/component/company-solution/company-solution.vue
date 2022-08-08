<template>
  <div class="company-solution">
    <div class="custom-container lg:grid lg:grid-cols-12">
      <div class="flex flex-wrap lg:col-start-2 lg:col-end-12">
        <div class="lg:w-1/2 sm:w-full w-full text-left">
          <div class="pb-3 lg:border-b-2">
            <p
              class="text-darkLavender font-title sm:text-5xl text-4xl font-black capitalize"
            >
              {{ $t("about.title.t1") }}
            </p>
          </div>
          <div class="lg:hidden sm:block block mt-3">
            <div class="w-full h-full">
              <img
                alt="Image About Page"
                src="@/assets/image-about-page.jpg"
                class="rounded-lg max-w-full h-full"
              />
            </div>
          </div>
          <div class="pt-4">
            <p class="leading-loose">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English.
            </p>
            <p class="leading-loose">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for ‘lorem
              ipsum’ will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div class="lg:mt-6 sm:mt-18 mt-14">
            <div class="flex lg:justify-end sm:justify-center justify-center">
              <router-link
                :to="{ path: 'contact' }"
                class="flex justify-between sm:w-3/5 lg:w-4/5 xl:w-3/5 max-w-[380px] w-4/5 border-primary border rounded-3xl"
              >
                <div class="w-4/5">
                  <div class="text-center py-2">
                    <span
                      class="uppercase text-primary font-normal text-xs sm:text-base"
                    >
                      {{ $t("about.button") }}
                    </span>
                  </div>
                </div>
                <div class="w-1/5 h-full bg-primary rounded-3xl">
                  <img
                    alt=""
                    src="@/assets/icons/light-bulb.svg"
                    class="w-5 h-5 mx-auto mt-3 bg-primary"
                  />
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Image -->
        <div class="lg:w-1/2 lg:block sm:hidden hidden pl-5">
          <div class="w-full h-full">
            <img
              alt="Image About Page"
              src="@/assets/image-about-page.jpg"
              class="rounded-lg max-w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanySolution",
};
</script>
