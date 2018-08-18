class OfficeMonitor {
  constructor() {
    this._widgets = this._initialiseWidgets();

    this._moodEl = document.querySelector('#mood .content');

    this._server = new Server();
    this._server.requestInitialState(Array.from(this._widgets.keys())).then(data => this._processInitialState(data));
  }

  _initialiseWidgets() {
    let widgets = new Map();

    widgets.set('fridge', new Widget('fridge', 'put', 'take'));
    widgets.set('coffee', new Widget('coffee', 'drink', 'buy'));
    widgets.set('temp', new Widget('temp', 'up', 'down'));

    return widgets;
  }

  _processInitialState(state) {
    for (let key in state) {
      if (this._widgets.has(key)) {
        this._widgets.get(key).setValue(state[key]);
      }
    }

    this._updateMood();

    // now we can listen for updates
    this._server.addListener(this);
  }

  _updateMood(event) {
    // assess all the criteria and work out a mood score
    let score = 0;
    let totalWeighting = 0;
    for (var [key, item] of this._widgets) {
      score += item.getScore();
      totalWeighting += item.getWeighting();
    }

    score = score / totalWeighting;
    let index = Math.ceil(score / 100 * OfficeMonitor.MOODS().length) - 1;
    if (index < 1) index = 0;

    this._moodEl.innerHTML = OfficeMonitor.MOODS()[index];
  }

  handleEvent(event) {
    this._widgets.get(event.id).handleAction(event.action);

    this._updateMood();
  }

  static MOODS() {
    return ['&#9889;', '&#9729;', '&#9748;', '&#9730;', '&#9788;']; // higher the mood = happier
  }
}

new OfficeMonitor();
