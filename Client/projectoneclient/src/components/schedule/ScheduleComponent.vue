<template>
<v-container>   
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            DIA
          </th>
          <th class="text-left">
            HORARIO APERTURA
          </th>
          <th class="text-left">
            HORARIO CIERRE
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.day"
        >
          <td>{{ item.day }}</td>
          <td>{{ item.horarioApertura }}</td>
          <td>{{ item.horarioCierre }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

</v-container>
</template>

<script>
export default {
  name: "ScheduleComponent",

  data() {
    return {
      items: [
        { day: "LUNES", horarioApertura: "10:00", horarioCierre: "18:00" },
        { day: "MARTES", horarioApertura: "11:00", horarioCierre: "18:00" },
        { day: "MIERCOES", horarioApertura: "12:00", horarioCierre: "18:00" },
      ],

      headers: [
          {
            text: 'DIA',
            align: 'start',
            sortable: false,
            value: 'day',
          },
          { text: 'Horario apertura', value: 'horarioApertura' },
          { text: 'Horario apertura', value: 'horarioCierre' },
        ],
    };
  },
};
</script>

<style>
</style>