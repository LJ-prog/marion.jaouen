<template>
    <form v-on:submit.prevent="submitForm" method="post" action="form.php" id="cf-1" class="contact-form">
        <div class="form-group form-group-lg">
            <p class="input-group gutter-width-md no-space">
            <span class="gutter-width">
                <label class="form-label-lg before after" for="cf-1-name">Name</label>
                <input v-model="form.name" name="cf-1-name" type="text" class="form-lg" id="cf-1-name" placeholder="Your name here">
            </span>

                <span class="gutter-width">
                <label class="form-label-lg before after" for="cf-1-email-phone">Email / Phone no. *</label>
                <input v-model="form.emailOrPhone" name="cf-1-email-phone" type="text" class="form-lg" id="cf-1-email-phone" placeholder="Your email or phone no. here" required="required">
            </span>
            </p>
        </div>

        <div class="form-group form-group-lg">
            <label class="form-label-lg before after" for="cf-1-message">Message</label>
            <textarea v-model="form.message" name="cf-1-message" class="form-lg" id="cf-1-message" placeholder="Your message here"></textarea>
        </div>

        <div class="form-group form-group-lg mb-0 text-center">
            <button type="submit" class="btn btn-outline-primary text-uppercase">Send</button>
        </div>

        <transition appear leave-active-class="animated fadeOut">
            <div v-if="callAlert" id="alert" :class="'animated fadeIn alert alert--shadow alert-' + alertClass">
                {{ responseMessage }}
            </div>
        </transition>
    </form>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'ContactsForm',
        data() {
            return {
                form: {
                    name: '',
                    emailOrPhone: '',
                    message: ''
                },
                successMessage: "Sender's message was sent successfully",
                warningMessage: 'Fill up the form, please!',
                errorMessage: 'Something go wrong. Try again later!',
                responseMessage: '',
                alertClass: '',
                callAlert: false
            }
        },
        methods: {
            async submitForm() {
                axios.post( 'https://store.adveits.com/API/form.php', this.form, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                }, ).then( response => {
                    if ( response.data.status === 'success' ) {
                        this.responseMessage = this.successMessage;
                    }

                    if ( response.data.status === 'warning' ) {
                        this.responseMessage = this.warningMessage;
                    }

                    if ( response.data.status === 'error' ) {
                        this.responseMessage = this.errorMessage;
                    }
                    this.alertClass = response.data.status;
                    this.callAlert  = true;

                    setTimeout( () => {
                        this.callAlert = false;
                    }, 2000 )
                } ).catch( error => {
                    this.responseMessage = this.errorMessage;
                    this.alertClass      = 'danger';
                    this.callAlert       = true;

                    setTimeout( () => {
                        this.callAlert = false;
                    }, 2000 )
                } );
            }
        }
    }
</script>
