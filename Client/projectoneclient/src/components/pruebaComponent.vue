<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in getListaPrueba"
          :key="index"
        >
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'pruebaComponent',

    computed: {
      ...mapGetters(["getListaPrueba"])
    },
}
</script>

<style>

</style>