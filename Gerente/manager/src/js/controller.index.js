document.getElementById('btnInicio').addEventListener('click', async function() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const apiUrl = 'http://localhost:3000/manager/loginNew';

    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        if(response.status == 200){
            if(data.length !== 0){
                
                window.location.href = `../renderer/views/index.html?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
                
                console.log('No se encontraron registros.');
            }else{
                console.log('Registros encontrados:', data);
            }
        }
        console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
});


