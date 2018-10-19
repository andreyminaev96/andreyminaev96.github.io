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