const ScoringTable = {
  /**
   * The perfect temperature is higher than 20 and 23 or below.
   * Either side of this perfect temperature the score starts to go down.
   * Temperate is configured to be twice as important fridge and coffee
   */
  temp: {
    weighting: 2,
    scoringFuncs: [
      function(val) {
        return val <= 13 ? 0 : 0;
      },
      function(val) {
        return val > 13 && val <= 15 ? 25 : 0;
      },
      function(val) {
        return val > 15 && val <= 18 ? 50 : 0;
      },
      function(val) {
        return val > 18 && val <= 20 ? 75 : 0;
      },
      function(val) {
        return val > 20 && val <= 23 ? 100 : 0;
      },
      function(val) {
        return val > 23 && val <= 25 ? 75 : 0;
      },
      function(val) {
        return val > 25 && val <= 28 ? 50 : 0;
      },
      function(val) {
        return val > 28 && val <= 30 ? 25 : 0;
      },
      function(val) {
        return val > 30 ? 0 : 0;
      }
    ]
  },

  /**
   * If there are 1 or less coffees return 0 score.
   * The score gradually increases until reaching more than 7 at which point it always
   * returns a full score of 100
   */
  coffee: {
    weighting: 1,
    scoringFuncs: [
      function(val) {
        return val <= 1 ? 0 : 0;
      },
      function(val) {
        return val > 1 && val <= 3 ? 25 : 0;
      },
      function(val) {
        return val > 3 && val <= 5 ? 50 : 0;
      },
      function(val) {
        return val > 5 && val <= 7 ? 75 : 0;
      },
      function(val) {
        return val > 7 ? 100 : 0;
      }
    ]
  },

  // I've just used the same values as coffee here
  fridge: {
    weighting: 1,
    scoringFuncs: [
      function(val) {
        return val <= 1 ? 0 : 0;
      },
      function(val) {
        return val > 1 && val <= 3 ? 25 : 0;
      },
      function(val) {
        return val > 3 && val <= 5 ? 50 : 0;
      },
      function(val) {
        return val > 5 && val <= 7 ? 75 : 0;
      },
      function(val) {
        return val > 7 ? 100 : 0;
      }
    ]
  }
};
