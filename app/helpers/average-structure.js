import Ember from 'ember';

export function averageStructure(params/*, hash*/) {
  if (params[0].map((evaluation) => evaluation.get('structure')).length === "0") {
    return 0;
  } else {

    let sum = params[0].map((evaluation) => evaluation.get('structure')).reduce(((a,b)=> a + b), 0);
    return sum / params[1];
  }
}

export default Ember.Helper.helper(averageStructure);
