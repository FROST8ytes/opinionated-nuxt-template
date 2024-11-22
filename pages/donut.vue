<template>
  <div class="grid gap-4 w-full">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, FROSTy citizen!</p>
        <h1>Donut Chart</h1>
      </div>
      <ShadCNSkeleton class="rounded-xl h-12 w-[120px]" />
    </header>
    <main class="grid gap-4">
      <ShadCNDonutChart
        index="name"
        :category="'total'"
        :data="[
          {
            name: 'Jan',
            total: Math.floor(Math.random() * 2000) + 500,
            predicted: Math.floor(Math.random() * 2000) + 500,
          },
          {
            name: 'Feb',
            total: Math.floor(Math.random() * 2000) + 500,
            predicted: Math.floor(Math.random() * 2000) + 500,
          },
          {
            name: 'Mar',
            total: Math.floor(Math.random() * 2000) + 500,
            predicted: Math.floor(Math.random() * 2000) + 500,
          },
          {
            name: 'Apr',
            total: Math.floor(Math.random() * 2000) + 500,
            predicted: Math.floor(Math.random() * 2000) + 500,
          },
          {
            name: 'May',
            total: Math.floor(Math.random() * 2000) + 500,
            predicted: Math.floor(Math.random() * 2000) + 500,
          },
          {
            name: 'Jun',
            total: Math.floor(Math.random() * 2000) + 500,
            predicted: Math.floor(Math.random() * 2000) + 500,
          },
        ]"
      />
    </main>
  </div>
</template>
