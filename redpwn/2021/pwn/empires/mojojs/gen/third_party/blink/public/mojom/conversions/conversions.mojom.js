// third_party/blink/public/mojom/conversions/conversions.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/conversions/conversions.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../../url/mojom/origin.mojom.js');
  }


  var RegisterImpressionError = {};
  RegisterImpressionError.kNotAllowed = 0;
  RegisterImpressionError.kInsecureContext = 1;
  RegisterImpressionError.kInsecureAttributionDestination = 2;
  RegisterImpressionError.kInsecureAttributionReportTo = 3;
  RegisterImpressionError.kInvalidAttributionSourceEventId = 4;
  RegisterImpressionError.MIN_VALUE = 0;
  RegisterImpressionError.MAX_VALUE = 4;

  RegisterImpressionError.isKnownEnumValue = function(value) {
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

  RegisterImpressionError.toKnownEnumValue = function(value) {
    return value;
  };

  RegisterImpressionError.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function Conversion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Conversion.prototype.initDefaults_ = function() {
    this.reportingOrigin = null;
    this.conversionData = 0;
    this.eventSourceTriggerData = 0;
  };
  Conversion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Conversion.validate = function(messageValidator, offset) {
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


    // validate Conversion.reportingOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  Conversion.encodedSize = codec.kStructHeaderSize + 24;

  Conversion.decode = function(decoder) {
    var packed;
    var val = new Conversion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reportingOrigin =
        decoder.decodeStructPointer(origin$.Origin);
    val.conversionData =
        decoder.decodeStruct(codec.Uint64);
    val.eventSourceTriggerData =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  Conversion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Conversion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.reportingOrigin);
    encoder.encodeStruct(codec.Uint64, val.conversionData);
    encoder.encodeStruct(codec.Uint64, val.eventSourceTriggerData);
  };
  function Impression(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Impression.prototype.initDefaults_ = function() {
    this.conversionDestination = null;
    this.reportingOrigin = null;
    this.impressionData = 0;
    this.expiry = null;
    this.priority = 0;
  };
  Impression.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Impression.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Impression.conversionDestination
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Impression.reportingOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate Impression.expiry
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.TimeDelta, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Impression.encodedSize = codec.kStructHeaderSize + 40;

  Impression.decode = function(decoder) {
    var packed;
    var val = new Impression();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.conversionDestination =
        decoder.decodeStructPointer(origin$.Origin);
    val.reportingOrigin =
        decoder.decodeStructPointer(origin$.Origin);
    val.impressionData =
        decoder.decodeStruct(codec.Uint64);
    val.expiry =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.priority =
        decoder.decodeStruct(codec.Int64);
    return val;
  };

  Impression.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Impression.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.conversionDestination);
    encoder.encodeStructPointer(origin$.Origin, val.reportingOrigin);
    encoder.encodeStruct(codec.Uint64, val.impressionData);
    encoder.encodeStructPointer(time$.TimeDelta, val.expiry);
    encoder.encodeStruct(codec.Int64, val.priority);
  };
  function ConversionHost_RegisterConversion_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConversionHost_RegisterConversion_Params.prototype.initDefaults_ = function() {
    this.conversion = null;
  };
  ConversionHost_RegisterConversion_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConversionHost_RegisterConversion_Params.validate = function(messageValidator, offset) {
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


    // validate ConversionHost_RegisterConversion_Params.conversion
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Conversion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConversionHost_RegisterConversion_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConversionHost_RegisterConversion_Params.decode = function(decoder) {
    var packed;
    var val = new ConversionHost_RegisterConversion_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.conversion =
        decoder.decodeStructPointer(Conversion);
    return val;
  };

  ConversionHost_RegisterConversion_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConversionHost_RegisterConversion_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Conversion, val.conversion);
  };
  function ConversionHost_RegisterImpression_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConversionHost_RegisterImpression_Params.prototype.initDefaults_ = function() {
    this.impression = null;
  };
  ConversionHost_RegisterImpression_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConversionHost_RegisterImpression_Params.validate = function(messageValidator, offset) {
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


    // validate ConversionHost_RegisterImpression_Params.impression
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Impression, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConversionHost_RegisterImpression_Params.encodedSize = codec.kStructHeaderSize + 8;

  ConversionHost_RegisterImpression_Params.decode = function(decoder) {
    var packed;
    var val = new ConversionHost_RegisterImpression_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.impression =
        decoder.decodeStructPointer(Impression);
    return val;
  };

  ConversionHost_RegisterImpression_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConversionHost_RegisterImpression_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Impression, val.impression);
  };
  var kConversionHost_RegisterConversion_Name = 0;
  var kConversionHost_RegisterImpression_Name = 1;

  function ConversionHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ConversionHost,
                                                   handleOrPtrInfo);
  }

  function ConversionHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ConversionHost, associatedInterfacePtrInfo);
  }

  ConversionHostAssociatedPtr.prototype =
      Object.create(ConversionHostPtr.prototype);
  ConversionHostAssociatedPtr.prototype.constructor =
      ConversionHostAssociatedPtr;

  function ConversionHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  ConversionHostPtr.prototype.registerConversion = function() {
    return ConversionHostProxy.prototype.registerConversion
        .apply(this.ptr.getProxy(), arguments);
  };

  ConversionHostProxy.prototype.registerConversion = function(conversion) {
    var params_ = new ConversionHost_RegisterConversion_Params();
    params_.conversion = conversion;
    var builder = new codec.MessageV0Builder(
        kConversionHost_RegisterConversion_Name,
        codec.align(ConversionHost_RegisterConversion_Params.encodedSize));
    builder.encodeStruct(ConversionHost_RegisterConversion_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ConversionHostPtr.prototype.registerImpression = function() {
    return ConversionHostProxy.prototype.registerImpression
        .apply(this.ptr.getProxy(), arguments);
  };

  ConversionHostProxy.prototype.registerImpression = function(impression) {
    var params_ = new ConversionHost_RegisterImpression_Params();
    params_.impression = impression;
    var builder = new codec.MessageV0Builder(
        kConversionHost_RegisterImpression_Name,
        codec.align(ConversionHost_RegisterImpression_Params.encodedSize));
    builder.encodeStruct(ConversionHost_RegisterImpression_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ConversionHostStub(delegate) {
    this.delegate_ = delegate;
  }
  ConversionHostStub.prototype.registerConversion = function(conversion) {
    return this.delegate_ && this.delegate_.registerConversion && this.delegate_.registerConversion(conversion);
  }
  ConversionHostStub.prototype.registerImpression = function(impression) {
    return this.delegate_ && this.delegate_.registerImpression && this.delegate_.registerImpression(impression);
  }

  ConversionHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kConversionHost_RegisterConversion_Name:
      var params = reader.decodeStruct(ConversionHost_RegisterConversion_Params);
      this.registerConversion(params.conversion);
      return true;
    case kConversionHost_RegisterImpression_Name:
      var params = reader.decodeStruct(ConversionHost_RegisterImpression_Params);
      this.registerImpression(params.impression);
      return true;
    default:
      return false;
    }
  };

  ConversionHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateConversionHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kConversionHost_RegisterConversion_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConversionHost_RegisterConversion_Params;
      break;
      case kConversionHost_RegisterImpression_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ConversionHost_RegisterImpression_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateConversionHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ConversionHost = {
    name: 'blink.mojom.ConversionHost',
    kVersion: 0,
    ptrClass: ConversionHostPtr,
    proxyClass: ConversionHostProxy,
    stubClass: ConversionHostStub,
    validateRequest: validateConversionHostRequest,
    validateResponse: null,
  };
  ConversionHostStub.prototype.validator = validateConversionHostRequest;
  ConversionHostProxy.prototype.validator = null;
  exports.RegisterImpressionError = RegisterImpressionError;
  exports.Conversion = Conversion;
  exports.Impression = Impression;
  exports.ConversionHost = ConversionHost;
  exports.ConversionHostPtr = ConversionHostPtr;
  exports.ConversionHostAssociatedPtr = ConversionHostAssociatedPtr;
})();