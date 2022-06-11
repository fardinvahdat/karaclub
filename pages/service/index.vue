<template>
  <div dir="rtl">
    <header-3 />
    <breadcrumbs title="خدمات" class="my-2" />
    <SearchBar class="my-2"/>
    <CardSection title="عذاخوری" icon=''/>
    <footer-1/>
  </div>
</template>

<script>
import Footer1 from '../../components/footer/footer1.vue';
import header3 from "../../components/header/header3.vue";
import Breadcrumbs from "../../components/widgets/breadcrumbs.vue";
import SearchBar from './components/SearchBar.vue';
import CardSection from './components/CardSection.vue';
export default {
  components: { header3, Breadcrumbs, Footer1, SearchBar,CardSection },
};
</script>

<style>
</style>