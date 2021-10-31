<template>
 
      <main>
    <div class="container">
         <!--Section: Products v.3-->
      <section class="text-center mb-4">

        <!--Grid row-->
        <div class="row fadeIn">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4"  v-for="item in this.$store.state.items" :key="item.id">
            <!--Card-->
            <div class="card">
              <!--Card image-->

              <div class="view overlay">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" class="card-img-top"
                  alt="">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <!--Card image-->

              <!--Card content-->
              <div class="card-body text-center">
                <!--Category & Title-->
                <a href="" class="dark-grey-text">
                  <h5>{{item.name}}</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="grey-text">{{item.description}}
                      <span class="badge badge-pill danger-color">NEW</span>
                    </a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>{{item.price}}$</strong>
                </h4>
              </div>
              <!--Card content-->
            </div>
            <!--Card-->
          </div>
          <!--Grid column-->

          <!--Grid column-->
        </div>
      </section>
         <!-- <nav class="d-flex justify-content-center wow fadeIn">
        <ul class="pagination pg-blue">

          <li class="page-item disabled">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>

          <li class="page-item active">
            <a class="page-link" href="#">1
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav> -->
    </div>
      </main>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },

   beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.dispatch('getItems')
      })
  }
  
}
</script>
