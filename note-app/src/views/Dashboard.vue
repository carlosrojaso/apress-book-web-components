<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <div>
    <mwc-list multi>
      <mwc-list-item twoline>
        <span>Item 0</span>
        <span slot="secondary">Secondary line</span>
      </mwc-list-item>
      <li divider padded role="separator"></li>
      <mwc-list-item twoline>
        <span>Item 1</span>
        <span slot="secondary">Secondary line</span>
      </mwc-list-item>
      <li divider padded role="separator"></li>
      <mwc-list-item twoline>
        <span>Item 2</span>
        <span slot="secondary">Secondary line</span>
      </mwc-list-item>
      <li divider padded role="separator"></li>
      <mwc-list-item twoline>
        <span>Item 3</span>
        <span slot="secondary">Secondary line</span>
      </mwc-list-item>
    </mwc-list>
    <mwc-fab class="floatButton" mini icon="add"></mwc-fab>
  </div>
</template>
<script>
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-fab';

export default {
  name: 'Dashboard'
}
</script>
<style scoped>
.floatButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>