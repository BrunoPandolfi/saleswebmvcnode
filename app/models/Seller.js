const { Model, DataTypes } = require('sequelize');

class Seller extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      baseSalary: DataTypes.DOUBLE,
      departmentId: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'seller',
      freezeTableName: true
    });
  }
};

module.exports = Seller;