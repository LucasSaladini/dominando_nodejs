module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('customers', 'status', {
      type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      allowNull: false,
      defaultValue: "ACTIVE"
    });
  },

  async down (queryInterface) {
    await queryInterface.sequelize.transaction(async => {
      queryInterface.removeColumn('customers', 'status', {transaction});
      queryInterface.sequelize.query("DROP TYPE enum_customers_status", {transaction});
    });
  }
};
