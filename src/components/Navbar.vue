<script>
export default {

    methods: {
        goto(refName) {
            var element = this.$refs[refName];
            console.log(element);
            var top = element.offsetTop;

            window.scrollTo(0, top);
        },
        goToBottom(){
            window.scrollTo(0,document.body.scrollHeight);
        }
    }
}
</script>
<template>
    <div class="container">
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="/img/logo.svg" alt="Lakhveer bawa" width="112" height="28">
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">

                </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <a @click="goToBottom" class="button button is-primary is-outlined">
                                Say Hello
                            </a>
                        </div>
                    </div>
                </div>
        </nav>
    </div>
</template>
