<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Create Form</ion-title>
        <ion-buttons slot="end">
          <ion-button router-link="/home" color="primary">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form>
        <ion-item lines="none">
          <ion-label class="ion-text-wrap">
            Form Name:
          </ion-label>
          <ion-input required v-model="formName" inputmode="text"></ion-input>
        </ion-item>

        <ion-button @click="create">
          Create
        </ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButtons,
  IonButton,
  useIonRouter,
  onIonViewWillLeave,
} from "@ionic/vue";
import { ref, defineComponent, getCurrentInstance } from 'vue'
import UserDataSource from '../data-sources/FormDataSource';
import { Form } from '../entity/form';

export default defineComponent({
  name: 'CreateForm',
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButtons,
    IonButton,
  },
  setup: () => {
    const router = useIonRouter();

    const formName = ref('');

    const app = getCurrentInstance();

    const create = async () => {

      if(app != null) {
        const platform = app.appContext.config.globalProperties.$platform;
        const sqlite= app.appContext.config.globalProperties.$sqlite;
        const database = UserDataSource.options.database;
        const formRepository = UserDataSource.getRepository(Form);

        if (formName.value) {
          const newForm = new Form();
          newForm.name = formName.value;
          const id = (await formRepository.save(newForm)).id

          console.log('ID', id)

          if(platform === 'web') {
            await sqlite.saveToStore(database);
          }

          router.push('/tabs/home');
        }
      }
      
    };

    onIonViewWillLeave(() => {
      formName.value = '';
    })

    return { 
      formName,

      create,
     }
  }
})
</script>

<style>
</style>
