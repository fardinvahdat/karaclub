<template>
  <div dir="rtl">
    <Header />
    <Breadcrumbs title="بلاگ" class="my-2"/>
    <section class="section-b-space blog-page ratio2_3 p-0">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!--Blog sidebar start-->
         <div class="col-lg-11 d-flex flex-column flex-lg-row">
            <BlogSidebar />
          <!--Blog sidebar start-->
          <!--Blog List start-->
          <div class="col-xl-9 col-lg-8 col-md-7 order-sec pl-0">
          <BlogList />
          </div>
         </div>
          <!--Blog List start-->
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/header/header3'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
import BlogSidebar from './widgets/blog-sidebar'
import BlogList from './widgets/blog-list'
export default {
  components: {
    Header,
    Breadcrumbs,
    BlogSidebar,
    BlogList,
    Footer
  }
}
</script>
