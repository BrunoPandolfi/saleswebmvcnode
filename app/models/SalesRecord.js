const { Model, DataTypes} = require('sequelize');

class SalesRecords extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            date: DataTypes.DATE,
            amount: DataTypes.DOUBLE,
            status: DataTypes.INTEGER
        },{
            sequelize,
            modelName: 'salesrecord',
            freezeTableName: true
        });
    }
}

module.exports = SalesRecords;