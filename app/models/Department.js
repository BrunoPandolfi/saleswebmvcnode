const { Model, DataTypes } = require('sequelize');

class Department extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: DataTypes.STRING
        }, {
            sequelize,
            modelName: 'department',
            freezeTableName: true
        }
        );
    }
}

module.exports = Department;