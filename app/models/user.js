export default (sequelize, DataTypes) => sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});
