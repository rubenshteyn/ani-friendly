<template>
  <div v-show="isHidden" @click="isHidden = false" class="position-absolute vh-100 w-100"
       style="z-index: 99;left: 0px;top: 0px;"></div>
  <div class="d-flex flex-column flex-column-fluid container-fluid">
    <div class="toolbar mb-5 mb-lg-7" id="kt_toolbar">
      <!--begin::Page title-->
      <div class="page-title d-flex flex-column me-3">
        <!--begin::Title-->
        <h1 class="d-flex text-dark fw-bold my-1 fs-3">Ищут дом</h1>
        <!--end::Title-->
        <!--begin::Breadcrumb-->
        <ul class="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7 my-1">
          <!--begin::Item-->
          <li class="breadcrumb-item text-gray-600">
            <router-link to="/" class="text-gray-600 text-hover-primary">Главная</router-link>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li class="breadcrumb-item text-gray-500">
            <router-link to="/catalog" class="text-gray-600 text-hover-primary">Ищут дом</router-link>
          </li>
          <!--end::Item-->
        </ul>
        <!--end::Breadcrumb-->
      </div>
      <!--end::Page title-->
      <!--begin::Actions-->
      <div class="d-flex align-items-center py-2 py-md-1">
        <span class="text-muted mt-1 fw-semibold fs-7">Всего животных: {{ this.filteredAnimals.length }}</span>
        <!--begin::Wrapper-->
        <div class="ml-3">
          <!--begin::Menu-->
          <button @click='isHidden = !isHidden' class="btn orange-button fw-bold">
            <!--begin::Svg Icon | path: icons/duotune/general/gen031.svg-->
            <span class="svg-icon svg-icon-5 svg-icon-white-500 me-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                    fill="currentColor"/>
                            </svg>
                        </span>
            <!--end::Svg Icon-->
            <span class="user-filter-span">Фильтр</span>
          </button>
          <!--begin::Menu 1-->
          <div id="filter-modal" v-show="isHidden"
               class="menu menu-sub menu-sub-dropdown show position-fixed float-left" data-kt-menu="true"
               style="width: inherit; z-index: 999; right: 50px;">
            <!--begin::Header-->
            <div class="px-7 py-5">
              <div class="fs-5 text-dark fw-bold">Фильтр пушистых</div>
            </div>
            <!--end::Header-->
            <!--begin::Menu separator-->
            <div class="separator border-gray-200"></div>
            <!--end::Menu separator-->
            <!--begin::Form-->
            <div class="px-7 py-5 scroll-y mh-450px">
              <div class="mb-10">
                <div class="form-group fv-row">
                  <label class="form-label fw-semibold" for="kind">Вид:</label>
                  <v-select id="kind" class="bg-transparent" label="name" :options="filterItems.kinds"
                            v-model="filterItems.kind" required>
                  </v-select>
                </div>
              </div>

              <div class="mb-10">
                <div class="form-group fv-row">
                  <label class="form-label fw-semibold" for="gender">Пол:</label>
                  <v-select id="gender" class="bg-transparent" label="name" :options="filterItems.genders"
                            v-model="filterItems.gender" required>
                  </v-select>
                </div>
              </div>

              <div class="mb-10">
                <div class="form-group fv-row">
                  <label class="form-label fw-semibold" for="color">Окрас:</label>
                  <v-select id="color" class="bg-transparent" label="name" :options="filterItems.colors"
                            v-model="filterItems.color" required>
                  </v-select>
                </div>
              </div>

              <div class="mb-10">
                <div class="form-group fv-row">
                  <label class="form-label fw-semibold" for="vaccinations">Вакцинации:</label>
                  <v-select id="vaccinations" class="bg-transparent" label="name" :options="filterItems.vaccinations"
                            v-model="filterItems.vaccination" required>
                  </v-select>
                </div>
              </div>

              <div class="mb-10">
                <div class="form-group fv-row">
                  <label class="form-label fw-semibold" for="search">Поиск</label>
                  <input id="search" class="form-control-solid form-control form-control-lg" label="name"
                         v-model="filterItems.search">
                </div>
              </div>


              <div class="d-flex justify-content-end">
                <button @click="resetFilterAnimals" type="reset"
                        class="btn btn-sm btn-light btn-active-light-primary me-2">Сбросить
                </button>
                <button @click="filter" type="submit" class="btn btn-sm orange-button"
                        data-kt-menu-dismiss="true">Искать
                </button>
              </div>
              <!--end::Actions-->
            </div>
            <!--end::Form-->
          </div>
          <!--end::Menu 1-->
          <!--end::Menu-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Actions-->
    </div>
    <div class="row g-6 g-xl-9">
      <!--begin::Col-->
      <div v-for="animal in this.filteredAnimals" :key="animal" class="col-lg-6">
        <!--begin::Summary-->
        <div class="card card-flush h-lg-100">
          <!--begin::Card header-->
          <div class="card-header mt-6">
            <!--begin::Card title-->
            <div class="card-title flex-column">
              <h3 class="fw-bold mb-1">{{animal.name}}</h3>
              <div class="fs-6 fw-semibold text-gray-400">Добавили в<span style="width: 15px;" class="catalog-img d-inline ml-1 mr-1"><img src="../assets/media/heart.png"></span>10 пользователей</div>
            </div>
            <!--end::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <button @click="showInfoModal(animal)" class="btn orange-button btn-sm">Узнать больше</button>
            </div>
            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body p-9 pt-5">
            <!--begin::Wrapper-->
            <div class="d-flex flex-wrap">
              <!--begin::Chart-->
              <div class="position-relative d-flex flex-center h-175px w-175px me-15 mb-7">
                <span class="catalog-img animal-img"><img :src="getImgUrl(animal.img)"></span>
              </div>
              <!--end::Chart-->
              <!--begin::Labels-->
              <div class="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
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
                      <img v-if="animal.gender === 0" src="../assets/media/boy-gender.png">
                      <img v-else src="../assets/media/girl-gender.png">
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
                      <img v-if="!animal.vaccinations" src="../assets/media/close.png">
                      <img v-else src="../assets/media/check.png">
                    </span>
                  </div>
                </div>
                <!--end::Label-->
                <!--begin::Label-->
                <div class="d-flex fs-6 fw-semibold align-items-center mb-3">
                  <div class="bullet bg-gray-300 me-3"></div>
                  <div class="text-gray-400">Возраст</div>
                  <div class="ms-auto fw-bold text-gray-700">{{animal.age}}</div>
                </div>
                <!--end::Label-->
                <!--begin::Label-->
                <div class="d-flex fs-6 fw-semibold align-items-center">
                  <div class="bullet bg-primary me-3"></div>
                  <div class="text-gray-400">Окрас</div>
                  <div class="ms-auto fw-bold text-gray-700">{{animal.color}}</div>
                </div>
                <!--end::Label-->
              </div>
              <!--end::Labels-->
            </div>
            <!--end::Wrapper-->
            <!--begin::Notice-->
            <div class="notice d-flex rounded border border-dashed p-6" style="background-color: #ffe4cb; border-color: #ff5202 !important;">
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack flex-grow-1">
                <!--begin::Content-->
                <div class="fw-semibold">
                  <div class="fs-6 text-gray-700">
                    {{animal.text}}
                  </div>
                </div>
                <!--end::Content-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Notice-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Summary-->
      </div>
      <!--end::Col-->
    </div>
    <AnimalFullInfo ref="info"/>
  </div>
</template>

<script>
import AnimalFullInfo from "@/components/modals/AnimalFullInfo";
import animals from "@/animals.json"
export default {
  name: "AnimalCatalog",
  data() {
    return {
      filteredAnimals: this.animals,
      isHidden: false,
      filterItems: {
        kinds: [
          {
            name: "Кот",
            code: "cat"
          },
          {
            name: "Собака",
            code: "dog"
          }
        ],
        kind: {
          name: null,
          code: null
        },
        genders: [
          {
            name: "Мальчик",
            code: 0
          },
          {
            name: "Девочка",
            code: 1
          }
        ],
        gender: {
          name: null,
          code: null
        },
        colors: [
          {
            name: "Белый"
          },
          {
            name: "Светло-серый"
          },
          {
            name: "Светло-коричневый"
          },
          {
            name: "Черно-коричневый"
          },
          {
            name: "Черный"
          }
        ],
        color: {
          name: null
        },
        vaccinations: [
          {
            name: "Присутствуют",
            code: true
          },
          {
            name: "Отсутствуют",
            code: false
          }
        ],
        vaccination: {
          name: null,
          code: null
        },
        search: ''
      },
      animals: animals
    }
  },
  created() {
    this.filteredAnimals = this.animals
    if (this.animals) {
      this.filter()
    }
  },
  watch: {
    animals: "filter"
  },
  methods: {
    filter() {
      this.filteredAnimals = this.animals.filter(animal => {
        let searchString = this.filterItems.search.toLowerCase()
        if ((!this.filterItems.gender.name || animal.gender === this.filterItems.gender.code)
            && (!this.filterItems.vaccination.name || animal.vaccinations === this.filterItems.vaccination.code)
            && (!this.filterItems.kind.name || animal.kind === this.filterItems.kind.code)
            && (!this.filterItems.color.name || animal.color === this.filterItems.color.name)
            && (animal.name.toLowerCase().indexOf(searchString) !== -1)) {
          return animal
        }
      })
      // фильтрация по дате
      // if (this.filterItems.CreatedAt !== 0) {
      //   this.filterItems.CreatedAt === 1 ? this.filteredUsers.sort(function (a, b) {
      //     return new Date(b['CreatedAt']) - new Date(a['CreatedAt'])
      //   }) : this.filteredUsers.sort(function (a, b) {
      //     return new Date(a['CreatedAt']) - new Date(b['CreatedAt'])
      //   })
      // }
    },
    resetFilterAnimals() {
      this.filterItems = {
        kinds: [
          {
            name: "Кот",
            code: "cat"
          },
          {
            name: "Собака",
            code: "dog"
          }
        ],
        kind: {
          name: null,
          code: null
        },
        genders: [
          {
            name: "Мальчик",
            code: 0
          },
          {
            name: "Девочка",
            code: 1
          }
        ],
        gender: {
          name: null,
          code: null
        },
        colors: [
          {
            name: "Белый"
          },
          {
            name: "Светло-серый"
          },
          {
            name: "Светло-коричневый"
          },
          {
            name: "Черно-коричневый"
          },
          {
            name: "Черный"
          }
        ],
        color: {
          name: null
        },
        vaccinations: [
          {
            name: "Присутствуют",
            code: true
          },
          {
            name: "Отсутствуют",
            code: false
          }
        ],
        vaccination: {
          name: null,
          code: null
        },
        search: ''
      }
      this.filter()
    },
    getImgUrl(pet) {
      return require("../assets/media/img/" + pet)
    },
    showInfoModal(animal) {
      this.$refs.info.openModal(animal)
    },
  },
  components: {
    AnimalFullInfo
  }
}
</script>

<style scoped>
.catalog-img, .catalog-img img {
  width: inherit;
  height: inherit;
}

.animal-img {
  position: relative;
  border-radius: 50%;
  text-align: center;
  z-index: 1;
}

.animal-img img {
  border-radius: 50%;
}

.animal-img::before {
  content: "";
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  background: linear-gradient(90deg, rgba(255,82,2,1) 0%, rgba(255,156,40,1) 35%, rgba(255,119,40,1) 100%);
  border-radius: 50%;
  z-index: -1;
}
</style>