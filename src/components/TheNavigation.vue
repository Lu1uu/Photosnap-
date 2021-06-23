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
    <div v-if="isMenuOpen" class="menu">
        <div class="menu__links">
            <router-link to="/">STORIES</router-link>
            <router-link to="/">features</router-link>
            <router-link to="/">pricing</router-link>
        </div>
        <div class="menu__line"></div>
        <button class="menu__call-to-action">GET AN INVITE</button>
    </div>
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
}
.menu {
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 4rem;
    &__links {
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        a {
            color: black;
            margin-bottom: 2rem;
            font-size: 1.6rem;
            font-weight: bold;
            letter-spacing: 2.5px;
        }
    }
    &__line {
        width: 100%;
        height: 1px;
        background: rgba(0, 0, 0, 0.2);
    }
    &__call-to-action {
        background: black;
        color: white;
        text-align: center;
        padding: 2rem 0rem;
        width: 100%;
        margin-top: 3rem;
        border: none;
        letter-spacing: 2.5px;
        font-weight: 700;
    }
}
</style>
