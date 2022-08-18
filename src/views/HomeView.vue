<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Forms</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="createForm">Create Form</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <forms-list
        :forms="forms"
      ></forms-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";
import {
  IonContent,
  IonButtons,
  IonButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  useIonRouter,
  onIonViewWillEnter,
} from "@ionic/vue";
import FormsList from "../components/FormsList.vue";
import UserDataSource from '../data-sources/FormDataSource';
import { Form } from '../entity/form';

export default defineComponent({
  name: "HomeView",
  components: {
    IonHeader,
    IonPage,
    IonButtons,
    IonButton,
    IonContent,
    IonTitle,
    IonToolbar,
    FormsList,
  },
  setup() {
    const router = useIonRouter();

    const forms = ref<any>([]);

    const app = getCurrentInstance();

    const createForm = () => {
      router.push('/form-templates');
    };

    onIonViewWillEnter(async () => {
      console.log('ION VIEW WILL ENTER')

      if(app != null) {
        const platform = app.appContext.config.globalProperties.$platform;
        const sqlite= app.appContext.config.globalProperties.$sqlite;

        const database = UserDataSource.options.database;
        const formRepository = UserDataSource.getRepository(Form);
        forms.value = await formRepository.find();

        if(platform === 'web') {
					await sqlite.saveToStore(database);
				}
      } 
      console.log('FORMS', forms.value)
    })

    return {
      forms,

      createForm,
    };
  },
});
</script>

<style>
</style>
