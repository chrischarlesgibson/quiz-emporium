const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedQuiz = require("./quizData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedQuiz();

  process.exit(0);
};

seedAll();
