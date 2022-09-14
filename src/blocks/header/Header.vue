<template>
    <header id="header" class="site-header">
        <div class="wrapper">
            <div class="header-content d-flex justify-content-between">
                <Logo />

                <div class="header-menu">
                    <MenuModalButton />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import Logo from './HeaderLogo';
    import MenuModalButton from '../../components/Button/MenuModalButton';

    export default {
        name: 'Header',
        components: {
            Logo,
            MenuModalButton
        }
    }
</script>
