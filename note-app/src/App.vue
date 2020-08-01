<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <mwc-top-app-bar centerTitle>
    <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
    <div slot="title">VueNoteApp</div>
    <mwc-icon-button icon="help" slot="actionItems"></mwc-icon-button>
    <div><!-- content --></div>
  </mwc-top-app-bar>
</template>

<script>
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';

export default {
  name: 'App',
}
</script>