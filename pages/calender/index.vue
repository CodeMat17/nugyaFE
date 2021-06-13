<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <h1
        class="calli-font font-semibold text-xl tracking-wider text-gray-800 block text-center"
      >
        IGBO CALENDER 2021.
      </h1>
      <div class="py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-2">
        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">January</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.week"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="jan in janCalender"
              :key="jan.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ jan.date }}</p>
              <p>{{ jan.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">February</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="feb in febCalender"
              :key="feb.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ feb.date }}</p>
              <p>{{ feb.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">March</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="mar in marCalender"
              :key="mar.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ mar.date }}</p>
              <p>{{ mar.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">April</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="apr in aprCalender"
              :key="apr.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ apr.date }}</p>
              <p>{{ apr.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">May</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="may in mayCalender"
              :key="may.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ may.date }}</p>
              <p>{{ may.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">June</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="june in juneCalender"
              :key="june.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ june.date }}</p>
              <p>{{ june.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">July</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="july in julyCalender"
              :key="july.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ july.date }}</p>
              <p>{{ july.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">August</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="aug in augCalender"
              :key="aug.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ aug.date }}</p>
              <p>{{ aug.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">September</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="sept in septCalender"
              :key="sept.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ sept.date }}</p>
              <p>{{ sept.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">October</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="oct in octCalender"
              :key="oct.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ oct.date }}</p>
              <p>{{ oct.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">November</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="nov in novCalender"
              :key="nov.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ nov.date }}</p>
              <p>{{ nov.market }}</p>
            </div>
          </div>
        </div>

        <div class="border px-2 py-4 mt-2 rounded-lg bg-white shadow-xl">
          <h1 class="calli-font px-2 sm:text-lg">December</h1>
          <div class="grid grid-cols-7">
            <div
              v-for="day in week"
              :key="day.i"
              class="mt-4 flex justify-center"
            >
              {{ day }}
            </div>
            <div
              v-for="dec in decCalender"
              :key="dec.i"
              class="flex flex-col items-center justify-center rounded-lg border w-12 h-12 text-sm"
            >
              <p>{{ dec.date }}</p>
              <p>{{ dec.market }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Igbo-Calender',
    head() {
    return {
      title: "Igbo-Calender",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Igbo-Calender",
        },
      ],
    };
  },
  data() {
    return {
      week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      janCalender: [
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: 1, market: "Nkwo" },
        { date: 2, market: "Eke" },
        { date: 3, market: "Orie" },
        { date: 4, market: "Afor" },
        { date: 5, market: "Nkwo" },
        { date: 6, market: "Eke" },
        { date: 7, market: "Orie" },
        { date: 8, market: "Afor" },
        { date: 9, market: "Nkwo" },
        { date: 10, market: "Eke" },
        { date: 11, market: "Orie" },
        { date: 12, market: "Afor" },
        { date: 13, market: "Nkwo" },
        { date: 14, market: "Eke" },
        { date: 15, market: "Orie" },
        { date: 16, market: "Afor" },
        { date: 17, market: "Nkwo" },
        { date: 18, market: "Eke" },
        { date: 19, market: "Orie" },
        { date: 20, market: "Afor" },
        { date: 21, market: "Nkwo" },
        { date: 22, market: "Eke" },
        { date: 23, market: "Orie" },
        { date: 24, market: "Afor" },
        { date: 25, market: "Nkwo" },
        { date: 26, market: "Eke" },
        { date: 27, market: "Orie" },
        { date: 28, market: "Afor" },
        { date: 29, market: "Nkwo" },
        { date: 30, market: "Eke" },
        { date: 31, market: "Orie" },
      ],
      febCalender: [
        { date: "", market: "" },
        { date: 1, market: "Afor" },
        { date: 2, market: "Nkwo" },
        { date: 3, market: "Eke" },
        { date: 4, market: "Orie" },
        { date: 5, market: "Afor" },
        { date: 6, market: "Nkwo" },
        { date: 7, market: "Eke" },
        { date: 8, market: "Orie" },
        { date: 9, market: "Afor" },
        { date: 10, market: "Nkwo" },
        { date: 11, market: "Eke" },
        { date: 12, market: "Orie" },
        { date: 13, market: "Afor" },
        { date: 14, market: "Nkwo" },
        { date: 15, market: "Eke" },
        { date: 16, market: "Orie" },
        { date: 17, market: "Afor" },
        { date: 18, market: "Nkwo" },
        { date: 19, market: "Eke" },
        { date: 20, market: "Orie" },
        { date: 21, market: "Afor" },
        { date: 22, market: "Nkwo" },
        { date: 23, market: "Eke" },
        { date: 24, market: "Orie" },
        { date: 25, market: "Afor" },
        { date: 26, market: "Nkwo" },
        { date: 27, market: "Eke" },
        { date: 28, market: "Orie" },
      ],
      marCalender: [
        { date: "", market: "" },
        { date: 1, market: "Afor" },
        { date: 2, market: "Nkwo" },
        { date: 3, market: "Eke" },
        { date: 4, market: "Orie" },
        { date: 5, market: "Afor" },
        { date: 6, market: "Nkwo" },
        { date: 7, market: "Eke" },
        { date: 8, market: "Orie" },
        { date: 9, market: "Afor" },
        { date: 10, market: "Nkwo" },
        { date: 11, market: "Eke" },
        { date: 12, market: "Orie" },
        { date: 13, market: "Afor" },
        { date: 14, market: "Nkwo" },
        { date: 15, market: "Eke" },
        { date: 16, market: "Orie" },
        { date: 17, market: "Afor" },
        { date: 18, market: "Nkwo" },
        { date: 19, market: "Eke" },
        { date: 20, market: "Orie" },
        { date: 21, market: "Afor" },
        { date: 22, market: "Nkwo" },
        { date: 23, market: "Eke" },
        { date: 24, market: "Orie" },
        { date: 25, market: "Afor" },
        { date: 26, market: "Nkwo" },
        { date: 27, market: "Eke" },
        { date: 28, market: "Orie" },
        { date: 29, market: "Afor" },
        { date: 30, market: "Nkwo" },
        { date: 31, market: "Eke" },
      ],
      aprCalender: [
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: 1, market: "Orie" },
        { date: 2, market: "Afor" },
        { date: 3, market: "Nkwo" },
        { date: 4, market: "Eke" },
        { date: 5, market: "Orie" },
        { date: 6, market: "Afor" },
        { date: 7, market: "Nkwo" },
        { date: 8, market: "Eke" },
        { date: 9, market: "Orie" },
        { date: 10, market: "Afor" },
        { date: 11, market: "Nkwo" },
        { date: 12, market: "Eke" },
        { date: 13, market: "Orie" },
        { date: 14, market: "Afor" },
        { date: 15, market: "Nkwo" },
        { date: 16, market: "Eke" },
        { date: 17, market: "Orie" },
        { date: 18, market: "Afor" },
        { date: 19, market: "Nkwo" },
        { date: 20, market: "Eke" },
        { date: 21, market: "Orie" },
        { date: 22, market: "Afor" },
        { date: 23, market: "Nkwo" },
        { date: 24, market: "Eke" },
        { date: 25, market: "Orie" },
        { date: 26, market: "Afor" },
        { date: 27, market: "Nkwo" },
        { date: 28, market: "Eke" },
        { date: 29, market: "Orie" },
        { date: 30, market: "Afor" },
      ],
      mayCalender: [
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: 1, market: "Nkwo" },
        { date: 2, market: "Eke" },
        { date: 3, market: "Orie" },
        { date: 4, market: "Afor" },
        { date: 5, market: "Nkwo" },
        { date: 6, market: "Eke" },
        { date: 7, market: "Orie" },
        { date: 8, market: "Afor" },
        { date: 9, market: "Nkwo" },
        { date: 10, market: "Eke" },
        { date: 11, market: "Orie" },
        { date: 12, market: "Afor" },
        { date: 13, market: "Nkwo" },
        { date: 14, market: "Eke" },
        { date: 15, market: "Orie" },
        { date: 16, market: "Afor" },
        { date: 17, market: "Nkwo" },
        { date: 18, market: "Eke" },
        { date: 19, market: "Orie" },
        { date: 20, market: "Afor" },
        { date: 21, market: "Nkwo" },
        { date: 22, market: "Eke" },
        { date: 23, market: "Orie" },
        { date: 24, market: "Afor" },
        { date: 25, market: "Nkwo" },
        { date: 26, market: "Eke" },
        { date: 27, market: "Orie" },
        { date: 28, market: "Afor" },
        { date: 29, market: "Nkwo" },
        { date: 30, market: "Eke" },
        { date: 31, market: "Orie" },
      ],
      juneCalender: [
        { date: "", market: "" },
        { date: "", market: "" },
        { date: 1, market: "Afor" },
        { date: 2, market: "Nkwo" },
        { date: 3, market: "Eke" },
        { date: 4, market: "Orie" },
        { date: 5, market: "Afor" },
        { date: 6, market: "Nkwo" },
        { date: 7, market: "Eke" },
        { date: 8, market: "Orie" },
        { date: 9, market: "Afor" },
        { date: 10, market: "Nkwo" },
        { date: 11, market: "Eke" },
        { date: 12, market: "Orie" },
        { date: 13, market: "Afor" },
        { date: 14, market: "Nkwo" },
        { date: 15, market: "Eke" },
        { date: 16, market: "Orie" },
        { date: 17, market: "Afor" },
        { date: 18, market: "Nkwo" },
        { date: 19, market: "Eke" },
        { date: 20, market: "Orie" },
        { date: 21, market: "Afor" },
        { date: 22, market: "Nkwo" },
        { date: 23, market: "Eke" },
        { date: 24, market: "Orie" },
        { date: 25, market: "Afor" },
        { date: 26, market: "Nkwo" },
        { date: 27, market: "Eke" },
        { date: 28, market: "Orie" },
        { date: 29, market: "Afor" },
        { date: 30, market: "Nkwo" },
      ],
      julyCalender: [
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: 1, market: "Eke" },
        { date: 2, market: "Orie" },
        { date: 3, market: "Afor" },
        { date: 4, market: "Nkwo" },
        { date: 5, market: "Eke" },
        { date: 6, market: "Orie" },
        { date: 7, market: "Afor" },
        { date: 8, market: "Nkwo" },
        { date: 9, market: "Eke" },
        { date: 10, market: "Orie" },
        { date: 11, market: "Afor" },
        { date: 12, market: "Nkwo" },
        { date: 13, market: "Eke" },
        { date: 14, market: "Orie" },
        { date: 15, market: "Afor" },
        { date: 16, market: "Nkwo" },
        { date: 17, market: "Eke" },
        { date: 18, market: "Orie" },
        { date: 19, market: "Afor" },
        { date: 20, market: "Nkwo" },
        { date: 21, market: "Eke" },
        { date: 22, market: "Orie" },
        { date: 23, market: "Afor" },
        { date: 24, market: "Nkwo" },
        { date: 25, market: "Eke" },
        { date: 26, market: "Orie" },
        { date: 27, market: "Afor" },
        { date: 28, market: "Nkwo" },
        { date: 29, market: "Eke" },
        { date: 30, market: "Orie" },
        { date: 31, market: "Afor" },
      ],
      augCalender: [
        { date: 1, market: "Nkwo" },
        { date: 2, market: "Eke" },
        { date: 3, market: "Orie" },
        { date: 4, market: "Afor" },
        { date: 5, market: "Nkwo" },
        { date: 6, market: "Eke" },
        { date: 7, market: "Orie" },
        { date: 8, market: "Afor" },
        { date: 9, market: "Nkwo" },
        { date: 10, market: "Eke" },
        { date: 11, market: "Orie" },
        { date: 12, market: "Afor" },
        { date: 13, market: "Nkwo" },
        { date: 14, market: "Eke" },
        { date: 15, market: "Orie" },
        { date: 16, market: "Afor" },
        { date: 17, market: "Nkwo" },
        { date: 18, market: "Eke" },
        { date: 19, market: "Orie" },
        { date: 20, market: "Afor" },
        { date: 21, market: "Nkwo" },
        { date: 22, market: "Eke" },
        { date: 23, market: "Orie" },
        { date: 24, market: "Afor" },
        { date: 25, market: "Nkwo" },
        { date: 26, market: "Eke" },
        { date: 27, market: "Orie" },
        { date: 28, market: "Afor" },
        { date: 29, market: "Nkwo" },
        { date: 30, market: "Eke" },
        { date: 31, market: "Orie" },
      ],
      septCalender: [
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: 1, market: "Afor" },
        { date: 2, market: "Nkwo" },
        { date: 3, market: "Eke" },
        { date: 4, market: "Orie" },
        { date: 5, market: "Afor" },
        { date: 6, market: "Nkwo" },
        { date: 7, market: "Eke" },
        { date: 8, market: "Orie" },
        { date: 9, market: "Afor" },
        { date: 10, market: "Nkwo" },
        { date: 11, market: "Eke" },
        { date: 12, market: "Orie" },
        { date: 13, market: "Afor" },
        { date: 14, market: "Nkwo" },
        { date: 15, market: "Eke" },
        { date: 16, market: "Orie" },
        { date: 17, market: "Afor" },
        { date: 18, market: "Nkwo" },
        { date: 19, market: "Eke" },
        { date: 20, market: "Orie" },
        { date: 21, market: "Afor" },
        { date: 22, market: "Nkwo" },
        { date: 23, market: "Eke" },
        { date: 24, market: "Orie" },
        { date: 25, market: "Afor" },
        { date: 26, market: "Nkwo" },
        { date: 27, market: "Eke" },
        { date: 28, market: "Orie" },
        { date: 29, market: "Afor" },
        { date: 30, market: "Nkwo" },
      ],
      octCalender: [
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: 1, market: "Eke" },
        { date: 2, market: "Orie" },
        { date: 3, market: "Afor" },
        { date: 4, market: "Nkwo" },
        { date: 5, market: "Eke" },
        { date: 6, market: "Orie" },
        { date: 7, market: "Afor" },
        { date: 8, market: "Nkwo" },
        { date: 9, market: "Eke" },
        { date: 10, market: "Orie" },
        { date: 11, market: "Afor" },
        { date: 12, market: "Nkwo" },
        { date: 13, market: "Eke" },
        { date: 14, market: "Orie" },
        { date: 15, market: "Afor" },
        { date: 16, market: "Nkwo" },
        { date: 17, market: "Eke" },
        { date: 18, market: "Orie" },
        { date: 19, market: "Afor" },
        { date: 20, market: "Nkwo" },
        { date: 21, market: "Eke" },
        { date: 22, market: "Orie" },
        { date: 23, market: "Afor" },
        { date: 24, market: "Nkwo" },
        { date: 25, market: "Eke" },
        { date: 26, market: "Orie" },
        { date: 27, market: "Afor" },
        { date: 28, market: "Nkwo" },
        { date: 29, market: "Eke" },
        { date: 30, market: "Orie" },
        { date: 31, market: "Afor" },
      ],
      novCalender: [
        { date: "", market: "" },
        { date: 1, market: "Nkwo" },
        { date: 2, market: "Eke" },
        { date: 3, market: "Orie" },
        { date: 4, market: "Afor" },
        { date: 5, market: "Nkwo" },
        { date: 6, market: "Eke" },
        { date: 7, market: "Orie" },
        { date: 8, market: "Afor" },
        { date: 9, market: "Nkwo" },
        { date: 10, market: "Eke" },
        { date: 11, market: "Orie" },
        { date: 12, market: "Afor" },
        { date: 13, market: "Nkwo" },
        { date: 14, market: "Eke" },
        { date: 15, market: "Orie" },
        { date: 16, market: "Afor" },
        { date: 17, market: "Nkwo" },
        { date: 18, market: "Eke" },
        { date: 19, market: "Orie" },
        { date: 20, market: "Afor" },
        { date: 21, market: "Nkwo" },
        { date: 22, market: "Eke" },
        { date: 23, market: "Orie" },
        { date: 24, market: "Afor" },
        { date: 25, market: "Nkwo" },
        { date: 26, market: "Eke" },
        { date: 27, market: "Orie" },
        { date: 28, market: "Afor" },
        { date: 29, market: "Nkwo" },
        { date: 30, market: "Eke" },
      ],
      decCalender: [
        { date: "", market: "" },
        { date: "", market: "" },
        { date: "", market: "" },
        { date: 1, market: "Orie" },
        { date: 2, market: "Afor" },
        { date: 3, market: "Nkwo" },
        { date: 4, market: "Eke" },
        { date: 5, market: "Orie" },
        { date: 6, market: "Afor" },
        { date: 7, market: "Nkwo" },
        { date: 8, market: "Eke" },
        { date: 9, market: "Orie" },
        { date: 10, market: "Afor" },
        { date: 11, market: "Nkwo" },
        { date: 12, market: "Eke" },
        { date: 13, market: "Orie" },
        { date: 14, market: "Afor" },
        { date: 15, market: "Nkwo" },
        { date: 16, market: "Eke" },
        { date: 17, market: "Orie" },
        { date: 18, market: "Afor" },
        { date: 19, market: "Nkwo" },
        { date: 20, market: "Eke" },
        { date: 21, market: "Orie" },
        { date: 22, market: "Afor" },
        { date: 23, market: "Nkwo" },
        { date: 24, market: "Eke" },
        { date: 25, market: "Orie" },
        { date: 26, market: "Afor" },
        { date: 27, market: "Nkwo" },
        { date: 28, market: "Eke" },
        { date: 29, market: "Orie" },
        { date: 30, market: "Afor" },
        { date: 31, market: "Nkwo" },
      ],
    };
  },
};
</script>