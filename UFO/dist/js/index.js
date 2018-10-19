const singlPage = {
    template:
    `<main class="main">

     <section class="section-form">
     
        <form class="section-form__box" action="">
            <div class="section-form__item">
                <label for="email">Username</label>
                <input id="email" type="text">
            </div>
            <div class="section-form__item">
                <label for="password">Password</label>
                <input id="password" type="password">
            </div>
            <div class="section-form__checkBox">
                <input id="checkBox" type="checkbox">
                <label class="checkBox-item" for="checkBox">Keep me signed in</label>
            </div>
            <button class="section-form__button" id="button" type="submit"  onclick="return validateForm()">Sign in</button>
        </form>
         
        <a class="section-form__forgotPassword" href="#">Forgot password</a>
        
     </section>
    
    </main>`
};
const joinPage = {
    template:
        `<main class="main">
            <section class="section-form">
                <form class="section-form__box" action=""> 
                    <div class="section-form__item">
                        <label for="email"">Username</label>
                        <input id="email" type="text" >
                    </div>
                    <div class="section-form__item">
                        <label for="password">Password</label>
                        <input id="password" type="password">
                    </div>
                    <div class="section-form__item">
                        <label for="confPassword">Confirm password</label>
                        <input id="confPassword" type="password">
                    </div>
                    <button class="section-form__button join" id="button" type="submit"  onclick="return validateForm()">Sign in</button>
                </form>
            </section>
        </main>`
};
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






