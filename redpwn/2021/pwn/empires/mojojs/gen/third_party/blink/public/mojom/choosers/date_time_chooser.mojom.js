// third_party/blink/public/mojom/choosers/date_time_chooser.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/choosers/date_time_chooser.mojom';
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
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var ime_types$ =
      mojo.internal.exposeNamespace('ui.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/base/ime/mojom/ime_types.mojom', '../../../../../ui/base/ime/mojom/ime_types.mojom.js');
  }



  function DateTimeSuggestion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DateTimeSuggestion.prototype.initDefaults_ = function() {
    this.value = 0;
    this.localizedValue = null;
    this.label = null;
  };
  DateTimeSuggestion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DateTimeSuggestion.validate = function(messageValidator, offset) {
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



    // validate DateTimeSuggestion.localizedValue
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DateTimeSuggestion.label
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DateTimeSuggestion.encodedSize = codec.kStructHeaderSize + 24;

  DateTimeSuggestion.decode = function(decoder) {
    var packed;
    var val = new DateTimeSuggestion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value =
        decoder.decodeStruct(codec.Double);
    val.localizedValue =
        decoder.decodeStructPointer(string16$.String16);
    val.label =
        decoder.decodeStructPointer(string16$.String16);
    return val;
  };

  DateTimeSuggestion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DateTimeSuggestion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.value);
    encoder.encodeStructPointer(string16$.String16, val.localizedValue);
    encoder.encodeStructPointer(string16$.String16, val.label);
  };
  function DateTimeDialogValue(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DateTimeDialogValue.prototype.initDefaults_ = function() {
    this.dialogType = 0;
    this.dialogValue = 0;
    this.minimum = 0;
    this.maximum = 0;
    this.step = 0;
    this.suggestions = null;
  };
  DateTimeDialogValue.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DateTimeDialogValue.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DateTimeDialogValue.dialogType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ime_types$.TextInputType);
    if (err !== validator.validationError.NONE)
        return err;






    // validate DateTimeDialogValue.suggestions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.PointerTo(DateTimeSuggestion), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DateTimeDialogValue.encodedSize = codec.kStructHeaderSize + 48;

  DateTimeDialogValue.decode = function(decoder) {
    var packed;
    var val = new DateTimeDialogValue();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.dialogType =
        decoder.decodeStruct(new codec.Enum(ime_types$.TextInputType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.dialogValue =
        decoder.decodeStruct(codec.Double);
    val.minimum =
        decoder.decodeStruct(codec.Double);
    val.maximum =
        decoder.decodeStruct(codec.Double);
    val.step =
        decoder.decodeStruct(codec.Double);
    val.suggestions =
        decoder.decodeArrayPointer(new codec.PointerTo(DateTimeSuggestion));
    return val;
  };

  DateTimeDialogValue.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DateTimeDialogValue.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.dialogType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Double, val.dialogValue);
    encoder.encodeStruct(codec.Double, val.minimum);
    encoder.encodeStruct(codec.Double, val.maximum);
    encoder.encodeStruct(codec.Double, val.step);
    encoder.encodeArrayPointer(new codec.PointerTo(DateTimeSuggestion), val.suggestions);
  };
  function DateTimeChooser_OpenDateTimeDialog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DateTimeChooser_OpenDateTimeDialog_Params.prototype.initDefaults_ = function() {
    this.value = null;
  };
  DateTimeChooser_OpenDateTimeDialog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DateTimeChooser_OpenDateTimeDialog_Params.validate = function(messageValidator, offset) {
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


    // validate DateTimeChooser_OpenDateTimeDialog_Params.value
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DateTimeDialogValue, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DateTimeChooser_OpenDateTimeDialog_Params.encodedSize = codec.kStructHeaderSize + 8;

  DateTimeChooser_OpenDateTimeDialog_Params.decode = function(decoder) {
    var packed;
    var val = new DateTimeChooser_OpenDateTimeDialog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value =
        decoder.decodeStructPointer(DateTimeDialogValue);
    return val;
  };

  DateTimeChooser_OpenDateTimeDialog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DateTimeChooser_OpenDateTimeDialog_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DateTimeDialogValue, val.value);
  };
  function DateTimeChooser_OpenDateTimeDialog_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DateTimeChooser_OpenDateTimeDialog_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
    this.dialogValue = 0;
  };
  DateTimeChooser_OpenDateTimeDialog_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DateTimeChooser_OpenDateTimeDialog_ResponseParams.validate = function(messageValidator, offset) {
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



    return validator.validationError.NONE;
  };

  DateTimeChooser_OpenDateTimeDialog_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  DateTimeChooser_OpenDateTimeDialog_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new DateTimeChooser_OpenDateTimeDialog_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.dialogValue =
        decoder.decodeStruct(codec.Double);
    return val;
  };

  DateTimeChooser_OpenDateTimeDialog_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DateTimeChooser_OpenDateTimeDialog_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Double, val.dialogValue);
  };
  var kDateTimeChooser_OpenDateTimeDialog_Name = 0;

  function DateTimeChooserPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DateTimeChooser,
                                                   handleOrPtrInfo);
  }

  function DateTimeChooserAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DateTimeChooser, associatedInterfacePtrInfo);
  }

  DateTimeChooserAssociatedPtr.prototype =
      Object.create(DateTimeChooserPtr.prototype);
  DateTimeChooserAssociatedPtr.prototype.constructor =
      DateTimeChooserAssociatedPtr;

  function DateTimeChooserProxy(receiver) {
    this.receiver_ = receiver;
  }
  DateTimeChooserPtr.prototype.openDateTimeDialog = function() {
    return DateTimeChooserProxy.prototype.openDateTimeDialog
        .apply(this.ptr.getProxy(), arguments);
  };

  DateTimeChooserProxy.prototype.openDateTimeDialog = function(value) {
    var params_ = new DateTimeChooser_OpenDateTimeDialog_Params();
    params_.value = value;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDateTimeChooser_OpenDateTimeDialog_Name,
          codec.align(DateTimeChooser_OpenDateTimeDialog_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(DateTimeChooser_OpenDateTimeDialog_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(DateTimeChooser_OpenDateTimeDialog_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function DateTimeChooserStub(delegate) {
    this.delegate_ = delegate;
  }
  DateTimeChooserStub.prototype.openDateTimeDialog = function(value) {
    return this.delegate_ && this.delegate_.openDateTimeDialog && this.delegate_.openDateTimeDialog(value);
  }

  DateTimeChooserStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  DateTimeChooserStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDateTimeChooser_OpenDateTimeDialog_Name:
      var params = reader.decodeStruct(DateTimeChooser_OpenDateTimeDialog_Params);
      this.openDateTimeDialog(params.value).then(function(response) {
        var responseParams =
            new DateTimeChooser_OpenDateTimeDialog_ResponseParams();
        responseParams.success = response.success;
        responseParams.dialogValue = response.dialogValue;
        var builder = new codec.MessageV1Builder(
            kDateTimeChooser_OpenDateTimeDialog_Name,
            codec.align(DateTimeChooser_OpenDateTimeDialog_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(DateTimeChooser_OpenDateTimeDialog_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateDateTimeChooserRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDateTimeChooser_OpenDateTimeDialog_Name:
        if (message.expectsResponse())
          paramsClass = DateTimeChooser_OpenDateTimeDialog_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDateTimeChooserResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kDateTimeChooser_OpenDateTimeDialog_Name:
        if (message.isResponse())
          paramsClass = DateTimeChooser_OpenDateTimeDialog_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var DateTimeChooser = {
    name: 'blink.mojom.DateTimeChooser',
    kVersion: 0,
    ptrClass: DateTimeChooserPtr,
    proxyClass: DateTimeChooserProxy,
    stubClass: DateTimeChooserStub,
    validateRequest: validateDateTimeChooserRequest,
    validateResponse: validateDateTimeChooserResponse,
  };
  DateTimeChooserStub.prototype.validator = validateDateTimeChooserRequest;
  DateTimeChooserProxy.prototype.validator = validateDateTimeChooserResponse;
  exports.DateTimeSuggestion = DateTimeSuggestion;
  exports.DateTimeDialogValue = DateTimeDialogValue;
  exports.DateTimeChooser = DateTimeChooser;
  exports.DateTimeChooserPtr = DateTimeChooserPtr;
  exports.DateTimeChooserAssociatedPtr = DateTimeChooserAssociatedPtr;
})();