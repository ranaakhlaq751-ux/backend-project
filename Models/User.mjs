import mongoose from "mongoose";


const { Schema } = mongoose;

const userSchema = new Schema({
  
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique:true
    },

    phone: {
      type: String,
      required: true,
 
    },

    password: {
      type: String,
      required: true,
      minilenglenght:8,
    },
    tokens:{
       type: String,
     default: []
    },
role :{
  type: String,
  enum :["user"," admin"],
  defult: "user"
}
});
  userSchema.pre ("save ", function (next){
  const User= this 
  if (User.isModified ('passowrd ')){
const salt = bcrypt .getSaltsync(10);
const hash= bcrypt.hashSync(
  User.password,salt
);
User.password=hash
  }
  next()
   })
    userSchema.methods.comparePassword = function (){
const user =this 
console.log ('db password ', user .password )
console.log ('frontend password ', password )
return bcrypt.comareSync(password, user. password)
    }
  
 userSchema.method.generateToken = function (){
  const{_id }= this 
  const token = jwt .sign ({_id }, jwtsecret);
  return token
 }
const User = mongoose.model("User", userSchema);

export default User;