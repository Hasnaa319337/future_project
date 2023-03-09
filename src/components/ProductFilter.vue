<template>
  <section>
    <a class="bars" @click="showSideNav"
      ><img src="../assets/images/Filter.svg"
    /></a>
    <div class="filtersection">
      <transition name="filtershow">
        <div class="overlay" @close="hideSideNav" v-if="sideNavIsVisable">
          <div class="close" @click="hideSideNav"></div>

          <div class="products_filter">
            <form @submit.prevent="myMethod">
              <div class="allfiltergroups">
                <!-- new contain  -->
            
                <MDBAccordion
                  v-model="activeItem"
                  stayOpen
                  class="MDBAccordionItem"
                >
                    <!-- price box -->
                    <MDBAccordionItem headerTitle="price" collapseId="stayOpen-collapseOne">
                  <div class="filter_list shown_list">
                    <input
                      type="range"
                      class="form-range"
                      min="0"
                      max="5"
                      id="customRange2"
                    />
                  </div>
                </MDBAccordionItem>
                  <!-- size box -->
                  <MDBAccordionItem
                    headerTitle="size"
                    collapseId="collapseOne-collapseTwo"
                  >
                    <div class="filter_list shown_list">
                      <div class="size_buttons">
                        <div v-for="size in sizedata" :key="size">
                          <input type="checkbox" id="sizes" name="sizes" />
                          <label for="sizes"> {{ size.TheSize }}</label>
                        </div>
                      </div>
                    </div>
                  </MDBAccordionItem>

                  <!-- colors box -->
                  <MDBAccordionItem
                    headerTitle="colors"
                    collapseId="collapseTwo-collaseThree"
                  >
                    <div class="filter_list shown_list">
                      <div class="colors">
                        <div class="color"></div>
                        <div class="color"></div>
                        <div class="color"></div>
                      </div>
                    </div>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </form>
            <div class="reset">
              <button>مسح عوامل التصفية <span>X</span></button>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div class="products_filter largefilter">
      <form @submit.prevent="myMethod">
        <div class="allfiltergroups">
          <!-- new contain  -->

          <MDBAccordion v-model="activeItem" stayOpen class="MDBAccordionItem">
            <!-- price box -->
            <MDBAccordionItem
              headerTitle="price"
              collapseId="stayOpen-collapseOne"
            >
              <div class="filter_list shown_list">
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="5"
                  id="customRange2"
                />
              </div>
            </MDBAccordionItem>
            <!-- size box -->
            <MDBAccordionItem
              headerTitle="size"
              collapseId="stayOpen-collapseOne"
            >
              <div class="filter_list shown_list">
                <div class="size_buttons">
                  <div v-for="size in sizedata" :key="size">
                    <input type="checkbox" id="sizes" name="sizes" />
                    <label for="sizes"> {{ size.TheSize }}</label>
                  </div>
                </div>
              </div>
            </MDBAccordionItem>

            <!-- colors box -->
            <MDBAccordionItem
              headerTitle="colors"
              collapseId="stayOpen-collapseOne"
            >
              <div class="filter_list shown_list">
                <div class="colors">
                  <div class="color"></div>
                  <div class="color"></div>
                  <div class="color"></div>
                </div>
              </div>
            </MDBAccordionItem>
          </MDBAccordion>
        </div>
      </form>
      <div class="reset">
        <button>مسح عوامل التصفية <span>X</span></button>
      </div>
    </div>
  </section>
</template>

<script>
import { MDBAccordion, MDBAccordionItem } from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    MDBAccordion,
    MDBAccordionItem,
  },
  data() {
    return {
      sideNavIsVisable: false,
      value: [20, 40],
      up: true,
      display_state: "",
      sizedata: [
        { TheSize: "50ml" },
        { TheSize: "25ml" },
        { TheSize: "150ml" },

        { TheSize: "Large" },
        { TheSize: "Medium" },
        { TheSize: "Small" },
      ],
      colors: [
        "#563d7c",
        "#52004a",
        "#2c3e50",
        "#f8f8f8",
        "#b1f2c8",
        "#d5l9e4",
        "#c5c5c5",
      ],
    };
  },

  setup() {
    const activeItem = ref("stayOpen-collapseOne");
    return {
      activeItem,
    };
  },
  methods: {
    showlist() {
      this.up = !this.up;
      if (this.up === true) {
        this.display_state = "none";
      } else {
        this.display_state = "block";
      }
    },
    showSideNav() {
      this.sideNavIsVisable = true;
    },
    hideSideNav() {
      this.sideNavIsVisable = false;
    },
  },
};
</script>

<style>
/* filter section */
.filtersection {
  position: relative;
  font-family: "Podkova-Regular";
}
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  /* background-color: #000000bf; */
  background-color: rgba(225, 225, 225, 0.5);
  z-index: 100;
  display: none;
}
.close {
  z-index: 1;
  position: relative;
  width: 22px;
  height: 28px;
  margin: 20px 20px 25px auto;
  text-align: right;
  font-style: initial;
  letter-spacing: initial;
  font-weight: initial;
  display: block;
  cursor: pointer;
  color: red;
}
.close::before {
  content: "\2715";
  font-size: 28px !important;
}
.close:hover {
  animation: closeAnimation ease-in-out 0.8s;
}
.bars {
  cursor: pointer;
  display: none;
}
.filter_group_name {
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 1;
  min-height: 48px;
  border: none;
  outline: none;
  padding: 5px 24px;
  position: relative;
  width: 100%;
  color: var(--vt-c-volite);
  background: transparent;
  text-transform: uppercase;
  font-weight: 600;
  justify-content: space-between;
}

@media (max-width: 999px) {
  .largefilter {
    display: none;
  }
  .overlay {
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    min-height: 460vh;
    max-height: 100vh;
    padding: 25px;
    backdrop-filter: blur(5px);
    z-index: 4;
    transition: all 0.5s linear;
  }
  .ordercontain {
    background: white;
  }
  .bars {
    display: block;
    margin: 10px;
    width: 10px;
  }

  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    cursor: pointer;
    color: #a1a1a1;
  }
}
@media (max-width: 767px) {
  .overlay {
    display: block;
    min-height: 920vh;
  }
}
.filtershow-enter-from {
  transform: translatex(-50px);
}
.filtershow-enter-active {
  transition: 0.3s ease-out;
}
.filtershow-enter-to {
  transform: translatex(0);
}
.filtershow-leave-from {
  transform: translatex(0);
}

.filtershow-leave-active {
  transition: 0.3s ease-in;
}
.filtershow-leave-to {
  transform: translatex(-50px);
}
.up_down_icon img {
  width: 44px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.products_filter {
  margin: auto;
  width: 80%;
}

.filter_categorie_list {
  overflow: hidden;
  padding-left: 16px;
}
.filter_categorie {
  float: none;
  padding: 7px 0;
}
label {
  margin-left: 11px;
  font-size: 18px;
  font-family: initial;
}

.form-check-input:checked {
  background-color: var(--vt-c-volite);
  border-color: var(--vt-c-volite);
}
.up_down_icon img {
  width: 44px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.btn {
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid var(--vt-c-volite);
}
.ordercontain {
  border-radius: 4px;
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  width: 100%;
  border: 1px solid #cccccc87;
  margin-bottom: 10px;
  overflow: hidden;
}

/* size box */
.filter_size {
  /* float: left; */
  padding: 3px;
  width: 45px;
  height: 45px;
}
.filter_size_view {
  position: relative;
}
.filter_size_list {
  display: grid;
  grid-template-columns: repeat(5, 16%);
  padding-left: 9px;
  overflow: hidden;
}
.filter_size_view input {
  width: 47px;
  height: 42px;
  border-radius: 0;
  pointer-events: none;
  /* border: 1px solid var(--vt-c-volite); */
}
.filter_size_view input:active {
  border: 1px solid var(--vt-c-volite);
}
.filter_size_view label {
  position: absolute;
  top: 5px;
  left: 3px;
  cursor: pointer;
}

/* new rate */
.rate {
  float: left;
  height: 46px;
  padding: 0 10px;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.sizebox {
  color: black;
}

.size_buttons div {
  display: grid;
  grid-template-columns: repeat(2, 30% 70%);
}
.size_buttons div input {
  box-shadow: none;
  width: 20px;
  height: 34px;
}
.size_buttons div label {
  color: #787878;
  font-size: 14px;
  font-family: "Podkova-Regular";
  line-height: 2.3;
}
.colors {
  display: flex;
  column-gap: 5px;
}
.colors .color {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: red;
}

.accordion-button:not(.collapsed) {
  color: var(--vt-c-volite);
  background: transparent;
}
.accordion-button {
  font-size: 16px;
  font-family: inherit;
}
.accordion-header {
  border-bottom: 0;
}
.accordion-button:focus {
  z-index: 3;
  border-color: none;
  outline: 0;
  box-shadow: none;
}

.reset {
  font-size: 14px;
  font-family: "Podkova-Regular";
  text-align: center;
  margin: 30px 0;
}
.reset span {
  margin: 0 10px;
}
.form-range {
  height: 0 !important;
}
</style>
