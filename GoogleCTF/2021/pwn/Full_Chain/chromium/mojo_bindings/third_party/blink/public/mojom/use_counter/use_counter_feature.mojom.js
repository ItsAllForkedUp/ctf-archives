// third_party/blink/public/mojom/use_counter/use_counter_feature.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/use_counter/use_counter_feature.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');


  var UseCounterFeatureType = {};
  UseCounterFeatureType.kWebFeature = 0;
  UseCounterFeatureType.kCssProperty = 1;
  UseCounterFeatureType.kAnimatedCssProperty = 2;
  UseCounterFeatureType.kPermissionsPolicyViolationEnforce = 3;
  UseCounterFeatureType.MIN_VALUE = 0;
  UseCounterFeatureType.MAX_VALUE = 3;

  UseCounterFeatureType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  UseCounterFeatureType.toKnownEnumValue = function(value) {
    return value;
  };

  UseCounterFeatureType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function UseCounterFeature(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UseCounterFeature.prototype.initDefaults_ = function() {
    this.type = 0;
    this.value = 0;
  };
  UseCounterFeature.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UseCounterFeature.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UseCounterFeature.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, UseCounterFeatureType);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  UseCounterFeature.encodedSize = codec.kStructHeaderSize + 8;

  UseCounterFeature.decode = function(decoder) {
    var packed;
    var val = new UseCounterFeature();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(new codec.Enum(UseCounterFeatureType));
    val.value =
        decoder.decodeStruct(codec.Uint32);
    return val;
  };

  UseCounterFeature.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UseCounterFeature.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Uint32, val.value);
  };
  exports.UseCounterFeatureType = UseCounterFeatureType;
  exports.UseCounterFeature = UseCounterFeature;
})();