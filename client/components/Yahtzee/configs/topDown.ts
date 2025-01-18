const topDownConfig = {
  id: 'topDown',
  fields: {
    ones: {
      id: 'ones',
      name: 'Ones',
      description: 'Sum of all dice showing 1',
      value: 0,
      ruleSet: {
        validValues: [1],
      },
      isFilled: false,
    },
    twos: {
      id: 'twos',
      name: 'Twos',
      description: 'Sum of all dice showing 2',
      value: 0,
      ruleSet: {
        validValues: [2],
      },
      isFilled: false,
    },
    threes: {
      id: 'threes',
      name: 'Threes',
      description: 'Sum of all dice showing 3',
      value: 0,
      ruleSet: {
        validValues: [3],
      },
      isFilled: false,
    },
    fours: {
      id: 'fours',
      name: 'Fours',
      description: 'Sum of all dice showing 4',
      value: 0,
      ruleSet: {
        validValues: [4],
      },
      isFilled: false,
    },
    fives: {
      id: 'fives',
      name: 'Fives',
      description: 'Sum of all dice showing 5',
      value: 0,
      ruleSet: {
        validValues: [5],
      },
      isFilled: false,
    },
    sixes: {
      id: 'sixes',
      name: 'Sixes',
      description: 'Sum of all dice showing 6',
      value: 0,
      ruleSet: {
        validValues: [6],
      },
      isFilled: false,
    },
    bonus: {
      id: 'bonus',
      name: 'Bonus',
      description: 'If above 63, 50 extra points is awarded',
      value: 0,
      ruleSet: {
        fields: ['1', '2', '3', '4', '5', '6'],
        minValue: 63,
        bonus: 50,
      },
      userFillable: false,
      isFilled: false,
    },
  },
};

export default topDownConfig;
