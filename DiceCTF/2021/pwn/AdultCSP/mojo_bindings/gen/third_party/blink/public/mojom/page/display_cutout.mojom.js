// third_party/blink/public/mojom/page/display_cutout.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/page/display_cutout.mojom';
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
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }


  var ViewportFit = {};
  ViewportFit.kAuto = 0;
  ViewportFit.kContain = 1;
  ViewportFit.kCover = 2;
  ViewportFit.kCoverForcedByUserAgent = 3;
  ViewportFit.MIN_VALUE = 0,
  ViewportFit.MAX_VALUE = 3,

  ViewportFit.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ViewportFit.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function DisplayCutoutSafeArea(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisplayCutoutSafeArea.prototype.initDefaults_ = function() {
    this.top = 0;
    this.left = 0;
    this.bottom = 0;
    this.right = 0;
  };
  DisplayCutoutSafeArea.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisplayCutoutSafeArea.validate = function(messageValidator, offset) {
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

  DisplayCutoutSafeArea.encodedSize = codec.kStructHeaderSize + 16;

  DisplayCutoutSafeArea.decode = function(decoder) {
    var packed;
    var val = new DisplayCutoutSafeArea();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.top =
        decoder.decodeStruct(codec.Int32);
    val.left =
        decoder.decodeStruct(codec.Int32);
    val.bottom =
        decoder.decodeStruct(codec.Int32);
    val.right =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  DisplayCutoutSafeArea.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisplayCutoutSafeArea.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.top);
    encoder.encodeStruct(codec.Int32, val.left);
    encoder.encodeStruct(codec.Int32, val.bottom);
    encoder.encodeStruct(codec.Int32, val.right);
  };
  function DisplayCutoutHost_NotifyViewportFitChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisplayCutoutHost_NotifyViewportFitChanged_Params.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  DisplayCutoutHost_NotifyViewportFitChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisplayCutoutHost_NotifyViewportFitChanged_Params.validate = function(messageValidator, offset) {
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


    // validate DisplayCutoutHost_NotifyViewportFitChanged_Params.value
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ViewportFit);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DisplayCutoutHost_NotifyViewportFitChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  DisplayCutoutHost_NotifyViewportFitChanged_Params.decode = function(decoder) {
    var packed;
    var val = new DisplayCutoutHost_NotifyViewportFitChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DisplayCutoutHost_NotifyViewportFitChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisplayCutoutHost_NotifyViewportFitChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.value);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DisplayCutoutClient_SetSafeArea_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisplayCutoutClient_SetSafeArea_Params.prototype.initDefaults_ = function() {
    this.safeArea = null;
  };
  DisplayCutoutClient_SetSafeArea_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisplayCutoutClient_SetSafeArea_Params.validate = function(messageValidator, offset) {
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


    // validate DisplayCutoutClient_SetSafeArea_Params.safeArea
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, DisplayCutoutSafeArea, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DisplayCutoutClient_SetSafeArea_Params.encodedSize = codec.kStructHeaderSize + 8;

  DisplayCutoutClient_SetSafeArea_Params.decode = function(decoder) {
    var packed;
    var val = new DisplayCutoutClient_SetSafeArea_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.safeArea =
        decoder.decodeStructPointer(DisplayCutoutSafeArea);
    return val;
  };

  DisplayCutoutClient_SetSafeArea_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisplayCutoutClient_SetSafeArea_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(DisplayCutoutSafeArea, val.safeArea);
  };
  var kDisplayCutoutHost_NotifyViewportFitChanged_Name = 0;

  function DisplayCutoutHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DisplayCutoutHost,
                                                   handleOrPtrInfo);
  }

  function DisplayCutoutHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DisplayCutoutHost, associatedInterfacePtrInfo);
  }

  DisplayCutoutHostAssociatedPtr.prototype =
      Object.create(DisplayCutoutHostPtr.prototype);
  DisplayCutoutHostAssociatedPtr.prototype.constructor =
      DisplayCutoutHostAssociatedPtr;

  function DisplayCutoutHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  DisplayCutoutHostPtr.prototype.notifyViewportFitChanged = function() {
    return DisplayCutoutHostProxy.prototype.notifyViewportFitChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  DisplayCutoutHostProxy.prototype.notifyViewportFitChanged = function(value) {
    var params_ = new DisplayCutoutHost_NotifyViewportFitChanged_Params();
    params_.value = value;
    var builder = new codec.MessageV0Builder(
        kDisplayCutoutHost_NotifyViewportFitChanged_Name,
        codec.align(DisplayCutoutHost_NotifyViewportFitChanged_Params.encodedSize));
    builder.encodeStruct(DisplayCutoutHost_NotifyViewportFitChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DisplayCutoutHostStub(delegate) {
    this.delegate_ = delegate;
  }
  DisplayCutoutHostStub.prototype.notifyViewportFitChanged = function(value) {
    return this.delegate_ && this.delegate_.notifyViewportFitChanged && this.delegate_.notifyViewportFitChanged(value);
  }

  DisplayCutoutHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDisplayCutoutHost_NotifyViewportFitChanged_Name:
      var params = reader.decodeStruct(DisplayCutoutHost_NotifyViewportFitChanged_Params);
      this.notifyViewportFitChanged(params.value);
      return true;
    default:
      return false;
    }
  };

  DisplayCutoutHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDisplayCutoutHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDisplayCutoutHost_NotifyViewportFitChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DisplayCutoutHost_NotifyViewportFitChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDisplayCutoutHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DisplayCutoutHost = {
    name: 'blink.mojom.DisplayCutoutHost',
    kVersion: 0,
    ptrClass: DisplayCutoutHostPtr,
    proxyClass: DisplayCutoutHostProxy,
    stubClass: DisplayCutoutHostStub,
    validateRequest: validateDisplayCutoutHostRequest,
    validateResponse: null,
  };
  DisplayCutoutHostStub.prototype.validator = validateDisplayCutoutHostRequest;
  DisplayCutoutHostProxy.prototype.validator = null;
  var kDisplayCutoutClient_SetSafeArea_Name = 0;

  function DisplayCutoutClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DisplayCutoutClient,
                                                   handleOrPtrInfo);
  }

  function DisplayCutoutClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DisplayCutoutClient, associatedInterfacePtrInfo);
  }

  DisplayCutoutClientAssociatedPtr.prototype =
      Object.create(DisplayCutoutClientPtr.prototype);
  DisplayCutoutClientAssociatedPtr.prototype.constructor =
      DisplayCutoutClientAssociatedPtr;

  function DisplayCutoutClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  DisplayCutoutClientPtr.prototype.setSafeArea = function() {
    return DisplayCutoutClientProxy.prototype.setSafeArea
        .apply(this.ptr.getProxy(), arguments);
  };

  DisplayCutoutClientProxy.prototype.setSafeArea = function(safeArea) {
    var params_ = new DisplayCutoutClient_SetSafeArea_Params();
    params_.safeArea = safeArea;
    var builder = new codec.MessageV0Builder(
        kDisplayCutoutClient_SetSafeArea_Name,
        codec.align(DisplayCutoutClient_SetSafeArea_Params.encodedSize));
    builder.encodeStruct(DisplayCutoutClient_SetSafeArea_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DisplayCutoutClientStub(delegate) {
    this.delegate_ = delegate;
  }
  DisplayCutoutClientStub.prototype.setSafeArea = function(safeArea) {
    return this.delegate_ && this.delegate_.setSafeArea && this.delegate_.setSafeArea(safeArea);
  }

  DisplayCutoutClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDisplayCutoutClient_SetSafeArea_Name:
      var params = reader.decodeStruct(DisplayCutoutClient_SetSafeArea_Params);
      this.setSafeArea(params.safeArea);
      return true;
    default:
      return false;
    }
  };

  DisplayCutoutClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDisplayCutoutClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDisplayCutoutClient_SetSafeArea_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DisplayCutoutClient_SetSafeArea_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDisplayCutoutClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DisplayCutoutClient = {
    name: 'blink.mojom.DisplayCutoutClient',
    kVersion: 0,
    ptrClass: DisplayCutoutClientPtr,
    proxyClass: DisplayCutoutClientProxy,
    stubClass: DisplayCutoutClientStub,
    validateRequest: validateDisplayCutoutClientRequest,
    validateResponse: null,
  };
  DisplayCutoutClientStub.prototype.validator = validateDisplayCutoutClientRequest;
  DisplayCutoutClientProxy.prototype.validator = null;
  exports.ViewportFit = ViewportFit;
  exports.DisplayCutoutSafeArea = DisplayCutoutSafeArea;
  exports.DisplayCutoutHost = DisplayCutoutHost;
  exports.DisplayCutoutHostPtr = DisplayCutoutHostPtr;
  exports.DisplayCutoutHostAssociatedPtr = DisplayCutoutHostAssociatedPtr;
  exports.DisplayCutoutClient = DisplayCutoutClient;
  exports.DisplayCutoutClientPtr = DisplayCutoutClientPtr;
  exports.DisplayCutoutClientAssociatedPtr = DisplayCutoutClientAssociatedPtr;
})();