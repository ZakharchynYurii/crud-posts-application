class EasyHTTP{
    async get(url){
        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-type':'application/json'}
        })

        const responseData = await response.json();

        return responseData;
    }

    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(data)
        })

        const responseData = response.json();

        return responseData;
    }

    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(data)
        })

        const responseData = await response.json();

        return responseData;
    }

    async delete(url){
        const response = fetch(url, {
            method: 'DELETE',
            headers: {'Content-type':'application/json'}
        })

        const responseData = await `Resource Deleted...`;

        return responseData;
    }
}

export const http = new EasyHTTP();