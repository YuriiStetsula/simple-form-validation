
(function(window){


var RegistrationForm = function (obj) {
        
        this.rootElem = document.querySelector(obj.rootElementClass);
        this.form = obj.formName;
        
        this.pass = this.rootElem.querySelector(obj.passwordInputClass);
        this.repeatPass = this.rootElem.querySelector(obj.passwordInputRepeatClass);
        
        this.handleEvent();

    } 


    RegistrationForm.prototype.handleEvent = function () {
      var self = this;
        for (var i = 0; i< this.form.length; i++){
 
                if ( this.form[i].type != "submit" ){

                this.onFocus(this.form[i]);
                this.invalid(this.form[i]);

            }
        
            if (this.form[i].type === "password"){
                this.form[i].addEventListener("blur", function (){

                if( self.pass.value.length > 0 && self.repeatPass.value.length > 0){

                        if(self.pass.value != self.repeatPass.value){
                            self.pass.classList.add ("match_pass")
                            self.repeatPass.classList.add ("match_pass")
                        }else if (self.pass.value === self.repeatPass.value){
                            self.pass.classList.remove ("match_pass")
                            self.repeatPass.classList.remove ("match_pass")
                            console.log("true")
                        }
                 }



                },false )
            }
        
            }
    }

    RegistrationForm.prototype.onFocus = function (e) {
        e.addEventListener("focus", function(){
     if (this.style.backgroundColor === "pink")
     this.style.backgroundColor = ""
        },false )
      
    };
    
    RegistrationForm.prototype.invalid = function (e) {
       e.addEventListener("blur", function(){
         if (this.value.length === 0)
    this.style.backgroundColor = "pink"
       },false )
    
   
};


window.app = window.app || {};
window.app.RegistrationForm = RegistrationForm;


})(window)

 

   

   
