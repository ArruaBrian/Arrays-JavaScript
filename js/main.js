// Usuarios registrados

let users = []

// Mensaje después de logueo

const loginMessage = (nam)=>{

    alert(`Que tenga una buena estadía ${nam}`)

}

// Registro

const register = () =>{

    // Validación del usuario

    let user = prompt("Ingrese un nombre mayor a 3 caracteres").toLowerCase();

    while(user == "" || user == null || user.length <= 3){

        user = prompt("Ingrese un nombre mayor a 3 caracteres").toLowerCase();

    }

    // Error para usuarios ya existentes

    if(users.find((nam) => nam.name == user)){

        alert("Este usuario ya existe!");
        
        return

    }

    // Validación del pass

    let pass = prompt("Ingrese un pass mayor a 8 caracteres");

    while(pass == "" || pass == null || pass.length <= 8){

        prompt("Ingrese un pass mayor a 8 caracteres");

    }

    // Escritura en el array "users"

    users.push({
        name: user,
        password: pass
    });

    console.table(users);

}

// login

const login = () =>{

    // Validar usuario

    let user = prompt("Ingrese su usuario registrado").toLowerCase();

    while(user == "" || user == null || user.length <= 3){

        user = prompt("Ingrese un usuario valido").toLowerCase();

    }

    // Constatar que existe el usuario

    let rUser = users.find((nam) => nam.name == user);

    try{

        alert(`Bienvenido ${rUser.name}`);

    }catch(error){

        alert("Ingrese un usuario registrado")
        login()
        return

    }

    // Validar que el pass sea correcto

    let passw = prompt("Ingrese su contraseña");

    while(passw == "" || passw == null || passw.length <= 8){

        passw = prompt("Ingrese una contraseña valida");

    }

    if(rUser.password == passw){

        alert("Contraseña correcta!");
        loginMessage(rUser.name)
        

    }else{

        alert("contraseña incorrecta");
        return

    }


}