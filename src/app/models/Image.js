import Sequelize, { Model } from 'sequelize';

class Image extends Model {
  static init(sequelize) {
    super.init(
      {
        chave: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        imagem: Sequelize.STRING,
        sr_recno: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'supernet_imagens',
      }
    );
    return this;
  }
}

export default Image;
