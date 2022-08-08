<template>
  <div>
    <Banner
      :title="$t('contact.heading')"
      :description="bannerObj.description"
      :image="bannerObj.image"
    />

    <ContactInfo />
  </div>
</template>

<script>
import ContactInfo from "./component/contact-info/contact-info.vue";
import Banner from "@/components/banner/banner.vue";

export default {
  components: {
    ContactInfo,
    Banner,
  },
  data() {
    return {
      bannerObj: {
        description: "",
        image: "./assets/banner-contact-us.jpg",
      },
    };
  },
};
</script>
