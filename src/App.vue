<template>
  <div class="row wrapper d-flex flex-column overflow-hidden">
    <MainHeader />
    <router-view />
  </div>
<!--  <div class="d-flex flex-column flex-column-fluid flex-lg-row auth-content">-->
<!--    <router-view class="content"/>-->
<!--  </div>-->
</template>

<script>
import MainHeader from './components/MainHeader.vue'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style>
.svg-icon.svg-icon-orange-500 {
  color: #ff9737;
}
.svg-icon.svg-icon-white-500 {
  color: #FFFFFF;
}
.orange-button {
  color: #FFFFFF !important;
  background-color: #ff9737 !important;
}
.orange-button:hover {
  color: #FFFFFF !important;
  background-color: #ffaa5b !important;
}
.vs--searchable .vs__dropdown-toggle {
  background-color: var(--kt-input-solid-bg);
  border-color: var(--kt-input-solid-bg);
  color: var(--kt-input-solid-color);
  min-height: calc(1.5em + 1.65rem + 2px);
  padding: 0.825rem 1.5rem;
  font-size: 1.15rem;
  border-radius: 0.625rem;
}

.vs--open .vs__dropdown-menu {
  border-color: var(--kt-input-solid-bg-focus) !important;
}

.vs__dropdown-toggle {

}

.vs__selected, .vs__actions, .vs__search, .vs__search:focus, .vs__selected-options, .vs__actions {
  border: unset !important;
  padding: 0 !important;
  margin: 0 !important;
}

.vs__search {
  color: var(--kt-text-gray-500) !important;
}

.vs__search, .vs__search:focus, .vs__selected {
  font-size: 1.15rem !important;
  font-weight: 500;
}
.vs__selected {
  color: var(--kt-input-solid-color) !important;
}
.vs__clear {
  display: flex;
}
</style>
