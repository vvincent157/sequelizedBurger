module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     console.log('burge associalte!!!', models);
    //     Burger.belongsTo(models.Customer);
    //   }
    // }
  });
  return Burger;
};


// module.exports = function(sequelize, DataTypes) {
//   var Customer = sequelize.define("Customer", {
//     customer: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, {
//     // classMethods: {
//     //   associate: function(models) {
//     //     console.log('customer associalte!!!', models);
//     //     Customer.hasOne(models.Burger);
//     //   }
//     // }
//   });
//   return Customer;
// };
