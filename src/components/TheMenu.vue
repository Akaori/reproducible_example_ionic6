<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-content>
      <ion-list>
        <ion-list-header>Forms</ion-list-header>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import {
  IonContent,
  IonList,
  IonListHeader,
  IonMenu,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppMenu',
  components: {
    IonContent,
    IonList,
    IonListHeader,
    IonMenu,
  },
});
</script>

<style></style>
