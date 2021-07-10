// services/network/public/mojom/cert_verifier_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/cert_verifier_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('certVerifier.mojom');
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }
  var byte_string$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/byte_string.mojom', '../../../../mojo/public/mojom/base/byte_string.mojom.js');
  }
  var network_param$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_param.mojom', 'network_param.mojom.js');
  }
  var url_loader_factory$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader_factory.mojom', 'url_loader_factory.mojom.js');
  }



  function RequestParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RequestParams.prototype.initDefaults_ = function() {
    this.certificate = null;
    this.hostname = null;
    this.flags = 0;
    this.ocspResponse = null;
    this.sctList = null;
  };
  RequestParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RequestParams.validate = function(messageValidator, offset) {
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


    // validate RequestParams.certificate
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.X509Certificate, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RequestParams.hostname
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate RequestParams.ocspResponse
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, byte_string$.ByteString, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RequestParams.sctList
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, byte_string$.ByteString, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RequestParams.encodedSize = codec.kStructHeaderSize + 40;

  RequestParams.decode = function(decoder) {
    var packed;
    var val = new RequestParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.certificate =
        decoder.decodeStructPointer(network_param$.X509Certificate);
    val.hostname =
        decoder.decodeStruct(codec.String);
    val.flags =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.ocspResponse =
        decoder.decodeStructPointer(byte_string$.ByteString);
    val.sctList =
        decoder.decodeStructPointer(byte_string$.ByteString);
    return val;
  };

  RequestParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RequestParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.X509Certificate, val.certificate);
    encoder.encodeStruct(codec.String, val.hostname);
    encoder.encodeStruct(codec.Int32, val.flags);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(byte_string$.ByteString, val.ocspResponse);
    encoder.encodeStructPointer(byte_string$.ByteString, val.sctList);
  };
  function CertVerifierConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CertVerifierConfig.prototype.initDefaults_ = function() {
    this.enableRevChecking = false;
    this.requireRevCheckingLocalAnchors = false;
    this.enableSha1LocalAnchors = false;
    this.disableSymantecEnforcement = false;
    this.crlSet = null;
    this.additionalTrustAnchors = null;
    this.additionalUntrustedAuthorities = null;
  };
  CertVerifierConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CertVerifierConfig.validate = function(messageValidator, offset) {
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






    // validate CertVerifierConfig.crlSet
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CertVerifierConfig.additionalTrustAnchors
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(network_param$.X509Certificate), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CertVerifierConfig.additionalUntrustedAuthorities
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(network_param$.X509Certificate), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CertVerifierConfig.encodedSize = codec.kStructHeaderSize + 40;

  CertVerifierConfig.decode = function(decoder) {
    var packed;
    var val = new CertVerifierConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.enableRevChecking = (packed >> 0) & 1 ? true : false;
    val.requireRevCheckingLocalAnchors = (packed >> 1) & 1 ? true : false;
    val.enableSha1LocalAnchors = (packed >> 2) & 1 ? true : false;
    val.disableSymantecEnforcement = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.crlSet =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    val.additionalTrustAnchors =
        decoder.decodeArrayPointer(new codec.PointerTo(network_param$.X509Certificate));
    val.additionalUntrustedAuthorities =
        decoder.decodeArrayPointer(new codec.PointerTo(network_param$.X509Certificate));
    return val;
  };

  CertVerifierConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CertVerifierConfig.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.enableRevChecking & 1) << 0
    packed |= (val.requireRevCheckingLocalAnchors & 1) << 1
    packed |= (val.enableSha1LocalAnchors & 1) << 2
    packed |= (val.disableSymantecEnforcement & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.crlSet);
    encoder.encodeArrayPointer(new codec.PointerTo(network_param$.X509Certificate), val.additionalTrustAnchors);
    encoder.encodeArrayPointer(new codec.PointerTo(network_param$.X509Certificate), val.additionalUntrustedAuthorities);
  };
  function URLLoaderFactoryConnector_CreateURLLoaderFactory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderFactoryConnector_CreateURLLoaderFactory_Params.prototype.initDefaults_ = function() {
    this.urlLoaderFactory = new bindings.InterfaceRequest();
  };
  URLLoaderFactoryConnector_CreateURLLoaderFactory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderFactoryConnector_CreateURLLoaderFactory_Params.validate = function(messageValidator, offset) {
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


    // validate URLLoaderFactoryConnector_CreateURLLoaderFactory_Params.urlLoaderFactory
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderFactoryConnector_CreateURLLoaderFactory_Params.encodedSize = codec.kStructHeaderSize + 8;

  URLLoaderFactoryConnector_CreateURLLoaderFactory_Params.decode = function(decoder) {
    var packed;
    var val = new URLLoaderFactoryConnector_CreateURLLoaderFactory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlLoaderFactory =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  URLLoaderFactoryConnector_CreateURLLoaderFactory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderFactoryConnector_CreateURLLoaderFactory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.urlLoaderFactory);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function CertVerifierService_EnableNetworkAccess_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CertVerifierService_EnableNetworkAccess_Params.prototype.initDefaults_ = function() {
    this.urlLoaderFactory = new url_loader_factory$.URLLoaderFactoryPtr();
    this.reconnector = new URLLoaderFactoryConnectorPtr();
  };
  CertVerifierService_EnableNetworkAccess_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CertVerifierService_EnableNetworkAccess_Params.validate = function(messageValidator, offset) {
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


    // validate CertVerifierService_EnableNetworkAccess_Params.urlLoaderFactory
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CertVerifierService_EnableNetworkAccess_Params.reconnector
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CertVerifierService_EnableNetworkAccess_Params.encodedSize = codec.kStructHeaderSize + 16;

  CertVerifierService_EnableNetworkAccess_Params.decode = function(decoder) {
    var packed;
    var val = new CertVerifierService_EnableNetworkAccess_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlLoaderFactory =
        decoder.decodeStruct(new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr));
    val.reconnector =
        decoder.decodeStruct(new codec.NullableInterface(URLLoaderFactoryConnectorPtr));
    return val;
  };

  CertVerifierService_EnableNetworkAccess_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CertVerifierService_EnableNetworkAccess_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(url_loader_factory$.URLLoaderFactoryPtr), val.urlLoaderFactory);
    encoder.encodeStruct(new codec.NullableInterface(URLLoaderFactoryConnectorPtr), val.reconnector);
  };
  function CertVerifierService_Verify_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CertVerifierService_Verify_Params.prototype.initDefaults_ = function() {
    this.params = null;
    this.certVerifierRequest = new CertVerifierRequestPtr();
  };
  CertVerifierService_Verify_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CertVerifierService_Verify_Params.validate = function(messageValidator, offset) {
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


    // validate CertVerifierService_Verify_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, RequestParams, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CertVerifierService_Verify_Params.certVerifierRequest
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CertVerifierService_Verify_Params.encodedSize = codec.kStructHeaderSize + 16;

  CertVerifierService_Verify_Params.decode = function(decoder) {
    var packed;
    var val = new CertVerifierService_Verify_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStructPointer(RequestParams);
    val.certVerifierRequest =
        decoder.decodeStruct(new codec.Interface(CertVerifierRequestPtr));
    return val;
  };

  CertVerifierService_Verify_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CertVerifierService_Verify_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(RequestParams, val.params);
    encoder.encodeStruct(new codec.Interface(CertVerifierRequestPtr), val.certVerifierRequest);
  };
  function CertVerifierService_SetConfig_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CertVerifierService_SetConfig_Params.prototype.initDefaults_ = function() {
    this.config = null;
  };
  CertVerifierService_SetConfig_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CertVerifierService_SetConfig_Params.validate = function(messageValidator, offset) {
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


    // validate CertVerifierService_SetConfig_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, CertVerifierConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CertVerifierService_SetConfig_Params.encodedSize = codec.kStructHeaderSize + 8;

  CertVerifierService_SetConfig_Params.decode = function(decoder) {
    var packed;
    var val = new CertVerifierService_SetConfig_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config =
        decoder.decodeStructPointer(CertVerifierConfig);
    return val;
  };

  CertVerifierService_SetConfig_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CertVerifierService_SetConfig_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(CertVerifierConfig, val.config);
  };
  function CertVerifierRequest_Complete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CertVerifierRequest_Complete_Params.prototype.initDefaults_ = function() {
    this.result = null;
    this.netError = 0;
  };
  CertVerifierRequest_Complete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CertVerifierRequest_Complete_Params.validate = function(messageValidator, offset) {
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


    // validate CertVerifierRequest_Complete_Params.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, network_param$.CertVerifyResult, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  CertVerifierRequest_Complete_Params.encodedSize = codec.kStructHeaderSize + 16;

  CertVerifierRequest_Complete_Params.decode = function(decoder) {
    var packed;
    var val = new CertVerifierRequest_Complete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(network_param$.CertVerifyResult);
    val.netError =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CertVerifierRequest_Complete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CertVerifierRequest_Complete_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(network_param$.CertVerifyResult, val.result);
    encoder.encodeStruct(codec.Int32, val.netError);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kURLLoaderFactoryConnector_CreateURLLoaderFactory_Name = 1565575266;

  function URLLoaderFactoryConnectorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(URLLoaderFactoryConnector,
                                                   handleOrPtrInfo);
  }

  function URLLoaderFactoryConnectorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        URLLoaderFactoryConnector, associatedInterfacePtrInfo);
  }

  URLLoaderFactoryConnectorAssociatedPtr.prototype =
      Object.create(URLLoaderFactoryConnectorPtr.prototype);
  URLLoaderFactoryConnectorAssociatedPtr.prototype.constructor =
      URLLoaderFactoryConnectorAssociatedPtr;

  function URLLoaderFactoryConnectorProxy(receiver) {
    this.receiver_ = receiver;
  }
  URLLoaderFactoryConnectorPtr.prototype.createURLLoaderFactory = function() {
    return URLLoaderFactoryConnectorProxy.prototype.createURLLoaderFactory
        .apply(this.ptr.getProxy(), arguments);
  };

  URLLoaderFactoryConnectorProxy.prototype.createURLLoaderFactory = function(urlLoaderFactory) {
    var params_ = new URLLoaderFactoryConnector_CreateURLLoaderFactory_Params();
    params_.urlLoaderFactory = urlLoaderFactory;
    var builder = new codec.MessageV0Builder(
        kURLLoaderFactoryConnector_CreateURLLoaderFactory_Name,
        codec.align(URLLoaderFactoryConnector_CreateURLLoaderFactory_Params.encodedSize));
    builder.encodeStruct(URLLoaderFactoryConnector_CreateURLLoaderFactory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function URLLoaderFactoryConnectorStub(delegate) {
    this.delegate_ = delegate;
  }
  URLLoaderFactoryConnectorStub.prototype.createURLLoaderFactory = function(urlLoaderFactory) {
    return this.delegate_ && this.delegate_.createURLLoaderFactory && this.delegate_.createURLLoaderFactory(urlLoaderFactory);
  }

  URLLoaderFactoryConnectorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kURLLoaderFactoryConnector_CreateURLLoaderFactory_Name:
      var params = reader.decodeStruct(URLLoaderFactoryConnector_CreateURLLoaderFactory_Params);
      this.createURLLoaderFactory(params.urlLoaderFactory);
      return true;
    default:
      return false;
    }
  };

  URLLoaderFactoryConnectorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateURLLoaderFactoryConnectorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kURLLoaderFactoryConnector_CreateURLLoaderFactory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = URLLoaderFactoryConnector_CreateURLLoaderFactory_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateURLLoaderFactoryConnectorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var URLLoaderFactoryConnector = {
    name: 'cert_verifier.mojom.URLLoaderFactoryConnector',
    kVersion: 0,
    ptrClass: URLLoaderFactoryConnectorPtr,
    proxyClass: URLLoaderFactoryConnectorProxy,
    stubClass: URLLoaderFactoryConnectorStub,
    validateRequest: validateURLLoaderFactoryConnectorRequest,
    validateResponse: null,
  };
  URLLoaderFactoryConnectorStub.prototype.validator = validateURLLoaderFactoryConnectorRequest;
  URLLoaderFactoryConnectorProxy.prototype.validator = null;
  var kCertVerifierService_EnableNetworkAccess_Name = 74628433;
  var kCertVerifierService_Verify_Name = 1205574037;
  var kCertVerifierService_SetConfig_Name = 1181920966;

  function CertVerifierServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CertVerifierService,
                                                   handleOrPtrInfo);
  }

  function CertVerifierServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CertVerifierService, associatedInterfacePtrInfo);
  }

  CertVerifierServiceAssociatedPtr.prototype =
      Object.create(CertVerifierServicePtr.prototype);
  CertVerifierServiceAssociatedPtr.prototype.constructor =
      CertVerifierServiceAssociatedPtr;

  function CertVerifierServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  CertVerifierServicePtr.prototype.enableNetworkAccess = function() {
    return CertVerifierServiceProxy.prototype.enableNetworkAccess
        .apply(this.ptr.getProxy(), arguments);
  };

  CertVerifierServiceProxy.prototype.enableNetworkAccess = function(urlLoaderFactory, reconnector) {
    var params_ = new CertVerifierService_EnableNetworkAccess_Params();
    params_.urlLoaderFactory = urlLoaderFactory;
    params_.reconnector = reconnector;
    var builder = new codec.MessageV0Builder(
        kCertVerifierService_EnableNetworkAccess_Name,
        codec.align(CertVerifierService_EnableNetworkAccess_Params.encodedSize));
    builder.encodeStruct(CertVerifierService_EnableNetworkAccess_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CertVerifierServicePtr.prototype.verify = function() {
    return CertVerifierServiceProxy.prototype.verify
        .apply(this.ptr.getProxy(), arguments);
  };

  CertVerifierServiceProxy.prototype.verify = function(params, certVerifierRequest) {
    var params_ = new CertVerifierService_Verify_Params();
    params_.params = params;
    params_.certVerifierRequest = certVerifierRequest;
    var builder = new codec.MessageV0Builder(
        kCertVerifierService_Verify_Name,
        codec.align(CertVerifierService_Verify_Params.encodedSize));
    builder.encodeStruct(CertVerifierService_Verify_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CertVerifierServicePtr.prototype.setConfig = function() {
    return CertVerifierServiceProxy.prototype.setConfig
        .apply(this.ptr.getProxy(), arguments);
  };

  CertVerifierServiceProxy.prototype.setConfig = function(config) {
    var params_ = new CertVerifierService_SetConfig_Params();
    params_.config = config;
    var builder = new codec.MessageV0Builder(
        kCertVerifierService_SetConfig_Name,
        codec.align(CertVerifierService_SetConfig_Params.encodedSize));
    builder.encodeStruct(CertVerifierService_SetConfig_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CertVerifierServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  CertVerifierServiceStub.prototype.enableNetworkAccess = function(urlLoaderFactory, reconnector) {
    return this.delegate_ && this.delegate_.enableNetworkAccess && this.delegate_.enableNetworkAccess(urlLoaderFactory, reconnector);
  }
  CertVerifierServiceStub.prototype.verify = function(params, certVerifierRequest) {
    return this.delegate_ && this.delegate_.verify && this.delegate_.verify(params, certVerifierRequest);
  }
  CertVerifierServiceStub.prototype.setConfig = function(config) {
    return this.delegate_ && this.delegate_.setConfig && this.delegate_.setConfig(config);
  }

  CertVerifierServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCertVerifierService_EnableNetworkAccess_Name:
      var params = reader.decodeStruct(CertVerifierService_EnableNetworkAccess_Params);
      this.enableNetworkAccess(params.urlLoaderFactory, params.reconnector);
      return true;
    case kCertVerifierService_Verify_Name:
      var params = reader.decodeStruct(CertVerifierService_Verify_Params);
      this.verify(params.params, params.certVerifierRequest);
      return true;
    case kCertVerifierService_SetConfig_Name:
      var params = reader.decodeStruct(CertVerifierService_SetConfig_Params);
      this.setConfig(params.config);
      return true;
    default:
      return false;
    }
  };

  CertVerifierServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCertVerifierServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCertVerifierService_EnableNetworkAccess_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CertVerifierService_EnableNetworkAccess_Params;
      break;
      case kCertVerifierService_Verify_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CertVerifierService_Verify_Params;
      break;
      case kCertVerifierService_SetConfig_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CertVerifierService_SetConfig_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCertVerifierServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CertVerifierService = {
    name: 'cert_verifier.mojom.CertVerifierService',
    kVersion: 0,
    ptrClass: CertVerifierServicePtr,
    proxyClass: CertVerifierServiceProxy,
    stubClass: CertVerifierServiceStub,
    validateRequest: validateCertVerifierServiceRequest,
    validateResponse: null,
  };
  CertVerifierServiceStub.prototype.validator = validateCertVerifierServiceRequest;
  CertVerifierServiceProxy.prototype.validator = null;
  var kCertVerifierRequest_Complete_Name = 873471708;

  function CertVerifierRequestPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CertVerifierRequest,
                                                   handleOrPtrInfo);
  }

  function CertVerifierRequestAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CertVerifierRequest, associatedInterfacePtrInfo);
  }

  CertVerifierRequestAssociatedPtr.prototype =
      Object.create(CertVerifierRequestPtr.prototype);
  CertVerifierRequestAssociatedPtr.prototype.constructor =
      CertVerifierRequestAssociatedPtr;

  function CertVerifierRequestProxy(receiver) {
    this.receiver_ = receiver;
  }
  CertVerifierRequestPtr.prototype.complete = function() {
    return CertVerifierRequestProxy.prototype.complete
        .apply(this.ptr.getProxy(), arguments);
  };

  CertVerifierRequestProxy.prototype.complete = function(result, netError) {
    var params_ = new CertVerifierRequest_Complete_Params();
    params_.result = result;
    params_.netError = netError;
    var builder = new codec.MessageV0Builder(
        kCertVerifierRequest_Complete_Name,
        codec.align(CertVerifierRequest_Complete_Params.encodedSize));
    builder.encodeStruct(CertVerifierRequest_Complete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CertVerifierRequestStub(delegate) {
    this.delegate_ = delegate;
  }
  CertVerifierRequestStub.prototype.complete = function(result, netError) {
    return this.delegate_ && this.delegate_.complete && this.delegate_.complete(result, netError);
  }

  CertVerifierRequestStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCertVerifierRequest_Complete_Name:
      var params = reader.decodeStruct(CertVerifierRequest_Complete_Params);
      this.complete(params.result, params.netError);
      return true;
    default:
      return false;
    }
  };

  CertVerifierRequestStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateCertVerifierRequestRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCertVerifierRequest_Complete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CertVerifierRequest_Complete_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCertVerifierRequestResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var CertVerifierRequest = {
    name: 'cert_verifier.mojom.CertVerifierRequest',
    kVersion: 0,
    ptrClass: CertVerifierRequestPtr,
    proxyClass: CertVerifierRequestProxy,
    stubClass: CertVerifierRequestStub,
    validateRequest: validateCertVerifierRequestRequest,
    validateResponse: null,
  };
  CertVerifierRequestStub.prototype.validator = validateCertVerifierRequestRequest;
  CertVerifierRequestProxy.prototype.validator = null;
  exports.RequestParams = RequestParams;
  exports.CertVerifierConfig = CertVerifierConfig;
  exports.URLLoaderFactoryConnector = URLLoaderFactoryConnector;
  exports.URLLoaderFactoryConnectorPtr = URLLoaderFactoryConnectorPtr;
  exports.URLLoaderFactoryConnectorAssociatedPtr = URLLoaderFactoryConnectorAssociatedPtr;
  exports.CertVerifierService = CertVerifierService;
  exports.CertVerifierServicePtr = CertVerifierServicePtr;
  exports.CertVerifierServiceAssociatedPtr = CertVerifierServiceAssociatedPtr;
  exports.CertVerifierRequest = CertVerifierRequest;
  exports.CertVerifierRequestPtr = CertVerifierRequestPtr;
  exports.CertVerifierRequestAssociatedPtr = CertVerifierRequestAssociatedPtr;
})();