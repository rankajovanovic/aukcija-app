<template>
  <!--Main layout-->
  <main class="mt-3 pt-4">
    <div class="container dark-grey-text ">

      <!--Grid row-->
      <div class="row wow fadeIn">
        <!--Grid column-->
        <div class="col-md-6 mb-4">

          <img :src=" 'http://localhost:8000/storage/images/' + item.image"
 class="img-fluid" alt="">

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-6 mb-4">

          <!--Content-->
          <div class="p-4">
            <h2 class="pb-3">{{item.name}}</h2>
           
            <p class="lead font-weight-bold">Description</p>

            <p>{{item.description}}</p>
 <p class="lead">
              <span> <i><small>min bid:</small> </i> ${{item.price}}</span>
            </p>

            <form class="d-flex justify-content-left offset-md-3 p-4">
              <!-- Default input -->
              <input type="number" value="1" aria-label="Search" class="form-control" style="width: 100px">
              <button class="btn btn-primary btn-md my-0 p" type="submit">Place Bid
              </button>

            </form>

          </div>
          <!--Content-->

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

      <hr>

      <!--Grid row-->
      <div class="row d-flex justify-content-center wow fadeIn">

        <!--Grid column-->
        <div class="col-md-6 text-center">

          <h4 class="my-4 h4">Additional information</h4>
          <p>Payment: {{item.payment}}</p>
          <p>Delivery: {{item.delivery}}</p>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->
    </div>
  </main>
  
</template>

<script>
import itemService from '../services/ItemService'
export default {
data() {
  return {
     id: this.$route.params.id,
    item: {},
  }
},
  async created() {
        try {
          console.log("evo")
            const data = await itemService.getOne(this.id);
            console.log("daaa")
            this.item = data;
        } catch (error) {
            console.log(error);
        }
    },

};
</script>

<style>
</style>