// services/device/public/mojom/usb_manager_test.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/usb_manager_test.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }



  function TestDeviceInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestDeviceInfo.prototype.initDefaults_ = function() {
    this.guid = null;
    this.name = null;
    this.serialNumber = null;
    this.landingPage = null;
  };
  TestDeviceInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestDeviceInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestDeviceInfo.guid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestDeviceInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestDeviceInfo.serialNumber
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestDeviceInfo.landingPage
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TestDeviceInfo.encodedSize = codec.kStructHeaderSize + 32;

  TestDeviceInfo.decode = function(decoder) {
    var packed;
    var val = new TestDeviceInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.guid =
        decoder.decodeStruct(codec.String);
    val.name =
        decoder.decodeStruct(codec.String);
    val.serialNumber =
        decoder.decodeStruct(codec.String);
    val.landingPage =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  TestDeviceInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestDeviceInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.guid);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.serialNumber);
    encoder.encodeStructPointer(url$.Url, val.landingPage);
  };
  function UsbDeviceManagerTest_AddDeviceForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManagerTest_AddDeviceForTesting_Params.prototype.initDefaults_ = function() {
    this.name = null;
    this.serialNumber = null;
    this.landingPage = null;
  };
  UsbDeviceManagerTest_AddDeviceForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManagerTest_AddDeviceForTesting_Params.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManagerTest_AddDeviceForTesting_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManagerTest_AddDeviceForTesting_Params.serialNumber
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UsbDeviceManagerTest_AddDeviceForTesting_Params.landingPage
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManagerTest_AddDeviceForTesting_Params.encodedSize = codec.kStructHeaderSize + 24;

  UsbDeviceManagerTest_AddDeviceForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManagerTest_AddDeviceForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name =
        decoder.decodeStruct(codec.String);
    val.serialNumber =
        decoder.decodeStruct(codec.String);
    val.landingPage =
        decoder.decodeStruct(codec.String);
    return val;
  };

  UsbDeviceManagerTest_AddDeviceForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManagerTest_AddDeviceForTesting_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.serialNumber);
    encoder.encodeStruct(codec.String, val.landingPage);
  };
  function UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
    this.message = null;
  };
  UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams.validate = function(messageValidator, offset) {
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



    // validate UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams();
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
    val.message =
        decoder.decodeStruct(codec.String);
    return val;
  };

  UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams.encodedSize);
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
    encoder.encodeStruct(codec.String, val.message);
  };
  function UsbDeviceManagerTest_RemoveDeviceForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManagerTest_RemoveDeviceForTesting_Params.prototype.initDefaults_ = function() {
    this.guid = null;
  };
  UsbDeviceManagerTest_RemoveDeviceForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManagerTest_RemoveDeviceForTesting_Params.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManagerTest_RemoveDeviceForTesting_Params.guid
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManagerTest_RemoveDeviceForTesting_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManagerTest_RemoveDeviceForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManagerTest_RemoveDeviceForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.guid =
        decoder.decodeStruct(codec.String);
    return val;
  };

  UsbDeviceManagerTest_RemoveDeviceForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManagerTest_RemoveDeviceForTesting_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.guid);
  };
  function UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams.prototype.initDefaults_ = function() {
  };
  UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams.validate = function(messageValidator, offset) {
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

  UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function UsbDeviceManagerTest_GetTestDevices_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManagerTest_GetTestDevices_Params.prototype.initDefaults_ = function() {
  };
  UsbDeviceManagerTest_GetTestDevices_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManagerTest_GetTestDevices_Params.validate = function(messageValidator, offset) {
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

  UsbDeviceManagerTest_GetTestDevices_Params.encodedSize = codec.kStructHeaderSize + 0;

  UsbDeviceManagerTest_GetTestDevices_Params.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManagerTest_GetTestDevices_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  UsbDeviceManagerTest_GetTestDevices_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManagerTest_GetTestDevices_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function UsbDeviceManagerTest_GetTestDevices_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbDeviceManagerTest_GetTestDevices_ResponseParams.prototype.initDefaults_ = function() {
    this.devices = null;
  };
  UsbDeviceManagerTest_GetTestDevices_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbDeviceManagerTest_GetTestDevices_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate UsbDeviceManagerTest_GetTestDevices_ResponseParams.devices
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(TestDeviceInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbDeviceManagerTest_GetTestDevices_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  UsbDeviceManagerTest_GetTestDevices_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UsbDeviceManagerTest_GetTestDevices_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.devices =
        decoder.decodeArrayPointer(new codec.PointerTo(TestDeviceInfo));
    return val;
  };

  UsbDeviceManagerTest_GetTestDevices_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbDeviceManagerTest_GetTestDevices_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(TestDeviceInfo), val.devices);
  };
  var kUsbDeviceManagerTest_AddDeviceForTesting_Name = 757175409;
  var kUsbDeviceManagerTest_RemoveDeviceForTesting_Name = 1772660012;
  var kUsbDeviceManagerTest_GetTestDevices_Name = 539324625;

  function UsbDeviceManagerTestPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(UsbDeviceManagerTest,
                                                   handleOrPtrInfo);
  }

  function UsbDeviceManagerTestAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        UsbDeviceManagerTest, associatedInterfacePtrInfo);
  }

  UsbDeviceManagerTestAssociatedPtr.prototype =
      Object.create(UsbDeviceManagerTestPtr.prototype);
  UsbDeviceManagerTestAssociatedPtr.prototype.constructor =
      UsbDeviceManagerTestAssociatedPtr;

  function UsbDeviceManagerTestProxy(receiver) {
    this.receiver_ = receiver;
  }
  UsbDeviceManagerTestPtr.prototype.addDeviceForTesting = function() {
    return UsbDeviceManagerTestProxy.prototype.addDeviceForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerTestProxy.prototype.addDeviceForTesting = function(name, serialNumber, landingPage) {
    var params_ = new UsbDeviceManagerTest_AddDeviceForTesting_Params();
    params_.name = name;
    params_.serialNumber = serialNumber;
    params_.landingPage = landingPage;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kUsbDeviceManagerTest_AddDeviceForTesting_Name,
          codec.align(UsbDeviceManagerTest_AddDeviceForTesting_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UsbDeviceManagerTest_AddDeviceForTesting_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UsbDeviceManagerTestPtr.prototype.removeDeviceForTesting = function() {
    return UsbDeviceManagerTestProxy.prototype.removeDeviceForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerTestProxy.prototype.removeDeviceForTesting = function(guid) {
    var params_ = new UsbDeviceManagerTest_RemoveDeviceForTesting_Params();
    params_.guid = guid;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kUsbDeviceManagerTest_RemoveDeviceForTesting_Name,
          codec.align(UsbDeviceManagerTest_RemoveDeviceForTesting_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UsbDeviceManagerTest_RemoveDeviceForTesting_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UsbDeviceManagerTestPtr.prototype.getTestDevices = function() {
    return UsbDeviceManagerTestProxy.prototype.getTestDevices
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbDeviceManagerTestProxy.prototype.getTestDevices = function() {
    var params_ = new UsbDeviceManagerTest_GetTestDevices_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kUsbDeviceManagerTest_GetTestDevices_Name,
          codec.align(UsbDeviceManagerTest_GetTestDevices_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UsbDeviceManagerTest_GetTestDevices_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UsbDeviceManagerTest_GetTestDevices_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function UsbDeviceManagerTestStub(delegate) {
    this.delegate_ = delegate;
  }
  UsbDeviceManagerTestStub.prototype.addDeviceForTesting = function(name, serialNumber, landingPage) {
    return this.delegate_ && this.delegate_.addDeviceForTesting && this.delegate_.addDeviceForTesting(name, serialNumber, landingPage);
  }
  UsbDeviceManagerTestStub.prototype.removeDeviceForTesting = function(guid) {
    return this.delegate_ && this.delegate_.removeDeviceForTesting && this.delegate_.removeDeviceForTesting(guid);
  }
  UsbDeviceManagerTestStub.prototype.getTestDevices = function() {
    return this.delegate_ && this.delegate_.getTestDevices && this.delegate_.getTestDevices();
  }

  UsbDeviceManagerTestStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  UsbDeviceManagerTestStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUsbDeviceManagerTest_AddDeviceForTesting_Name:
      var params = reader.decodeStruct(UsbDeviceManagerTest_AddDeviceForTesting_Params);
      this.addDeviceForTesting(params.name, params.serialNumber, params.landingPage).then(function(response) {
        var responseParams =
            new UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams();
        responseParams.success = response.success;
        responseParams.message = response.message;
        var builder = new codec.MessageV1Builder(
            kUsbDeviceManagerTest_AddDeviceForTesting_Name,
            codec.align(UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kUsbDeviceManagerTest_RemoveDeviceForTesting_Name:
      var params = reader.decodeStruct(UsbDeviceManagerTest_RemoveDeviceForTesting_Params);
      this.removeDeviceForTesting(params.guid).then(function(response) {
        var responseParams =
            new UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kUsbDeviceManagerTest_RemoveDeviceForTesting_Name,
            codec.align(UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kUsbDeviceManagerTest_GetTestDevices_Name:
      var params = reader.decodeStruct(UsbDeviceManagerTest_GetTestDevices_Params);
      this.getTestDevices().then(function(response) {
        var responseParams =
            new UsbDeviceManagerTest_GetTestDevices_ResponseParams();
        responseParams.devices = response.devices;
        var builder = new codec.MessageV1Builder(
            kUsbDeviceManagerTest_GetTestDevices_Name,
            codec.align(UsbDeviceManagerTest_GetTestDevices_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UsbDeviceManagerTest_GetTestDevices_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateUsbDeviceManagerTestRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUsbDeviceManagerTest_AddDeviceForTesting_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManagerTest_AddDeviceForTesting_Params;
      break;
      case kUsbDeviceManagerTest_RemoveDeviceForTesting_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManagerTest_RemoveDeviceForTesting_Params;
      break;
      case kUsbDeviceManagerTest_GetTestDevices_Name:
        if (message.expectsResponse())
          paramsClass = UsbDeviceManagerTest_GetTestDevices_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUsbDeviceManagerTestResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kUsbDeviceManagerTest_AddDeviceForTesting_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams;
        break;
      case kUsbDeviceManagerTest_RemoveDeviceForTesting_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams;
        break;
      case kUsbDeviceManagerTest_GetTestDevices_Name:
        if (message.isResponse())
          paramsClass = UsbDeviceManagerTest_GetTestDevices_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var UsbDeviceManagerTest = {
    name: 'device.mojom.UsbDeviceManagerTest',
    kVersion: 0,
    ptrClass: UsbDeviceManagerTestPtr,
    proxyClass: UsbDeviceManagerTestProxy,
    stubClass: UsbDeviceManagerTestStub,
    validateRequest: validateUsbDeviceManagerTestRequest,
    validateResponse: validateUsbDeviceManagerTestResponse,
  };
  UsbDeviceManagerTestStub.prototype.validator = validateUsbDeviceManagerTestRequest;
  UsbDeviceManagerTestProxy.prototype.validator = validateUsbDeviceManagerTestResponse;
  exports.TestDeviceInfo = TestDeviceInfo;
  exports.UsbDeviceManagerTest = UsbDeviceManagerTest;
  exports.UsbDeviceManagerTestPtr = UsbDeviceManagerTestPtr;
  exports.UsbDeviceManagerTestAssociatedPtr = UsbDeviceManagerTestAssociatedPtr;
})();