function User(name, password){
this._name = name;
this._password = password;


  Object.defineProperty(this, "name", {
    get: function(){
      return this._name.toUpperCase()
    },

    set: function(value){
      this._name = value
    }

  })

   Object.defineProperty(this, "password", {
    get: function(){
      return this._password.toUpperCase()
    },

    set: function(value){
      this._password = value
    }

  })
}

const Roshan = new User("Roshan", "Rkc")
console.log(Roshan.name);
console.log(Roshan.password
);

