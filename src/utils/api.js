const BASE_API = 'http://localhost:5000/nurse-app-3e5b2/us-central1/api/'

class Api {
    async getUsers(){
        const query = await fetch(`${BASE_API}clients`)
        const data = await query.json();
        return data
    }

    async getServices(){
        const query = await fetch(`${BASE_API}services`)
        const data = await query.json();
        return data;
    }
}

export default new Api();