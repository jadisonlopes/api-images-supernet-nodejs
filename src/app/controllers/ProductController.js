import { Op } from 'sequelize';

import Product from '../models/Product';
import Image from '../models/Image';

class ProductController {
  async index(req, res) {
    const product = await Product.findAll({
      where: {
        codigo: {
          [Op.gt]: req.query.codigo,
        },
      },
      include: [
        {
          model: Image,
          required: true,
        },
      ],
      order: [['codigo', 'ASC']],
      limit: 100,
    });

    if (!product) {
      return res.status(400).json({ error: 'Product not found.' });
    }

    const data = product.map((element) => ({
      codigo: element.codigo,
      nome: element.nome,
      Images: element.Images.map((image) => ({
        imagem: image.imagem.toString(),
        sr_recno: image.sr_recno,
      })),
    }));

    return res.status(200).json(data);
  }
}

export default new ProductController();
