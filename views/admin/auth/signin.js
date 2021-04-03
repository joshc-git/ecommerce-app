const { getError } = require('../../helpers')
const layout = require('../../layout')

module.exports = ({ errors }) => {
    return layout({ 
        content: `
            <div id="form-container">
                <div id="sign-in-form">
                    <h1>Sign in</h1>
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        `
    })
}