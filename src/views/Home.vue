<template>
    <div>
        <div class="topnav">
            <div class="logo">logo</div>
            <ul class="menu">
              <li>菜单1</li>
              <li>菜单2</li>
            </ul>
        </div>
        <div class="bannber">
            <h1>禅UI</h1>
            <h2>一个随性的UI框架</h2>
            <p class="actions">
                <a href="#">Github</a>
                <a href="#">Get Start</a>
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    > .logo {
        max-width: 6em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
}
</style>
