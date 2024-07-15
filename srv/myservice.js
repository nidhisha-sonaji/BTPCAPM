module.exports = async (srv) => {   //here instead of srv we can use anything else like async(nidhi)
    
    //implementation code
    srv.on('greetings', (req,res)=>{   //if we use anything instead of srv, it should be changed here like nidhi.on
        return "good morning ! " + req.data.name ;
    })
 
}