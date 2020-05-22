import axios from 'axios'

const url = 'https://frontend-test-assignment-api.abz.agency/api/v1'

export const api = {
    async getUsers(newUrl) {
        let modifiedURL = `${url}/users?page=1&count=6`
        if (newUrl) {
            modifiedURL = newUrl
        }
        try {
            let { data: { users, links } } = await axios.get(modifiedURL)
            return { users, links }
        } catch (err) {
            console.log(err)
        }
    },
    async getPositions() {
        try {
            let { data: { positions } } = await axios.get(`${url}/positions`)
            return positions
        } catch (err) {
            console.log(err)
        }
    },
    async getToken() {
        try {
            let { data: { token } } = await axios.get(`${url}/token`)
            return { token }
        } catch (err) {
            console.log(err)
        }
    },
    async userRegistration(formData) {
        let { token } = await this.getToken()

        return fetch(`${url}/users`, {
            method: 'POST',
            body: formData,
            headers: {
                'Token': token, // get token with GET api/v1/token method
            },
        })
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }
}