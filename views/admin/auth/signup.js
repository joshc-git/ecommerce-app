const { getError } = require('../../helpers')
const layout = require('../../layout')

module.exports = ({ errors }) => {
    return layout({
        content: `
            <div id="form-container">
                <div id="sign-up-form">
                    <h1>Create an account</h1>
                    <form method="POST">
                        <div class="form-field">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" value="">
                            <p class="error">${getError(errors, 'email')}</p>
                        </div>
                        <div class="form-field">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" value="">
                            <p class="error">${getError(errors, 'password')}</p>
                        </div>
                        <div class="form-field">
                            <label for="passwordConfirmation">Password Confirmation</label>
                            <input type="password" name="passwordConfirmation" id="passwordConfirmation" value="">
                            <p class="error">${getError(errors, 'passwordConfirmation')}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        `
    })
}