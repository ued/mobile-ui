var Eventor = require('../../libs/eventor')
var PickerDialog = function (option) {
  this.params = {}
  if (Object.prototype.toString.call(option) === '[object Object]') {
    this.params = {
      input: option.input || '',
      container: option.container || '',
      innerHTML: option.innerHTML || '',
      onOpen: option.onOpen || function () {},
      onClose: option.onClose || function () {}
    }
  }

  this.container = option.container
  // this._bindEvents()
  option = null
  return this
}

Eventor.mixTo(PickerDialog)
PickerDialog.prototype.updateInputPosition = function () {
  this._hackInputFocus()
}

PickerDialog.prototype._bindEvents = function () {
  this.container.addEventListener('touchmove', function (e) {
    e.stopPropagation()
    e.preventDefault()
    return false
  }, false)
  return this
}

PickerDialog.prototype.show = function () {
  var _this = this
  _this.params.onOpen && _this.params.onOpen(this)
  return this
}

PickerDialog.prototype.hide = function () {
  var _this = this
  _this.params.onClose && _this.params.onClose(this)
  return this
}

PickerDialog.prototype.html = function (html) {
  this.container.innerHTML = html
  return this
}

module.exports = PickerDialog
