async function activarOrden(key1) {
    console.log('Hola mundo')
    const apiUrl = `http://localhost:3000/managerSeeMoore/ordenesChangeState?id=${key1}`;

    const formData = new URLSearchParams();
    formData.append('id', key1);
    //formData.append('password', password);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    console.log(key1)

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        console.log(response)
    } catch (error) {
        console.error('Error:', error);
    }
}