<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <div>
    <mwc-list v-for="(note) in notes" :key="note.id" multi>
      <mwc-list-item twoline hasMeta>
        <span>{{note.title}}</span>
        <span slot="meta" class="material-icons" @click="handleDelete(note.id)">delete</span>
        <span slot="secondary">{{note.description}}</span>
      </mwc-list-item>
      <li divider padded role="separator"></li>
    </mwc-list>
    <mwc-fab class="floatButton" mini icon="add"></mwc-fab>
  </div>
</template>
<script>
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-fab';
import '@material/mwc-button';
import { notesData } from '../utils/DummyData';

export default {
  name: 'Dashboard',
  data() {
    return {
      notes: notesData
    }
  },
  methods: {
    handleDelete(id) {
      const noteToDelete = this.notes.findIndex((item) => (item.id === id));
      this.notes.splice(noteToDelete, 1);
    }
  },
}
</script>
<style scoped>
  .floatButton {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
</style>