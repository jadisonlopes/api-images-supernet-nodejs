import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
        precovndi: Sequelize.STRING,
        marca: Sequelize.STRING,
        und: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: process.env.PRODUCT,
        modelName: 'product',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Image, { foreignKey: 'chave' });
  }
}

export default Product;
