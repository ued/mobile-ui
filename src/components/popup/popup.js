var Eventor = require('../../libs/eventor')
var F_tap = require('./tap')
var PickerDialog = function (option) {
  this.params = {}
  if (Object.prototype.toString.call(option) === '[object Object]') {
    this.params = {
      input: option.input || '',
      container: document.querySelector(option.input) || '',
      innerHTML: option.innerHTML || '',
      onOpen: option.onOpen || function () {},
      onClose: option.onClose || function () {}
    }
  }
  if (!!document.querySelectorAll('.popup-mask').length <= 0) {
    this.divMask = document.createElement('a')
    this.divMask.className = 'popup-mask'
    this.divMask.href = 'javascript:void(0)'
    document.body.appendChild(this.divMask)
  }
  var div
  if (!option.container) {
    div = document.createElement('div')
  } else {
    div = option.container
  }
  div.className = 'popup-dialog'

  if (!option.container) {
    document.body.appendChild(div)
  }
  this.mask = document.querySelector('.popup-mask')
  this.container = document.querySelectorAll('.popup-dialog')
  this.container = this.container[this.container.length - 1]
  this._bindEvents()
  option = null
  return this
}

Eventor.mixTo(PickerDialog)
PickerDialog.prototype.updateInputPosition = function () {
  this._hackInputFocus()
}

PickerDialog.prototype._bindEvents = function () {
  var _this = this

  function triggerClick (e) {
    _this.hide()
    _this.emit('close')
  }
  F_tap.tap(this.mask, triggerClick)
  this.container.addEventListener('touchmove', function (e) {
    e.stopPropagation()
    e.preventDefault()
    return false
  }, false)
  return this
}

PickerDialog.prototype.show = function () {
  var _this = this
  _this.mask.classList.add('show')
  _this.params.onOpen && _this.params.onOpen(this)
  return this
}

PickerDialog.prototype.hide = function () {
  var _this = this
  _this.mask.classList.remove('show')
  _this.params.onClose && _this.params.onClose(this)
  return this
}

PickerDialog.prototype.html = function (html) {
  this.container.innerHTML = html
  return this
}

PickerDialog.prototype.destroy = function () {
  this.mask && this.mask.parentNode && this.mask.parentNode.removeChild(this.mask)
}

module.exports = PickerDialog
