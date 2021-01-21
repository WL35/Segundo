//// washington lara

    $(document).on("click","#btn_register",function(){
      
      let n=$("#nombre").val();
      let ln=$("#lastname").val();
      let u=$("#user").val();
      let p=$("#password").val();
      let ad=$("#address").val();
      
      if(n.trim().length<4){ 
        $("#nombre").select();
        Swal.fire({
          icon: 'error',
          title: 'Falta el nombre',
        })
        return false;
                  }
              if(ln.trim().length<4){
                $("#lastname").select();
                  Swal.fire({
                      icon: 'error',
                      title: 'Falta el apellido',
                    }) 
                    return false; 
              } 
              if(u.trim().length<4){
                $("#user").select();
                  Swal.fire({
                      icon: 'error',
                      title: 'Falta el usuario',
                    })  
                    return false;    
              } 
              if(p.trim().length<4){
                $("#password").select();
                  Swal.fire({
                      icon: 'error',
                      title: 'falta contraseña',
                    })  
                    return false;
              } 
              if(ad==""){
                $("#address").select();
                  Swal.fire({
                      icon: 'error',
                      title: 'Elija una ciudad',
                    }) 
                    return false;
              }  
              Swal.fire({
                  icon: 'success',
                  title: 'registro correcto',
                }) 
  
})

































                  /// washington lara