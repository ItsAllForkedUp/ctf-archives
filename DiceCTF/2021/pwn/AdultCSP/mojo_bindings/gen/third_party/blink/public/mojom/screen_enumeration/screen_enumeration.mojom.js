// third_party/blink/public/mojom/screen_enumeration/screen_enumeration.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/screen_enumeration/screen_enumeration.mojom';
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
  var display$ =
      mojo.internal.exposeNamespace('display.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/display/mojom/display.mojom', '../../../../../ui/display/mojom/display.mojom.js');
  }


  var MultipleDisplays = {};
  MultipleDisplays.kFalse = 0;
  MultipleDisplays.kTrue = 1;
  MultipleDisplays.kError = 2;
  MultipleDisplays.MIN_VALUE = 0,
  MultipleDisplays.MAX_VALUE = 2,

  MultipleDisplays.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  MultipleDisplays.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function Displays(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Displays.prototype.initDefaults_ = function() {
    this.displays = null;
    this.internalId = 0;
    this.primaryId = 0;
  };
  Displays.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Displays.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Displays.displays
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(display$.Display), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  Displays.encodedSize = codec.kStructHeaderSize + 24;

  Displays.decode = function(decoder) {
    var packed;
    var val = new Displays();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.displays =
        decoder.decodeArrayPointer(new codec.PointerTo(display$.Display));
    val.internalId =
        decoder.decodeStruct(codec.Int64);
    val.primaryId =
        decoder.decodeStruct(codec.Int64);
    return val;
  };

  Displays.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Displays.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(display$.Display), val.displays);
    encoder.encodeStruct(codec.Int64, val.internalId);
    encoder.encodeStruct(codec.Int64, val.primaryId);
  };
  function ScreenEnumeration_GetDisplays_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ScreenEnumeration_GetDisplays_Params.prototype.initDefaults_ = function() {
  };
  ScreenEnumeration_GetDisplays_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ScreenEnumeration_GetDisplays_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ScreenEnumeration_GetDisplays_Params.encodedSize = codec.kStructHeaderSize + 0;

  ScreenEnumeration_GetDisplays_Params.decode = function(decoder) {
    var packed;
    var val = new ScreenEnumeration_GetDisplays_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ScreenEnumeration_GetDisplays_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ScreenEnumeration_GetDisplays_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ScreenEnumeration_GetDisplays_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ScreenEnumeration_GetDisplays_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  ScreenEnumeration_GetDisplays_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ScreenEnumeration_GetDisplays_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ScreenEnumeration_GetDisplays_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Displays, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ScreenEnumeration_GetDisplays_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ScreenEnumeration_GetDisplays_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ScreenEnumeration_GetDisplays_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(Displays);
    return val;
  };

  ScreenEnumeration_GetDisplays_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ScreenEnumeration_GetDisplays_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Displays, val.result);
  };
  function ScreenEnumeration_HasMultipleDisplays_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ScreenEnumeration_HasMultipleDisplays_Params.prototype.initDefaults_ = function() {
  };
  ScreenEnumeration_HasMultipleDisplays_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ScreenEnumeration_HasMultipleDisplays_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ScreenEnumeration_HasMultipleDisplays_Params.encodedSize = codec.kStructHeaderSize + 0;

  ScreenEnumeration_HasMultipleDisplays_Params.decode = function(decoder) {
    var packed;
    var val = new ScreenEnumeration_HasMultipleDisplays_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ScreenEnumeration_HasMultipleDisplays_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ScreenEnumeration_HasMultipleDisplays_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ScreenEnumeration_HasMultipleDisplays_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ScreenEnumeration_HasMultipleDisplays_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  ScreenEnumeration_HasMultipleDisplays_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ScreenEnumeration_HasMultipleDisplays_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ScreenEnumeration_HasMultipleDisplays_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, MultipleDisplays);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ScreenEnumeration_HasMultipleDisplays_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ScreenEnumeration_HasMultipleDisplays_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ScreenEnumeration_HasMultipleDisplays_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ScreenEnumeration_HasMultipleDisplays_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ScreenEnumeration_HasMultipleDisplays_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kScreenEnumeration_GetDisplays_Name = 0;
  var kScreenEnumeration_HasMultipleDisplays_Name = 1;

  function ScreenEnumerationPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ScreenEnumeration,
                                                   handleOrPtrInfo);
  }

  function ScreenEnumerationAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ScreenEnumeration, associatedInterfacePtrInfo);
  }

  ScreenEnumerationAssociatedPtr.prototype =
      Object.create(ScreenEnumerationPtr.prototype);
  ScreenEnumerationAssociatedPtr.prototype.constructor =
      ScreenEnumerationAssociatedPtr;

  function ScreenEnumerationProxy(receiver) {
    this.receiver_ = receiver;
  }
  ScreenEnumerationPtr.prototype.getDisplays = function() {
    return ScreenEnumerationProxy.prototype.getDisplays
        .apply(this.ptr.getProxy(), arguments);
  };

  ScreenEnumerationProxy.prototype.getDisplays = function() {
    var params_ = new ScreenEnumeration_GetDisplays_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kScreenEnumeration_GetDisplays_Name,
          codec.align(ScreenEnumeration_GetDisplays_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ScreenEnumeration_GetDisplays_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ScreenEnumeration_GetDisplays_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ScreenEnumerationPtr.prototype.hasMultipleDisplays = function() {
    return ScreenEnumerationProxy.prototype.hasMultipleDisplays
        .apply(this.ptr.getProxy(), arguments);
  };

  ScreenEnumerationProxy.prototype.hasMultipleDisplays = function() {
    var params_ = new ScreenEnumeration_HasMultipleDisplays_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kScreenEnumeration_HasMultipleDisplays_Name,
          codec.align(ScreenEnumeration_HasMultipleDisplays_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ScreenEnumeration_HasMultipleDisplays_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ScreenEnumeration_HasMultipleDisplays_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ScreenEnumerationStub(delegate) {
    this.delegate_ = delegate;
  }
  ScreenEnumerationStub.prototype.getDisplays = function() {
    return this.delegate_ && this.delegate_.getDisplays && this.delegate_.getDisplays();
  }
  ScreenEnumerationStub.prototype.hasMultipleDisplays = function() {
    return this.delegate_ && this.delegate_.hasMultipleDisplays && this.delegate_.hasMultipleDisplays();
  }

  ScreenEnumerationStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ScreenEnumerationStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kScreenEnumeration_GetDisplays_Name:
      var params = reader.decodeStruct(ScreenEnumeration_GetDisplays_Params);
      this.getDisplays().then(function(response) {
        var responseParams =
            new ScreenEnumeration_GetDisplays_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kScreenEnumeration_GetDisplays_Name,
            codec.align(ScreenEnumeration_GetDisplays_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ScreenEnumeration_GetDisplays_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kScreenEnumeration_HasMultipleDisplays_Name:
      var params = reader.decodeStruct(ScreenEnumeration_HasMultipleDisplays_Params);
      this.hasMultipleDisplays().then(function(response) {
        var responseParams =
            new ScreenEnumeration_HasMultipleDisplays_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kScreenEnumeration_HasMultipleDisplays_Name,
            codec.align(ScreenEnumeration_HasMultipleDisplays_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ScreenEnumeration_HasMultipleDisplays_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateScreenEnumerationRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kScreenEnumeration_GetDisplays_Name:
        if (message.expectsResponse())
          paramsClass = ScreenEnumeration_GetDisplays_Params;
      break;
      case kScreenEnumeration_HasMultipleDisplays_Name:
        if (message.expectsResponse())
          paramsClass = ScreenEnumeration_HasMultipleDisplays_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateScreenEnumerationResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kScreenEnumeration_GetDisplays_Name:
        if (message.isResponse())
          paramsClass = ScreenEnumeration_GetDisplays_ResponseParams;
        break;
      case kScreenEnumeration_HasMultipleDisplays_Name:
        if (message.isResponse())
          paramsClass = ScreenEnumeration_HasMultipleDisplays_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ScreenEnumeration = {
    name: 'blink.mojom.ScreenEnumeration',
    kVersion: 0,
    ptrClass: ScreenEnumerationPtr,
    proxyClass: ScreenEnumerationProxy,
    stubClass: ScreenEnumerationStub,
    validateRequest: validateScreenEnumerationRequest,
    validateResponse: validateScreenEnumerationResponse,
  };
  ScreenEnumerationStub.prototype.validator = validateScreenEnumerationRequest;
  ScreenEnumerationProxy.prototype.validator = validateScreenEnumerationResponse;
  exports.MultipleDisplays = MultipleDisplays;
  exports.Displays = Displays;
  exports.ScreenEnumeration = ScreenEnumeration;
  exports.ScreenEnumerationPtr = ScreenEnumerationPtr;
  exports.ScreenEnumerationAssociatedPtr = ScreenEnumerationAssociatedPtr;
})();