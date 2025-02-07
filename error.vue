<!--------@/error.vue---------------------------------------------------------->
<template><div>
    
    <h1>
        Sorry, boss.
    </h1> 

    <p>
        No Authz!
    </p>

    <!-- Error Code -->
    <p>Error: {{ error.statusCode }}</p>

    <!-- Go Back Button -->
    <p>
        <a href="javascript:history.back()">
            Go Back
        </a>
    </p>

</div></template>

<script setup lang="ts">
    import type { NuxtError } from '#app'

    defineProps({
    error: Object as () => NuxtError
    })
</script>
<!--------@/error.vue---------------------------------------------------------->