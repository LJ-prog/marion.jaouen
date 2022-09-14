<template>
    <div class="contact-me">
        <div class="contact-me-img-and-title">
            <div class="img object-fit">
                <div class="object-fit-cover">
                    <img src="assets/img/placeholder/1600x700.jpg" alt="Contacts">
                </div>
            </div>

            <h2 class="contact-me-title">Contact me</h2>
        </div>

        <div class="contact-me-content">
            <div class="contact-me-content-2">
                <div class="contact-me-description">
                    <p>Fill up a form below.</p>
                </div>

                <div class="contact-me-shortcode">
                    <ContactsForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ContactsForm from '../../components/Forms/ContactsForm';

    export default {
        name: 'ContactMe2',
        components: {
            ContactsForm
        }
    }
</script>
