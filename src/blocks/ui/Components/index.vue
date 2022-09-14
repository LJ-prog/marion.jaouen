<template>
    <div id="components" class="spacer m-top-xl">
        <h2>Components</h2>

        <alerts-block />

        <badge-block />

        <breadcrumb-block />

        <buttons-block />

        <buttons-group-block />

        <card-block />

        <slider-block />

        <collapse-block />

        <dropdowns-block />

        <forms-block />

        <input-group-block />

        <list-group-block />

        <media-object-block />

        <modal-block />

        <navs-block />

        <pagination-block />

        <scroll-block />
    </div>
</template>

<script>
    import Alerts from './Alerts';
    import Badge from './Badge';
    import Breadcrumb from './Breadcrumb';
    import Buttons from './Buttons';
    import ButtonGroup from './ButtonGroup';
    import Card from './Card';
    import Slider from './Slider';
    import Collapse from './Collapse';
    import Dropdowns from './Dropdowns';
    import Forms from './Forms';
    import InputGroup from './InputGroup';
    import ListGroup from './ListGroup';
    import MediaObject from './MediaObject';
    import Modal from './Modal';
    import Navs from './Navs';
    import Pagination from './Pagination';
    import Scroll from './Scroll';

    export default {
        name: 'index',
        components: {
            'alerts-block': Alerts,
            'badge-block': Badge,
            'breadcrumb-block': Breadcrumb,
            'buttons-block': Buttons,
            'buttons-group-block': ButtonGroup,
            'card-block': Card,
            'slider-block': Slider,
            'collapse-block': Collapse,
            'dropdowns-block': Dropdowns,
            'forms-block': Forms,
            'input-group-block': InputGroup,
            'list-group-block': ListGroup,
            'media-object-block': MediaObject,
            'modal-block': Modal,
            'navs-block': Navs,
            'pagination-block': Pagination,
            'scroll-block': Scroll
        }
    }
</script>
