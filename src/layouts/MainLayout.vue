<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class       = "bg-primary text-white"
      height-hint = "98"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/icons/otter-face.png">
          </q-avatar>
          WaterOtter
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab
          to    = "/"
          label = "Tracker"
        />
        <q-route-tab
          to    = "/about"
          label = "About"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: { },

  setup () {
    return { };
  }
});
</script>
