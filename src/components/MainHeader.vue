<template>
  <div v-show="isHidden" @click="isHidden = false" class="position-absolute vh-100 w-100"
       style="z-index: 103;left: 0px;top: 0px;"></div>
<!--  <div v-show="isOpen" @click="isOpen = false" class="drawer-overlay" style="background: rgba(0, 0, 0, 0.5)"></div>-->
  <div id="kt_header" class="header" style="z-index: 104">
    <!--begin::Container-->
    <div class="container-fluid d-flex flex-stack">
      <!--begin::Brand-->
      <div class="d-flex align-items-center me-5">
        <!--begin::Aside toggle-->
        <button @click="isOpen = !isOpen" class="d-lg-none btn btn-icon btn-active-color-white w-30px h-30px ms-n2 me-3"
                id="kt_aside_toggle">
          <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
          <span class="svg-icon svg-icon-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                    fill="currentColor"/>
              <path opacity="0.3"
                    d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                    fill="currentColor"/>
            </svg>
          </span>
          <!--end::Svg Icon-->
        </button>
        <!--end::Aside  toggle-->
        <!--begin::Logo-->
        <router-link to="/" class="p-0">
          <img alt="Logo" src="../assets/media/logo.svg" class="h-45px h-lg-50px"/>
        </router-link>
        <!--end::Logo-->

      </div>
      <!--end::Brand-->
      <!--begin::Topbar-->
      <div class="d-flex align-items-center flex-shrink-0 topbar-user-profile">
        <div class="right-links d-flex align-items-center ms-1">
<!--          <router-link class="app-bar-item" v-if="!loggedIn" @click.prevent to="/">Войти-->
<!--          </router-link>-->
          <!--begin::User-->
          <div @click='isHidden = !isHidden' class="d-flex align-items-center ms-1">
            <!--begin::User info-->
            <div class="btn btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-2 px-2 px-md-3"
                 data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
              <!--begin::Name-->
              <div class="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-4">
<!--                <span class="text-muted fs-8 fw-semibold lh-1 mb-1">{{ currentUser()[1] }}</span>-->
              </div>
              <!--end::Name-->
              <!--begin::Symbol-->
              <div class="symbol symbol-30px symbol-md-40px">
                <!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/kt-products/docs/metronic/html/releases/2022-11-24-050857/core/html/src/media/icons/duotune/general/gen001.svg-->
                <span class="svg-icon svg-icon-dark svg-icon-2hx">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z" fill="currentColor"/>
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Symbol-->
            </div>
            <!--end::User info-->
            <!--begin::User account menu-->
            <div v-show="isHidden"
                 class="menu user-profile-menu show menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                 style="z-index: 999; right: 0 !important;">
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content d-flex align-items-center px-3">
                  <!--begin::Avatar-->
                  <div class="symbol symbol-50px me-5">
                    <img src="@/assets/media/001-boy.svg"/>
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Username-->
<!--                  <div class="d-flex flex-column">-->
<!--                    <div class="fw-bold d-flex align-items-center fs-5">{{ currentUser()[1] }}-->
<!--                      <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Admin</span>-->
<!--                    </div>-->
<!--                    <span class="fw-semibold text-muted text-hover-primary fs-7">{{ currentUser()[0] }}</span>-->
<!--                  </div>-->
                  <!--end::Username-->
                </div>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <span class="menu-link px-5">My profile</span>
              </div>
              <!--end::Menu item-->

              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <span class="menu-link px-5">Account settings</span>
              </div>
              <!--end::Menu item-->

              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->

              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <span @click.prevent="logoutButtonClicked" class="menu-link px-5" style="margin-left: auto">Logout</span>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::User account menu-->
          </div>
        </div>
        <!--end::User -->
      </div>
      <!--end::Topbar-->
    </div>
    <!--end::Container-->
  </div>
  <div id="kt_aside" class="aside card drawer drawer-on" data-kt-drawer="true" data-kt-drawer-name="aside"
       data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
       data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start"
       data-kt-drawer-toggle="#kt_aside_toggle" style="width: 250px !important;">
    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid px-4">
      <!--begin::Aside Menu-->
      <div class="hover-scroll-overlay-y my-5 pe-4 me-n4" id="kt_aside_menu_wrapper" data-kt-scroll="true"
           data-kt-scroll-activate="true" data-kt-scroll-height="auto"
           data-kt-scroll-dependencies="{default: '#kt_aside_footer', lg: '#kt_header, #kt_aside_footer'}"
           data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="{default: '5px', lg: '75px'}"
           style="height: 616px;">
        <!--begin::Menu-->
        <div class="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6" id="#kt_aside_menu" data-kt-menu="true">
          <!--begin:Menu item-->
          <div class="menu-item menu-accordion">
            <!--begin:Menu sub-->
            <!--begin:Menu item-->
            <div class="menu-item">
              <router-link @click="this.isOpen = false" to="/catalog" class="menu-link">
												<span class="menu-icon">
													<!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
													<span class="svg-icon svg-icon-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z" fill="currentColor"/>
                            </svg>
													</span>
                          <!--end::Svg Icon-->
												</span>
                          <span class="menu-title fw-semibold">Ищут дом</span>
											</router-link>
            </div>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <div class="menu-item">
                  <router-link @click="this.isOpen = false" to="/likes" class="menu-link">
												<span class="menu-icon">
													<!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
						<span class="svg-icon svg-icon-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor"/>
              </svg>
              </span>
                          <!--end::Svg Icon-->
												</span>
                          <span class="menu-title fw-semibold">Вам понравились</span>
											</router-link>
            </div>
            <!--end:Menu item-->
            <!--end:Menu sub-->
          </div>
          <!--end:Menu item-->
          <!--begin:Menu item-->
          <div @click="isShow = !isShow" :class="{show: isShow}" class="menu-item opacity-menu menu-accordion" style="transform: unset; position: unset">
            <!--begin:Menu link-->
            <span class="menu-link">
												<span class="menu-icon">
													<!--begin::Svg Icon | path: icons/duotune/general/gen022.svg-->
													<span class="svg-icon svg-icon-2">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z" fill="currentColor"></path>
															<path d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z" fill="currentColor"></path>
															<path opacity="0.3" d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z" fill="currentColor"></path>
															<path opacity="0.3" d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z" fill="currentColor"></path>
														</svg>
													</span>
                          <!--end::Svg Icon-->
												</span>
												<span class="menu-title">Настройки</span>
												<span class="menu-arrow"></span>
											</span>
            <!--end:Menu link-->
            <!--begin:Menu sub-->
            <div @click="isShow = !isShow" :class="{show: isShow}" class="menu-sub menu-sub-accordion">
              <div class="opacity-menu-block">
                <!--begin:Menu item-->
                <div class="menu-item">
                  <!--begin:Menu link-->
                  <router-link @click="this.isOpen = false" to="/" class="menu-link" >
														<span class="menu-bullet">
                              <span class="bullet bullet-dot"></span>
														</span>
                    <span class="menu-title">Users List</span>

                  </router-link>
                  <!--end:Menu link-->
                </div>
                <!--end:Menu item-->
                <!--begin:Menu item-->
                <div class="menu-item">
                  <!--begin:Menu link-->
                  <router-link @click="this.isOpen = false" to="/" class="menu-link">
														<span class="menu-bullet">
                              <span class="bullet bullet-dot"></span>
														</span>
                    <span class="menu-title">Sessions</span>

                  </router-link>
                  <!--end:Menu link-->
                </div>
                <!--end:Menu item-->
                <!--begin:Menu item-->
                <div class="menu-item">
                  <!--begin:Menu link-->
                  <router-link @click="this.isOpen = false" to="/" class="menu-link">
														<span class="menu-bullet">
                              <span class="bullet bullet-dot"></span>
														</span>
                    <span class="menu-title">Service Providers</span>

                  </router-link>
                  <!--end:Menu link-->
                </div>
                <!--end:Menu item-->
                <!--begin:Menu item-->
                <div class="menu-item">
                  <!--begin:Menu link-->
                  <router-link @click="this.isOpen = false" to="/" class="menu-link">
														<span class="menu-bullet">
                              <span class="bullet bullet-dot"></span>
														</span>
                    <span class="menu-title">Action log</span>

                  </router-link>
                  <!--end:Menu link-->
                </div>
                <!--end:Menu item-->
                <!--begin:Menu item-->
                <div class="menu-item">
                  <!--begin:Menu link-->
                  <router-link @click="this.isOpen = false" to="/" class="menu-link">
														<span class="menu-bullet">
                              <span class="bullet bullet-dot"></span>
														</span>
                    <span class="menu-title">Task list</span>

                  </router-link>
                  <!--end:Menu link-->
                </div>
                <!--end:Menu item-->
              </div>
            </div>
            <!--end:Menu sub-->
          </div>
          <!--end:Menu item-->
        </div>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Aside menu-->
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      isOpen: false,
      isShow: false,
      isActive: false,
      isHidden: false,
    }
  },
  created() {
    let path = window.location.href.split("/")[3]
    if(path === "users" || path === "suppliers" || path === "sessions") {
      this.isShow = true
    }
  },
  methods: {
    activeColorLink() {
      return [this.isOpen = false, this.isActive = true]
    }
  },
};
</script>

<style scoped>
.menu-item {

}
.header {
  background: linear-gradient(90deg, rgba(255,82,2,1) 0%, rgba(255,156,40,1) 35%, rgba(255,119,40,1) 100%) ;
}

.aside-menu .router-link-active {
  transition: color .2s ease;
  background-color: var(--kt-aside-menu-link-bg-color-active);
}

.opacity-menu-block {
  opacity: 0;
  transition: all 0.2s ease !important;
}

.opacity-menu {
  max-height: 0 !important;
  transition: all 0.2s ease-out !important;
}

.show .opacity-menu-block {
  opacity: 1;
}

.show .opacity-menu {
  max-height: 100%;
}

.aside-menu .router-link-active .menu-title {
  color: #181C32 !important;
}
.drawer .show {
  z-index: unset;
  position: unset;
  inset: inherit;
  margin: unset;
  transform: unset;
}
.show {
  z-index: 105;
  position: fixed;
  inset: 0px 0px auto auto;
  margin: 0px;
  transform: translate(-50px, 62px);
}
</style>