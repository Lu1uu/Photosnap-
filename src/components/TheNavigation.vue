<template>
    <nav class="nav">
        <div class="nav__logo">
            <img src="@/assets/shared/desktop/logo.svg" alt="" />
        </div>
        <div @click="toggleMenu()" class="nav__menu">
            <img
                :src="
                    !isMenuOpen
                        ? require(`../assets/shared/mobile/menu.svg`)
                        : require(`../assets/shared/mobile/close.svg`)
                "
                alt="menu"
            />
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
    },
}
</script>

<style lang="scss">
.nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem;
    background: white;
    &__menu {
    }
}
</style>
