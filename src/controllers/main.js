const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        return res.send({products: null});
    },
    show: (req, res) => {
        return res.send({params:req.params,product: null});
    },
    create: (req, res) => {
        return res.render("product",{
            brands: [],
            categories:[]
        });
        return res.send({brands: null,categories:null});
    },
    edit: (req, res) => {
        return res.render("product",{
            product:{
                id:req.params.id,
                name:"product"
            },
            brands: [],
            categories:[]
        });
        return res.send({product: null,brands: null,categories:null});
    },
    save: (req, res) => {
        return res.send({data:req.body,product: null});
    },
    update: (req, res) =>{
        return res.send({data:req.body,id:req.params,product: null});
    },
    delete: (req, res) => {
        return res.send({data:req.body,product: null});
    }
}