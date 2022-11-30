<template>
  <!-- из шаблона -->
  <div v-if="show">
    <div :class="{show: this.isShow}" class="modal fade d-block" id="kt_modal_view_users" tabindex="-1"
         aria-hidden="true" >
      <div class="modal-dialog modal-dialog-centered mw-1000px" :style="{transform: this.transform}">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header">
            <div class="text-center">
              <!--begin::Title-->
              <h1 v-if="animal.kind === 'Кот'" class="text-dark fw-bolder">Подробное описание котика по имени {{this.animal.name}}</h1>
              <h1 v-else class="text-dark fw-bolder">Подробное описание собачки по имени {{this.animal.name}}</h1>
              <!--end::Title-->
            </div>
            <div @click="closeModal" class="btn btn-sm btn-icon btn-active-color-primary"
                 data-bs-dismiss="modal">
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
              <span class="svg-icon svg-icon-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                      transform="rotate(-45 6 17.3137)" fill="currentColor"/>
                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                      fill="currentColor"/>
                            </svg>
                        </span>
              <!--end::Svg Icon-->
            </div>
          </div>

          <div class="modal-body scroll-y">
            <div>
              <!--begin::List-->
              <div class="modal-height scroll-y me-n7 pe-7">
                <div class="card-body p-0">
                  <div class="card rounded-3">
                    <div class="card-body">
                      <div class="d-flex flex-wrap">
                        <!--begin::Chart-->
                        <div class="position-relative d-flex flex-center h-300px w-300px me-7 mb-7">
                          <span class="catalog-img"><img :src="getImgUrl(this.animal.img)"></span>
                        </div>
                        <!--end::Chart-->
                        <!--begin::Labels-->
                        <div class="d-flex flex-column col-4 flex-row-fluid pe-11 mb-5">
                          <!--begin::Label-->
                          <div class="d-flex fs-6 fw-semibold align-items-center mb-3">
                            <div class="bullet bg-primary me-3"></div>
                            <div class="text-gray-400">Вид</div>
                            <div v-if="animal.kind === 'cat'" class="ms-auto fw-bold text-gray-700">Кот</div>
                            <div v-if="animal.kind === 'dog'" class="ms-auto fw-bold text-gray-700">Собака</div>
                          </div>
                          <!--end::Label-->
                          <!--begin::Label-->
                          <div class="d-flex fs-6 fw-semibold align-items-center mb-3">
                            <div class="bullet bg-success me-3"></div>
                            <div class="text-gray-400">Пол</div>
                            <div class="ms-auto fw-bold text-gray-700" style="width: 20px;">
                    <span class="catalog-img">
                      <img v-if="animal.gender === 0" src="@/assets/media/boy-gender.png">
                      <img v-else src="@/assets/media/girl-gender.png">
                    </span>
                            </div>
                          </div>
                          <!--end::Label-->
                          <!--begin::Label-->
                          <div class="d-flex fs-6 fw-semibold align-items-center mb-3">
                            <div class="bullet bg-danger me-3"></div>
                            <div class="text-gray-400">Прививки</div>
                            <div class="ms-auto fw-bold text-gray-700" style="width: 20px;">
                    <span class="catalog-img">
                      <img v-if="!animal.vaccinations" src="@/assets/media/close.png">
                      <img v-else src="@/assets/media/check.png">
                    </span>
                            </div>
                          </div>
                          <!--end::Label-->
                          <!--begin::Label-->
                          <div class="d-flex fs-6 fw-semibold align-items-center mb-3">
                            <div class="bullet bg-gray-300 me-3"></div>
                            <div class="text-gray-400">Возраст</div>
                            <div class="ms-auto fw-bold text-gray-700">{{this.animal.age}}</div>
                          </div>
                          <!--end::Label-->
                          <!--begin::Label-->
                          <div class="d-flex fs-6 fw-semibold align-items-center">
                            <div class="bullet bg-primary me-3"></div>
                            <div class="text-gray-400">Окрас</div>
                            <div class="ms-auto fw-bold text-gray-700">{{this.animal.color}}</div>
                          </div>
                          <!--end::Label-->
                        </div>
                        <!--end::Labels-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end::List-->
            </div>
            <!--end::Users-->
          </div>
          <!--end::Modal body-->
          <div class="modal-footer flex-center">
            <button @click="closeModal" class="btn btn-light me-3">Закрыть</button>
            <button @click="checkForm()" type="submit" id="kt_modal_new_target_submit"
                    class="btn orange-button" style="background-color: #ff9737; color: #FFFFFF">
              <span class="indicator-label">Приютить</span>
              <span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
            </button>
          </div>
        </div>
        <!--end::Modal content-->
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

const initialState = () => {
  return {
    animal: null,
    show: false,
    isShow: false,
    transform: "translate(0, -50px)"
  }
}

export default defineComponent({
  name: "AnimalFullInfo",
  data() {
    return initialState();
  },
  methods: {
    openModal(animal) {
      this.animal = animal
      this.show = true
      setTimeout(()=> {
        this.isShow = this.show
        this.transform = "none"
      },200)
    },
    closeModal: function () {
      this.isShow = false
      this.transform = "translate(0, -50px)"
      setTimeout(()=> {
        this.show = false
      },200)
    },
    getImgUrl(pet) {
      return require("../../assets/media/img/" + pet)
    },
  }
})
</script>
<style scoped>
.catalog-img, .catalog-img img {
  width: inherit;
  height: inherit;
}
</style>
<style>
.table.gs-0 th:first-child,
.table.gs-0 td:first-child {
  padding-left: 1rem !important;
}

.fade {
  transition: opacity 1s linear;
}

.modal {
  background: rgba(0, 0, 0, .5);
}
</style>