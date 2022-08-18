<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Form Templates</ion-title>
        <ion-buttons slot="end">
          <ion-button router-link="/home" color="primary">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item @click="createForm">
          <ion-label>
            Option 1
          </ion-label>
        </ion-item>

        <ion-item @click="createForm">
          <ion-label>
            Option 2
          </ion-label>
        </ion-item>

        <ion-item @click="createForm">
          <ion-label>
            Option 3
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonButton,
  useIonRouter,
} from "@ionic/vue";
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'FormTemplates',
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButtons,
    IonButton,
  },
  setup: () => {
    const router = useIonRouter();

    const createForm = () => {
      router.push('/create-form');
    };

    return { 
      createForm,
     }
  }
})
</script>

<style>
</style>
