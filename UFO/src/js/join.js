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