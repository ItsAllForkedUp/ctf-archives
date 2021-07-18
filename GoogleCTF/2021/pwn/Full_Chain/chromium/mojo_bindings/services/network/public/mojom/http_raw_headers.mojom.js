// services/network/public/mojom/http_raw_headers.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/http_raw_headers.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');



  function HttpRawHeaderPair(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpRawHeaderPair.prototype.initDefaults_ = function() {
    this.key = null;
    this.value = null;
  };
  HttpRawHeaderPair.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpRawHeaderPair.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate HttpRawHeaderPair.key
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate HttpRawHeaderPair.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HttpRawHeaderPair.encodedSize = codec.kStructHeaderSize + 16;

  HttpRawHeaderPair.decode = function(decoder) {
    var packed;
    var val = new HttpRawHeaderPair();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key =
        decoder.decodeStruct(codec.String);
    val.value =
        decoder.decodeStruct(codec.String);
    return val;
  };

  HttpRawHeaderPair.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpRawHeaderPair.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.key);
    encoder.encodeStruct(codec.String, val.value);
  };
  exports.HttpRawHeaderPair = HttpRawHeaderPair;
})();