import app from "./index.mjs";
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
 