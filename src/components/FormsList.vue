<template>
  <div>
    <div class="ion-padding" v-if="!forms.length">
      There are no registered forms.
    </div>
    <ion-list v-else>
      <div
        v-for="form in forms"
        :key="form.id"
      >
        <ion-item>
          <ion-label>
            {{ form.name }}
          </ion-label>
        </ion-item>
      </div>
    </ion-list>
  </div>
</template>

<script lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'FormsList',
  components: {
    IonList,
    IonItem,
    IonLabel,
  },
  props: {
    forms: {
      type: Object,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style>
</style>
