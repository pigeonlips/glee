
var TabManagerView = Backbone.View.extend({
  events: {
    'click .set-default-shortcut-key': '_setDefaultShortcutKey',
    'click .set-default-shortcut-word': '_setDefaultShortcutWord'
  },

  initialize: function() {
    this._defaultKeyCode = 190;

    this._initializeCheckboxViews();
    this._initializeTextboxViews();
  },

  _initializeCheckboxViews: function() {
    var $checkbox = $('.checkbox', this.$el);

    _.each($checkbox, function(el) {
      var view = new CheckboxView({
        el: $(el)
      });
    });
  },

  _initializeTextboxViews: function() {
    var $text = $('.textbox', this.$el);

    _.each($text, function(el) {
      var view = new TextboxView({
        el: $(el)
      });
    });
  },

  _setDefaultShortcutKey: function() {
    var $el = $('.shortcut-key', this.$el),
      $keyCode = $('.shortcut-key-code', this.$el);

    $el.attr('value', '.').keyup();

    $keyCode.text(this._defaultKeyCode);
    saveOption('tabManagerShortcutKey', this._defaultKeyCode);
  },

  _setDefaultShortcutWord: function(e) {
    var $el, value;

    e.preventDefault();

    $el = $(e.target);
    value = $el.data('value');


    $('#tabManagerShortcutWord').attr('value', value);
    saveOption('tabManagerShortcutWord', value);
  }
});
