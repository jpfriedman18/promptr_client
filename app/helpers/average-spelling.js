import Ember from 'ember';

export function averageSpelling(params/*, hash*/) {
  if (params[0].map((evaluation) => evaluation.get('spelling')).length === "0") {
    return 0;
  } else {

    let sum = params[0].map((evaluation) => evaluation.get('spelling')).reduce(((a,b)=> a + b), 0);
    return sum / params[1];
  }
}

export default Ember.Helper.helper(averageSpelling);
