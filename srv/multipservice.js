module.exports = async(srv)=>{

    srv.on('product',(req,res)=>{
        let result = req.data.num1 * req.data.num2;
        return result;
    })
}

