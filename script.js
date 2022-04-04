const slice = () =>{

  const $btnSignIn=document.querySelector(".sign-in-btn"),
        $btnSignUp=document.querySelector(".sign-up-btn"),
        $signUp=document.querySelector(".sign-up")
        $signIn=document.querySelector(".sign-in");
  
  document.addEventListener("click", e =>{
    if(e.target === $btnSignIn || e.target === $btnSignUp){
      $signIn.classList.toggle("active")
      $signUp.classList.toggle("active")
    }
  })
}
const login = () =>{
  const form= document.getElementById("login")
  form.addEventListener("submit", async (e) =>{
    e.preventDefault();
    const email = document.getElementById("emailLogin").value ;
    const password=document.getElementById("passwordLogin").value;
    try{
     const res = await fetch( "",{
method:"POST",
headers:{
  "Content-Type": "application/json"
},
body:JSON.stringify({
  email,
  password
}),
      }
  );
  if(res.status === 401){
    alert( "Mail o Contraseña Incorrecta!!")
  } else{
    alert("Bienvenido")
  }
    }catch(error){
      console.log(error);
      alert(error)
    }
  });
};
const register = () =>{
  const form= document.getElementById("register")
  form.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const email = document.getElementById ("emailRegister").value;
    const password = document.getElementById("passwordRegister").value;
    const name = document.getElementById("nameRegister").value;
        try{
     const res = await fetch( "",{
method:"POST",
headers:{
  "Content-Type": "application/json"
},
body:JSON.stringify({
  name,
  email,
  password
}),
      }
  );
  if(res.status === 400){
    alert( "El Usuario Ya Existe!!")
  } else if (res.status === 500){
    alert("Datos Incompletos ")
  } else{
   alert("Cuenta Creada")
  }
    }catch(error){
      console.log(error);
      alert(error)
    }
  })
}

const main = () =>{
slice();
login();
register();
};
main();