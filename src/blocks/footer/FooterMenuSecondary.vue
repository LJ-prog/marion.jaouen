<template>
    <nav class="menu-secondary">
        <ul class="nav">
            <li  v-for="footerItem in FooterItems" :key="footerItem.id" class="nav-item">
                <a :title="footerItem.title" :href="footerItem.href"><i :class="footerItem.icon"></i></a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import FooterData from '../../data/footer/footerData.json';
    
    export default {
        name: 'FooterMenuSecondary',
        data() {
            return {
                FooterItems: FooterData.footerData,
            }
        }
    }
</script>
