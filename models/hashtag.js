const Sequelize = require('sequelize');

class Hashtag extends Sequelize.Model {
    static initiate(sequelize){
        Hashtag.init({
            title:{
                type:Sequelize.STRING(15),
                allowNull:false,
                unique:true,
            }
        },
        {
            sequelize,
            timestamps:true,
            underscored:false,
            paranoid:false,
            modelName:'Post',
            tableName:'posts',
            charset:'utf8',
            collate:'utf8_generic_ci'
        })

    }

    static associate(db){
        db.Hashtag.belongsToMany(db.Post,{through:'PostHashtag'});

    }



}

module.exports = Hashtag;


