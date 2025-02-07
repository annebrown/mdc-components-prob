<!--------@/layouts/default.vue------------------------------------------------>
<template>
  <div>
    <p>Breadcrumb:</p>
    <UBreadcrumb
      divider="/"
      :links="[
        { label: 'HomeContent', to: '/basic' },
        { label: 'Navigation' },
        { label: 'Breadcrumb' },
      ]"
    />

    <!-- Cargo -->
    <ContentDoc v-slot="{ doc }"> <ContentRenderer :value="doc" /> </ContentDoc
    ><!-- Cargo -->
  </div>
</template>
<!--------@/layouts/default.vue------------------------------------------------>
