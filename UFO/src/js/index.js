const routes = [
    {path: '/', component: singlPage},
    {path: '/singl-in', component: singlPage},
    {path: '/join-us', component: joinPage}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confPassword');
const email = document.getElementById('email');
const button = document.getElementById('button');


let validateForm = () => {

    let filterEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let filterPassword = /^[a-zA-Z\-0-9]{3,20}$/;

    if (!filterEmail.test(email.value)) {
        email.classList.add("has-error");
        alert('Проверьте email!');

    } else {

        email.classList.remove("has-error"); email.classList.add("has-great");
    }

    if (password.value.search(filterPassword)=== 0){

        password.classList.remove("has-error"); password.classList.add("has-great");

        if (password.value.search(filterPassword) === 0 && confirmPassword.value.search(filterPassword) === 0 ) {

            if (password.value !== confirmPassword.value) {

                password.classList.add("has-error"); confirmPassword.classList.add("has-error");
                alert('Проверьте пароли!');

            } else {

                password.classList.remove("has-error"); password.classList.add("has-great");
                confirmPassword.classList.remove("has-error"); confirmPassword.classList.add("has-great");

            }

        } else {

            password.classList.add("has-error"); confirmPassword.classList.add("has-error");
            alert('что то с паролем бро');

        }

    } else {

        password.classList.remove("has-error"); password.classList.add("has-error");
        alert('что то с паролем бро');

    }

    return true
};






