<template>
  <div class="bg-green-100 min-h-screen">
    <div class="px-4 py-16 max-w-md mx-auto">
      <div class="border shadow-lg rounded-lg overflow-hidden">
        <div class="bg-yellow-500 px-4 py-6">
          <h1 class="text-center tracking-widest font-bold text-xl text-gray-800">
            WARNING!!!
          </h1>
          <p class="mt-4 tracking-wide">Please be notified that you Must be an indigene of NOMEH UNATEZE to view certain pages of this application and to perform some other actions required thereof.</p>
          <div class="mt-6 flex justify-center space-x-4">
              <n-link to="/" class="border border-red-200 text-red-500 shadow-lg px-6 py-2 rounded-lg w-full focus:outline-none focus:shadow-outline text-center">Bye</n-link>
              <n-link to="/login" class="bg-green-500 text-gray-200 shadow-lg px-6 py-2 rounded-lg w-full focus:outline-none focus:shadow-outline text-center">I'm indigene</n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>