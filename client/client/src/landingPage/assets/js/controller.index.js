const logIn = document.getElementById("logIn")
logIn.addEventListener("click", function(){
    window.location.href = "#logIn"
})

const signIn = document.getElementById("signIn")
signIn.addEventListener("click", function(){
    window.location.href = "#signIn";
})

document.getElementById('btnInicio').addEventListener('click', async function() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const apiUrl = 'http://localhost:3000/login';

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
                
                sessionStorage.setItem('username', username);

                window.location.href = `../../renderer/views/infoUser.html`
                
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


document.getElementById("crearUser").addEventListener("click", async function(){

        // Definimos la url
        const apiUrl = `http://localhost:3000/crearUser`;

        // // Guardar los deatos del nuevo usuario
        const nombreNuevoUser = document.getElementById("nombreNuevoUser").value;
        const apellidoNuevoUser = document.getElementById("apellidoNuevoUser").value;
        const emailNuevoUser = document.getElementById("emailNuevoUser").value;
        const telNuevoUser = document.getElementById("telNuevoUser").value;
        const dirNuevoUser = document.getElementById("dirNuevoUser").value;
        const passNuevoUser = document.getElementById("passNuevoUser").value;
        const userNuevoUser = document.getElementById("userNuevoUser").value;
        const DNINuevoUser = document.getElementById("DNINuevoUser").value;
        const licenciaNuevoUser = document.getElementById("licenciaNuevoUser").value;
    
        // Creamos otro objeto para agregar los parametros a la peticion
        const formData = new URLSearchParams();
        formData.append('nombreNuevoUser', nombreNuevoUser);
        formData.append('apellidoNuevoUser', apellidoNuevoUser);
        formData.append('emailNuevoUser', emailNuevoUser);
        formData.append('telNuevoUser', telNuevoUser);
        formData.append('dirNuevoUser', dirNuevoUser);
        formData.append('passNuevoUser', passNuevoUser);
        formData.append('userNuevoUser', userNuevoUser);
        formData.append('DNINuevoUser', DNINuevoUser);
        formData.append('licenciaNuevoUser', licenciaNuevoUser);

        const data = {
            nombreNuevoUser: nombreNuevoUser,
            apellidoNuevoUser: apellidoNuevoUser,
            emailNuevoUser: emailNuevoUser,
            telNuevoUser: telNuevoUser,
            dirNuevoUser: dirNuevoUser,
            passNuevoUser: passNuevoUser,
            userNuevoUser: userNuevoUser,
            DNINuevoUser: DNINuevoUser,
            licenciaNuevoUser: licenciaNuevoUser
          };
    
        // Definimos las opciones de la peticion
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

                sessionStorage.setItem('username', userNuevoUser);

                window.location.href = `../../renderer/views/infoUser.html`;
            }
    
        } catch (error) {
            console.error('Error:', error);
        }

});

// document.getElementById("crearUser").addEventListener("click", async function(){

//     // Definimos la url
//     const apiUrl = `http://localhost:3000/crearUsuario`;
//     const passNuevoUser = document.getElementById("passNuevoUser").value;
//     const userNuevoUser = document.getElementById("userNuevoUser").value;

//     // Definimos las opciones de la peticion
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({passNuevoUser, userNuevoUser})
//     };

//     try {
//         const response = await fetch(apiUrl, requestOptions);
//         if (response.ok) {
//             alert('User created successfully!');
//           } else {
//             alert('Error creating user');
//           }

//     } catch (error) {
//         console.error('Error:', error);
//     }

// });