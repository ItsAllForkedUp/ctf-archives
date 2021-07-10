// extensions/common/mojom/guest_view.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/mojom/guest_view.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('extensions.mojom');
  var mime_handler$ =
      mojo.internal.exposeNamespace('extensions.mimeHandler');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'extensions/common/api/mime_handler.mojom', '../api/mime_handler.mojom.js');
  }
  var transferrable_url_loader$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/loader/transferrable_url_loader.mojom', '../../../third_party/blink/public/mojom/loader/transferrable_url_loader.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }



  function GuestView_ReadyToCreateMimeHandlerView_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GuestView_ReadyToCreateMimeHandlerView_Params.prototype.initDefaults_ = function() {
    this.routingId = 0;
    this.success = false;
  };
  GuestView_ReadyToCreateMimeHandlerView_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GuestView_ReadyToCreateMimeHandlerView_Params.validate = function(messageValidator, offset) {
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



    return validator.validationError.NONE;
  };

  GuestView_ReadyToCreateMimeHandlerView_Params.encodedSize = codec.kStructHeaderSize + 8;

  GuestView_ReadyToCreateMimeHandlerView_Params.decode = function(decoder) {
    var packed;
    var val = new GuestView_ReadyToCreateMimeHandlerView_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routingId =
        decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GuestView_ReadyToCreateMimeHandlerView_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GuestView_ReadyToCreateMimeHandlerView_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.routingId);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MimeHandlerViewContainerManager_SetInternalId_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeHandlerViewContainerManager_SetInternalId_Params.prototype.initDefaults_ = function() {
    this.tokenId = null;
  };
  MimeHandlerViewContainerManager_SetInternalId_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeHandlerViewContainerManager_SetInternalId_Params.validate = function(messageValidator, offset) {
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


    // validate MimeHandlerViewContainerManager_SetInternalId_Params.tokenId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MimeHandlerViewContainerManager_SetInternalId_Params.encodedSize = codec.kStructHeaderSize + 8;

  MimeHandlerViewContainerManager_SetInternalId_Params.decode = function(decoder) {
    var packed;
    var val = new MimeHandlerViewContainerManager_SetInternalId_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tokenId =
        decoder.decodeStruct(codec.String);
    return val;
  };

  MimeHandlerViewContainerManager_SetInternalId_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeHandlerViewContainerManager_SetInternalId_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.tokenId);
  };
  function MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params.prototype.initDefaults_ = function() {
  };
  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params.validate = function(messageValidator, offset) {
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

  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params.encodedSize = codec.kStructHeaderSize + 0;

  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params.decode = function(decoder) {
    var packed;
    var val = new MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams.prototype.initDefaults_ = function() {
    this.beforeUnloadControl = new mime_handler$.BeforeUnloadControlPtr();
  };
  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams.beforeUnloadControl
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.beforeUnloadControl =
        decoder.decodeStruct(new codec.Interface(mime_handler$.BeforeUnloadControlPtr));
    return val;
  };

  MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(mime_handler$.BeforeUnloadControlPtr), val.beforeUnloadControl);
  };
  function MimeHandlerViewContainerManager_DestroyFrameContainer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeHandlerViewContainerManager_DestroyFrameContainer_Params.prototype.initDefaults_ = function() {
    this.elementInstanceId = 0;
  };
  MimeHandlerViewContainerManager_DestroyFrameContainer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeHandlerViewContainerManager_DestroyFrameContainer_Params.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  MimeHandlerViewContainerManager_DestroyFrameContainer_Params.encodedSize = codec.kStructHeaderSize + 8;

  MimeHandlerViewContainerManager_DestroyFrameContainer_Params.decode = function(decoder) {
    var packed;
    var val = new MimeHandlerViewContainerManager_DestroyFrameContainer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.elementInstanceId =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MimeHandlerViewContainerManager_DestroyFrameContainer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeHandlerViewContainerManager_DestroyFrameContainer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.elementInstanceId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MimeHandlerViewContainerManager_DidLoad_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MimeHandlerViewContainerManager_DidLoad_Params.prototype.initDefaults_ = function() {
    this.mimeHandlerViewGuestElementInstanceId = 0;
    this.resourceUrl = null;
  };
  MimeHandlerViewContainerManager_DidLoad_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MimeHandlerViewContainerManager_DidLoad_Params.validate = function(messageValidator, offset) {
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



    // validate MimeHandlerViewContainerManager_DidLoad_Params.resourceUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MimeHandlerViewContainerManager_DidLoad_Params.encodedSize = codec.kStructHeaderSize + 16;

  MimeHandlerViewContainerManager_DidLoad_Params.decode = function(decoder) {
    var packed;
    var val = new MimeHandlerViewContainerManager_DidLoad_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mimeHandlerViewGuestElementInstanceId =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.resourceUrl =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  MimeHandlerViewContainerManager_DidLoad_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MimeHandlerViewContainerManager_DidLoad_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.mimeHandlerViewGuestElementInstanceId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.resourceUrl);
  };
  var kGuestView_ReadyToCreateMimeHandlerView_Name = 203163039;

  function GuestViewPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(GuestView,
                                                   handleOrPtrInfo);
  }

  function GuestViewAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        GuestView, associatedInterfacePtrInfo);
  }

  GuestViewAssociatedPtr.prototype =
      Object.create(GuestViewPtr.prototype);
  GuestViewAssociatedPtr.prototype.constructor =
      GuestViewAssociatedPtr;

  function GuestViewProxy(receiver) {
    this.receiver_ = receiver;
  }
  GuestViewPtr.prototype.readyToCreateMimeHandlerView = function() {
    return GuestViewProxy.prototype.readyToCreateMimeHandlerView
        .apply(this.ptr.getProxy(), arguments);
  };

  GuestViewProxy.prototype.readyToCreateMimeHandlerView = function(routingId, success) {
    var params_ = new GuestView_ReadyToCreateMimeHandlerView_Params();
    params_.routingId = routingId;
    params_.success = success;
    var builder = new codec.MessageV0Builder(
        kGuestView_ReadyToCreateMimeHandlerView_Name,
        codec.align(GuestView_ReadyToCreateMimeHandlerView_Params.encodedSize));
    builder.encodeStruct(GuestView_ReadyToCreateMimeHandlerView_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function GuestViewStub(delegate) {
    this.delegate_ = delegate;
  }
  GuestViewStub.prototype.readyToCreateMimeHandlerView = function(routingId, success) {
    return this.delegate_ && this.delegate_.readyToCreateMimeHandlerView && this.delegate_.readyToCreateMimeHandlerView(routingId, success);
  }

  GuestViewStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGuestView_ReadyToCreateMimeHandlerView_Name:
      var params = reader.decodeStruct(GuestView_ReadyToCreateMimeHandlerView_Params);
      this.readyToCreateMimeHandlerView(params.routingId, params.success);
      return true;
    default:
      return false;
    }
  };

  GuestViewStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateGuestViewRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kGuestView_ReadyToCreateMimeHandlerView_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = GuestView_ReadyToCreateMimeHandlerView_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateGuestViewResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var GuestView = {
    name: 'extensions.mojom.GuestView',
    kVersion: 0,
    ptrClass: GuestViewPtr,
    proxyClass: GuestViewProxy,
    stubClass: GuestViewStub,
    validateRequest: validateGuestViewRequest,
    validateResponse: null,
  };
  GuestViewStub.prototype.validator = validateGuestViewRequest;
  GuestViewProxy.prototype.validator = null;
  var kMimeHandlerViewContainerManager_SetInternalId_Name = 1516206749;
  var kMimeHandlerViewContainerManager_CreateBeforeUnloadControl_Name = 547335846;
  var kMimeHandlerViewContainerManager_DestroyFrameContainer_Name = 1801069662;
  var kMimeHandlerViewContainerManager_DidLoad_Name = 1152311676;

  function MimeHandlerViewContainerManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MimeHandlerViewContainerManager,
                                                   handleOrPtrInfo);
  }

  function MimeHandlerViewContainerManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MimeHandlerViewContainerManager, associatedInterfacePtrInfo);
  }

  MimeHandlerViewContainerManagerAssociatedPtr.prototype =
      Object.create(MimeHandlerViewContainerManagerPtr.prototype);
  MimeHandlerViewContainerManagerAssociatedPtr.prototype.constructor =
      MimeHandlerViewContainerManagerAssociatedPtr;

  function MimeHandlerViewContainerManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  MimeHandlerViewContainerManagerPtr.prototype.setInternalId = function() {
    return MimeHandlerViewContainerManagerProxy.prototype.setInternalId
        .apply(this.ptr.getProxy(), arguments);
  };

  MimeHandlerViewContainerManagerProxy.prototype.setInternalId = function(tokenId) {
    var params_ = new MimeHandlerViewContainerManager_SetInternalId_Params();
    params_.tokenId = tokenId;
    var builder = new codec.MessageV0Builder(
        kMimeHandlerViewContainerManager_SetInternalId_Name,
        codec.align(MimeHandlerViewContainerManager_SetInternalId_Params.encodedSize));
    builder.encodeStruct(MimeHandlerViewContainerManager_SetInternalId_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MimeHandlerViewContainerManagerPtr.prototype.createBeforeUnloadControl = function() {
    return MimeHandlerViewContainerManagerProxy.prototype.createBeforeUnloadControl
        .apply(this.ptr.getProxy(), arguments);
  };

  MimeHandlerViewContainerManagerProxy.prototype.createBeforeUnloadControl = function() {
    var params_ = new MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMimeHandlerViewContainerManager_CreateBeforeUnloadControl_Name,
          codec.align(MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  MimeHandlerViewContainerManagerPtr.prototype.destroyFrameContainer = function() {
    return MimeHandlerViewContainerManagerProxy.prototype.destroyFrameContainer
        .apply(this.ptr.getProxy(), arguments);
  };

  MimeHandlerViewContainerManagerProxy.prototype.destroyFrameContainer = function(elementInstanceId) {
    var params_ = new MimeHandlerViewContainerManager_DestroyFrameContainer_Params();
    params_.elementInstanceId = elementInstanceId;
    var builder = new codec.MessageV0Builder(
        kMimeHandlerViewContainerManager_DestroyFrameContainer_Name,
        codec.align(MimeHandlerViewContainerManager_DestroyFrameContainer_Params.encodedSize));
    builder.encodeStruct(MimeHandlerViewContainerManager_DestroyFrameContainer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MimeHandlerViewContainerManagerPtr.prototype.didLoad = function() {
    return MimeHandlerViewContainerManagerProxy.prototype.didLoad
        .apply(this.ptr.getProxy(), arguments);
  };

  MimeHandlerViewContainerManagerProxy.prototype.didLoad = function(mimeHandlerViewGuestElementInstanceId, resourceUrl) {
    var params_ = new MimeHandlerViewContainerManager_DidLoad_Params();
    params_.mimeHandlerViewGuestElementInstanceId = mimeHandlerViewGuestElementInstanceId;
    params_.resourceUrl = resourceUrl;
    var builder = new codec.MessageV0Builder(
        kMimeHandlerViewContainerManager_DidLoad_Name,
        codec.align(MimeHandlerViewContainerManager_DidLoad_Params.encodedSize));
    builder.encodeStruct(MimeHandlerViewContainerManager_DidLoad_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MimeHandlerViewContainerManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  MimeHandlerViewContainerManagerStub.prototype.setInternalId = function(tokenId) {
    return this.delegate_ && this.delegate_.setInternalId && this.delegate_.setInternalId(tokenId);
  }
  MimeHandlerViewContainerManagerStub.prototype.createBeforeUnloadControl = function() {
    return this.delegate_ && this.delegate_.createBeforeUnloadControl && this.delegate_.createBeforeUnloadControl();
  }
  MimeHandlerViewContainerManagerStub.prototype.destroyFrameContainer = function(elementInstanceId) {
    return this.delegate_ && this.delegate_.destroyFrameContainer && this.delegate_.destroyFrameContainer(elementInstanceId);
  }
  MimeHandlerViewContainerManagerStub.prototype.didLoad = function(mimeHandlerViewGuestElementInstanceId, resourceUrl) {
    return this.delegate_ && this.delegate_.didLoad && this.delegate_.didLoad(mimeHandlerViewGuestElementInstanceId, resourceUrl);
  }

  MimeHandlerViewContainerManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMimeHandlerViewContainerManager_SetInternalId_Name:
      var params = reader.decodeStruct(MimeHandlerViewContainerManager_SetInternalId_Params);
      this.setInternalId(params.tokenId);
      return true;
    case kMimeHandlerViewContainerManager_DestroyFrameContainer_Name:
      var params = reader.decodeStruct(MimeHandlerViewContainerManager_DestroyFrameContainer_Params);
      this.destroyFrameContainer(params.elementInstanceId);
      return true;
    case kMimeHandlerViewContainerManager_DidLoad_Name:
      var params = reader.decodeStruct(MimeHandlerViewContainerManager_DidLoad_Params);
      this.didLoad(params.mimeHandlerViewGuestElementInstanceId, params.resourceUrl);
      return true;
    default:
      return false;
    }
  };

  MimeHandlerViewContainerManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMimeHandlerViewContainerManager_CreateBeforeUnloadControl_Name:
      var params = reader.decodeStruct(MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params);
      this.createBeforeUnloadControl().then(function(response) {
        var responseParams =
            new MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams();
        responseParams.beforeUnloadControl = response.beforeUnloadControl;
        var builder = new codec.MessageV1Builder(
            kMimeHandlerViewContainerManager_CreateBeforeUnloadControl_Name,
            codec.align(MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMimeHandlerViewContainerManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMimeHandlerViewContainerManager_SetInternalId_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MimeHandlerViewContainerManager_SetInternalId_Params;
      break;
      case kMimeHandlerViewContainerManager_CreateBeforeUnloadControl_Name:
        if (message.expectsResponse())
          paramsClass = MimeHandlerViewContainerManager_CreateBeforeUnloadControl_Params;
      break;
      case kMimeHandlerViewContainerManager_DestroyFrameContainer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MimeHandlerViewContainerManager_DestroyFrameContainer_Params;
      break;
      case kMimeHandlerViewContainerManager_DidLoad_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MimeHandlerViewContainerManager_DidLoad_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMimeHandlerViewContainerManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMimeHandlerViewContainerManager_CreateBeforeUnloadControl_Name:
        if (message.isResponse())
          paramsClass = MimeHandlerViewContainerManager_CreateBeforeUnloadControl_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MimeHandlerViewContainerManager = {
    name: 'extensions.mojom.MimeHandlerViewContainerManager',
    kVersion: 0,
    ptrClass: MimeHandlerViewContainerManagerPtr,
    proxyClass: MimeHandlerViewContainerManagerProxy,
    stubClass: MimeHandlerViewContainerManagerStub,
    validateRequest: validateMimeHandlerViewContainerManagerRequest,
    validateResponse: validateMimeHandlerViewContainerManagerResponse,
  };
  MimeHandlerViewContainerManagerStub.prototype.validator = validateMimeHandlerViewContainerManagerRequest;
  MimeHandlerViewContainerManagerProxy.prototype.validator = validateMimeHandlerViewContainerManagerResponse;
  exports.GuestView = GuestView;
  exports.GuestViewPtr = GuestViewPtr;
  exports.GuestViewAssociatedPtr = GuestViewAssociatedPtr;
  exports.MimeHandlerViewContainerManager = MimeHandlerViewContainerManager;
  exports.MimeHandlerViewContainerManagerPtr = MimeHandlerViewContainerManagerPtr;
  exports.MimeHandlerViewContainerManagerAssociatedPtr = MimeHandlerViewContainerManagerAssociatedPtr;
})();