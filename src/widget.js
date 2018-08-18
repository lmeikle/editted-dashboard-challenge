/**
 * Represent a category ie fridge, coffee, temp etc..
 */
class Widget {
  constructor(key, incKey, decKey) {
    this._key = key;
    this._incKey = incKey;
    this._decKey = decKey;

    this._value = 0;
    this._el = document.querySelector(`#${key} .content`);
  }

  setValue(value) {
    if (value < 0) value = 0;
    this._value = value;
    this._el.textContent = this._value;
  }

  getValue() {
    return this._value;
  }

  getScore() {
    let score = 0;
    let scoringDef = ScoringTable[this._key];
    let weighting = scoringDef.weighting;
    for (let func of scoringDef.scoringFuncs) {
      score += func(this._value) * weighting;
    }

    return score;
  }

  getWeighting() {
    let scoring = ScoringTable[this._key];
    return scoring.weighting;
  }

  handleAction(action) {
    if (action === this._incKey) {
      this.setValue(this._value + 1);
    } else if (action === this._decKey) {
      this.setValue(this._value - 1);
    }
  }
}
