// services/network/public/mojom/cookie_access_observer.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/cookie_access_observer.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }
  var site_for_cookies$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/site_for_cookies.mojom', 'site_for_cookies.mojom.js');
  }
  var cookie_manager$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/cookie_manager.mojom', 'cookie_manager.mojom.js');
  }



  function CookieAccessDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  CookieAccessDetails.Type = {};
  CookieAccessDetails.Type.kRead = 0;
  CookieAccessDetails.Type.kChange = 1;
  CookieAccessDetails.Type.MIN_VALUE = 0;
  CookieAccessDetails.Type.MAX_VALUE = 1;

  CookieAccessDetails.Type.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  CookieAccessDetails.Type.toKnownEnumValue = function(value) {
    return value;
  };

  CookieAccessDetails.Type.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  CookieAccessDetails.prototype.initDefaults_ = function() {
    this.type = 0;
    this.url = null;
    this.siteForCookies = null;
    this.cookieList = null;
    this.devtoolsRequestId = null;
  };
  CookieAccessDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieAccessDetails.validate = function(messageValidator, offset) {
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


    // validate CookieAccessDetails.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CookieAccessDetails.Type);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieAccessDetails.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieAccessDetails.siteForCookies
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, site_for_cookies$.SiteForCookies, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieAccessDetails.cookieList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(cookie_manager$.CookieOrLineWithAccessResult), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CookieAccessDetails.devtoolsRequestId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieAccessDetails.encodedSize = codec.kStructHeaderSize + 40;

  CookieAccessDetails.decode = function(decoder) {
    var packed;
    var val = new CookieAccessDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(new codec.Enum(CookieAccessDetails.Type));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.siteForCookies =
        decoder.decodeStructPointer(site_for_cookies$.SiteForCookies);
    val.cookieList =
        decoder.decodeArrayPointer(new codec.PointerTo(cookie_manager$.CookieOrLineWithAccessResult));
    val.devtoolsRequestId =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  CookieAccessDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieAccessDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(site_for_cookies$.SiteForCookies, val.siteForCookies);
    encoder.encodeArrayPointer(new codec.PointerTo(cookie_manager$.CookieOrLineWithAccessResult), val.cookieList);
    encoder.encodeStruct(codec.NullableString, val.devtoolsRequestId);
  };
  function CookieAccessObserver_OnCookiesAccessed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieAccessObserver_OnCookiesAccessed_Params.prototype.initDefaults_ = function() {
    this.details = null;
  };
  CookieAccessObserver_OnCookiesAccessed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieAccessObserver_OnCookiesAccessed_Params.validate = function(messageValidator, offset) {
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


    // validate CookieAccessObserver_OnCookiesAccessed_Params.details
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CookieAccessDetails, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieAccessObserver_OnCookiesAccessed_Params.encodedSize = codec.kStructHeaderSize + 8;

  CookieAccessObserver_OnCookiesAccessed_Params.decode = function(decoder) {
    var packed;
    var val = new CookieAccessObserver_OnCookiesAccessed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.details =
        decoder.decodeStructPointer(CookieAccessDetails);
    return val;
  };

  CookieAccessObserver_OnCookiesAccessed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieAccessObserver_OnCookiesAccessed_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CookieAccessDetails, val.details);
  };
  function CookieAccessObserver_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CookieAccessObserver_Clone_Params.prototype.initDefaults_ = function() {
    this.listener = new bindings.InterfaceRequest();
  };
  CookieAccessObserver_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CookieAccessObserver_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate CookieAccessObserver_Clone_Params.listener
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CookieAccessObserver_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  CookieAccessObserver_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new CookieAccessObserver_Clone_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.listener =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CookieAccessObserver_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CookieAccessObserver_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.listener);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kCookieAccessObserver_OnCookiesAccessed_Name = 1222343242;
  var kCookieAccessObserver_Clone_Name = 390327289;

  function CookieAccessObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CookieAccessObserver,
                                                   handleOrPtrInfo);
  }

  function CookieAccessObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CookieAccessObserver, associatedInterfacePtrInfo);
  }

  CookieAccessObserverAssociatedPtr.prototype =
      Object.create(CookieAccessObserverPtr.prototype);
  CookieAccessObserverAssociatedPtr.prototype.constructor =
      CookieAccessObserverAssociatedPtr;

  function CookieAccessObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  CookieAccessObserverPtr.prototype.onCookiesAccessed = function() {
    return CookieAccessObserverProxy.prototype.onCookiesAccessed
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieAccessObserverProxy.prototype.onCookiesAccessed = function(details) {
    var params_ = new CookieAccessObserver_OnCookiesAccessed_Params();
    params_.details = details;
    var builder = new codec.MessageV0Builder(
        kCookieAccessObserver_OnCookiesAccessed_Name,
        codec.align(CookieAccessObserver_OnCookiesAccessed_Params.encodedSize));
    builder.encodeStruct(CookieAccessObserver_OnCookiesAccessed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CookieAccessObserverPtr.prototype.clone = function() {
    return CookieAccessObserverProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  CookieAccessObserverProxy.prototype.clone = function(listener) {
    var params_ = new CookieAccessObserver_Clone_Params();
    params_.listener = listener;
    var builder = new codec.MessageV0Builder(
        kCookieAccessObserver_Clone_Name,
        codec.align(CookieAccessObserver_Clone_Params.encodedSize));
    builder.encodeStruct(CookieAccessObserver_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CookieAccessObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  CookieAccessObserverStub.prototype.onCookiesAccessed = function(details) {
    return this.delegate_ && this.delegate_.onCookiesAccessed && this.delegate_.onCookiesAccessed(details);
  }
  CookieAccessObserverStub.prototype.clone = function(listener) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(listener);
  }

  CookieAccessObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCookieAccessObserver_OnCookiesAccessed_Name:
      var params = reader.decodeStruct(CookieAccessObserver_OnCookiesAccessed_Params);
      this.onCookiesAccessed(params.details);
      return true;
    case kCookieAccessObserver_Clone_Name:
      var params = reader.decodeStruct(CookieAccessObserver_Clone_Params);
      this.clone(params.listener);
      return true;
    default:
      return false;
    }
  };

  CookieAccessObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCookieAccessObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCookieAccessObserver_OnCookiesAccessed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CookieAccessObserver_OnCookiesAccessed_Params;
      break;
      case kCookieAccessObserver_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CookieAccessObserver_Clone_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCookieAccessObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CookieAccessObserver = {
    name: 'network.mojom.CookieAccessObserver',
    kVersion: 0,
    ptrClass: CookieAccessObserverPtr,
    proxyClass: CookieAccessObserverProxy,
    stubClass: CookieAccessObserverStub,
    validateRequest: validateCookieAccessObserverRequest,
    validateResponse: null,
  };
  CookieAccessObserverStub.prototype.validator = validateCookieAccessObserverRequest;
  CookieAccessObserverProxy.prototype.validator = null;
  exports.CookieAccessDetails = CookieAccessDetails;
  exports.CookieAccessObserver = CookieAccessObserver;
  exports.CookieAccessObserverPtr = CookieAccessObserverPtr;
  exports.CookieAccessObserverAssociatedPtr = CookieAccessObserverAssociatedPtr;
})();