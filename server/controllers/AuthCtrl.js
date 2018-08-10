
module.exports = {
    login: (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')

        db.getUser()

            .then()
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops! Something went wrong!' })
                console.log(err)
            })
    },

    register: (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')

        db.createUser()

            .then()
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops! Something went wrong!' })
                console.log(err)
            })
    },

}
