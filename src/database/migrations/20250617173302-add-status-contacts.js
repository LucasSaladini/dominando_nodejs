module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('contacts', 'status', {
      type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      allowNull: false,
      defaultValue: "ACTIVE"
    });
  },

  async down (queryInterface) {
    await queryInterface.sequelize.transaction(async => {
      queryInterface.removeColumn('contacts', 'status', {transaction});
      queryInterface.sequelize.query("DROP TYPE enum_contacts_status", {transaction});
    });
  }
};
