class environmentData {
    get username() {
        return Cypress.env('viewer_user_email')
    }

    get password() {
        return Cypress.env('viewer_user_password')
    }
}

export default new environmentData()