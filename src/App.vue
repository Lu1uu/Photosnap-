<template>
    <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

:root {
    --color-gradient-1: hsl(28, 100%, 79%);
    --color-gradient-2: hsl(329, 36%, 59%);
    --color-gradient-3: hsl(229, 100%, 68%);
    --color-light-grey: hsl(0, 0%, 87%);
}

html {
    font-size: 62.5%;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    width: 100vw;
    background: slategray;
    font-family: 'DM Sans', sans-serif;
}
</style>
