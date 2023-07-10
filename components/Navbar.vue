<script lang="ts" setup>
function goToMainPage() {
    return navigateTo('/')
}
</script>
<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style="color: white; font-size: 2em;" @click="goToMainPage">
                    kapster-app
                </a>
            </div>
        </nav>
    </div>
</template>
