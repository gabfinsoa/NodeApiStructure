import 'dotenv/config';
import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

// MODELS
import Card from '../app/models/Card';

const models = [Card];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
