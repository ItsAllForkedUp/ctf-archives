// mojo/public/interfaces/bindings/native_struct.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/interfaces/bindings/native_struct.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojo.native');


  var SerializedHandleType = {};
  SerializedHandleType.MOJO_HANDLE = 0;
  SerializedHandleType.PLATFORM_FILE = 1;
  SerializedHandleType.WIN_HANDLE = 2;
  SerializedHandleType.MACH_PORT = 3;
  SerializedHandleType.FUCHSIA_HANDLE = 4;
  SerializedHandleType.MIN_VALUE = 0;
  SerializedHandleType.MAX_VALUE = 4;

  SerializedHandleType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  SerializedHandleType.toKnownEnumValue = function(value) {
    return value;
  };

  SerializedHandleType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SerializedHandle(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SerializedHandle.prototype.initDefaults_ = function() {
    this.theHandle = null;
    this.type = 0;
  };
  SerializedHandle.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SerializedHandle.validate = function(messageValidator, offset) {
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


    // validate SerializedHandle.theHandle
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SerializedHandle.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, SerializedHandleType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SerializedHandle.encodedSize = codec.kStructHeaderSize + 8;

  SerializedHandle.decode = function(decoder) {
    var packed;
    var val = new SerializedHandle();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.theHandle =
        decoder.decodeStruct(codec.Handle);
    val.type =
        decoder.decodeStruct(new codec.Enum(SerializedHandleType));
    return val;
  };

  SerializedHandle.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SerializedHandle.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.theHandle);
    encoder.encodeStruct(codec.Int32, val.type);
  };
  function NativeStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeStruct.prototype.initDefaults_ = function() {
    this.data = null;
    this.handles = null;
  };
  NativeStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeStruct.validate = function(messageValidator, offset) {
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


    // validate NativeStruct.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeStruct.handles
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(SerializedHandle), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeStruct.encodedSize = codec.kStructHeaderSize + 16;

  NativeStruct.decode = function(decoder) {
    var packed;
    var val = new NativeStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeArrayPointer(codec.Uint8);
    val.handles =
        decoder.decodeArrayPointer(new codec.PointerTo(SerializedHandle));
    return val;
  };

  NativeStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
    encoder.encodeArrayPointer(new codec.PointerTo(SerializedHandle), val.handles);
  };
  exports.SerializedHandleType = SerializedHandleType;
  exports.SerializedHandle = SerializedHandle;
  exports.NativeStruct = NativeStruct;
})();