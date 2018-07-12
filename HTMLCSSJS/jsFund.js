window.onload = function(){

    $('.result').hide(); //hides the result div
    $('.moonText').hide();
    var obj = {
        fname : "Kody",
        lname : "Scharf",
        address : "3895 doug leavens blvd",
        fullInfo : function(){
            return this.fname + " " + this.lname + " " + this.address;
        }
    }

    

    
    var a = document.getElementById("fname");

    a.addEventListener("click", function(){
        console.log("test");
        alert(obj.fname);
    });
    document.getElementById("lname").addEventListener("click", function(){
        alert(obj.lname);
    });
    document.getElementById("address").addEventListener("click", function(){
        alert(obj.fullInfo());
    });

    document.getElementById('btnSubmit').addEventListener("click", function(e){
        
        if(document.getElementById('number').value >= 0 && 
        document.getElementById('number').value <= 100){
            $('.result').show(); //displays the show div (success/info/danger from form submit)
            document.getElementsByClassName('result')[0].innerHTML = "Success";
            
            e.preventDefault(); //stops auto refresh html on form submit.
        }
    });



   $('.ball2').on("mouseover", function(){
    $('.ball2').css("transform", "scale(2)");
   });
   $('.ball2').on("mouseleave", function(){
    $('.ball2').css("transform", "scale(1)");
   });
    
   $(".moon").on("mouseover", function(){
       $(".moonText").show();
       $(".moonText").html("This moon crescent was made with CSS!");
   })

   $(".moon").on("mouseleave", function(){
    $(".moonText").hide();
   
})

  }
    


