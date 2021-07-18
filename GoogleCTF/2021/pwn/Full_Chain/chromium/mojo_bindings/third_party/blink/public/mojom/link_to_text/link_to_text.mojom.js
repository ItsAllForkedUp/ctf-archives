// third_party/blink/public/mojom/link_to_text/link_to_text.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/link_to_text/link_to_text.mojom';
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



  function TextFragmentReceiver_Cancel_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_Cancel_Params.prototype.initDefaults_ = function() {
  };
  TextFragmentReceiver_Cancel_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_Cancel_Params.validate = function(messageValidator, offset) {
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

  TextFragmentReceiver_Cancel_Params.encodedSize = codec.kStructHeaderSize + 0;

  TextFragmentReceiver_Cancel_Params.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_Cancel_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TextFragmentReceiver_Cancel_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_Cancel_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TextFragmentReceiver_RequestSelector_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_RequestSelector_Params.prototype.initDefaults_ = function() {
  };
  TextFragmentReceiver_RequestSelector_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_RequestSelector_Params.validate = function(messageValidator, offset) {
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

  TextFragmentReceiver_RequestSelector_Params.encodedSize = codec.kStructHeaderSize + 0;

  TextFragmentReceiver_RequestSelector_Params.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_RequestSelector_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TextFragmentReceiver_RequestSelector_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_RequestSelector_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TextFragmentReceiver_RequestSelector_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_RequestSelector_ResponseParams.prototype.initDefaults_ = function() {
    this.selector = null;
  };
  TextFragmentReceiver_RequestSelector_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_RequestSelector_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate TextFragmentReceiver_RequestSelector_ResponseParams.selector
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TextFragmentReceiver_RequestSelector_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TextFragmentReceiver_RequestSelector_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_RequestSelector_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.selector =
        decoder.decodeStruct(codec.String);
    return val;
  };

  TextFragmentReceiver_RequestSelector_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_RequestSelector_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.selector);
  };
  function TextFragmentReceiver_RemoveFragments_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_RemoveFragments_Params.prototype.initDefaults_ = function() {
  };
  TextFragmentReceiver_RemoveFragments_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_RemoveFragments_Params.validate = function(messageValidator, offset) {
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

  TextFragmentReceiver_RemoveFragments_Params.encodedSize = codec.kStructHeaderSize + 0;

  TextFragmentReceiver_RemoveFragments_Params.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_RemoveFragments_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TextFragmentReceiver_RemoveFragments_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_RemoveFragments_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TextFragmentReceiver_ExtractTextFragmentsMatches_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_ExtractTextFragmentsMatches_Params.prototype.initDefaults_ = function() {
  };
  TextFragmentReceiver_ExtractTextFragmentsMatches_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_ExtractTextFragmentsMatches_Params.validate = function(messageValidator, offset) {
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

  TextFragmentReceiver_ExtractTextFragmentsMatches_Params.encodedSize = codec.kStructHeaderSize + 0;

  TextFragmentReceiver_ExtractTextFragmentsMatches_Params.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_ExtractTextFragmentsMatches_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TextFragmentReceiver_ExtractTextFragmentsMatches_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_ExtractTextFragmentsMatches_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams.prototype.initDefaults_ = function() {
    this.text = null;
  };
  TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams.text
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.text =
        decoder.decodeArrayPointer(codec.String);
    return val;
  };

  TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.text);
  };
  function TextFragmentReceiver_GetExistingSelectors_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_GetExistingSelectors_Params.prototype.initDefaults_ = function() {
  };
  TextFragmentReceiver_GetExistingSelectors_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_GetExistingSelectors_Params.validate = function(messageValidator, offset) {
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

  TextFragmentReceiver_GetExistingSelectors_Params.encodedSize = codec.kStructHeaderSize + 0;

  TextFragmentReceiver_GetExistingSelectors_Params.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_GetExistingSelectors_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TextFragmentReceiver_GetExistingSelectors_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_GetExistingSelectors_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TextFragmentReceiver_GetExistingSelectors_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_GetExistingSelectors_ResponseParams.prototype.initDefaults_ = function() {
    this.selectors = null;
  };
  TextFragmentReceiver_GetExistingSelectors_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_GetExistingSelectors_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate TextFragmentReceiver_GetExistingSelectors_ResponseParams.selectors
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TextFragmentReceiver_GetExistingSelectors_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TextFragmentReceiver_GetExistingSelectors_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_GetExistingSelectors_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.selectors =
        decoder.decodeArrayPointer(codec.String);
    return val;
  };

  TextFragmentReceiver_GetExistingSelectors_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_GetExistingSelectors_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.selectors);
  };
  function TextFragmentReceiver_ExtractFirstFragmentRect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_ExtractFirstFragmentRect_Params.prototype.initDefaults_ = function() {
  };
  TextFragmentReceiver_ExtractFirstFragmentRect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_ExtractFirstFragmentRect_Params.validate = function(messageValidator, offset) {
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

  TextFragmentReceiver_ExtractFirstFragmentRect_Params.encodedSize = codec.kStructHeaderSize + 0;

  TextFragmentReceiver_ExtractFirstFragmentRect_Params.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_ExtractFirstFragmentRect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TextFragmentReceiver_ExtractFirstFragmentRect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_ExtractFirstFragmentRect_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams.prototype.initDefaults_ = function() {
    this.bounds = null;
  };
  TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams.bounds
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bounds =
        decoder.decodeStructPointer(geometry$.Rect);
    return val;
  };

  TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Rect, val.bounds);
  };
  var kTextFragmentReceiver_Cancel_Name = 0;
  var kTextFragmentReceiver_RequestSelector_Name = 1;
  var kTextFragmentReceiver_RemoveFragments_Name = 2;
  var kTextFragmentReceiver_ExtractTextFragmentsMatches_Name = 3;
  var kTextFragmentReceiver_GetExistingSelectors_Name = 4;
  var kTextFragmentReceiver_ExtractFirstFragmentRect_Name = 5;

  function TextFragmentReceiverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TextFragmentReceiver,
                                                   handleOrPtrInfo);
  }

  function TextFragmentReceiverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TextFragmentReceiver, associatedInterfacePtrInfo);
  }

  TextFragmentReceiverAssociatedPtr.prototype =
      Object.create(TextFragmentReceiverPtr.prototype);
  TextFragmentReceiverAssociatedPtr.prototype.constructor =
      TextFragmentReceiverAssociatedPtr;

  function TextFragmentReceiverProxy(receiver) {
    this.receiver_ = receiver;
  }
  TextFragmentReceiverPtr.prototype.cancel = function() {
    return TextFragmentReceiverProxy.prototype.cancel
        .apply(this.ptr.getProxy(), arguments);
  };

  TextFragmentReceiverProxy.prototype.cancel = function() {
    var params_ = new TextFragmentReceiver_Cancel_Params();
    var builder = new codec.MessageV0Builder(
        kTextFragmentReceiver_Cancel_Name,
        codec.align(TextFragmentReceiver_Cancel_Params.encodedSize));
    builder.encodeStruct(TextFragmentReceiver_Cancel_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  TextFragmentReceiverPtr.prototype.requestSelector = function() {
    return TextFragmentReceiverProxy.prototype.requestSelector
        .apply(this.ptr.getProxy(), arguments);
  };

  TextFragmentReceiverProxy.prototype.requestSelector = function() {
    var params_ = new TextFragmentReceiver_RequestSelector_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTextFragmentReceiver_RequestSelector_Name,
          codec.align(TextFragmentReceiver_RequestSelector_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TextFragmentReceiver_RequestSelector_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TextFragmentReceiver_RequestSelector_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TextFragmentReceiverPtr.prototype.removeFragments = function() {
    return TextFragmentReceiverProxy.prototype.removeFragments
        .apply(this.ptr.getProxy(), arguments);
  };

  TextFragmentReceiverProxy.prototype.removeFragments = function() {
    var params_ = new TextFragmentReceiver_RemoveFragments_Params();
    var builder = new codec.MessageV0Builder(
        kTextFragmentReceiver_RemoveFragments_Name,
        codec.align(TextFragmentReceiver_RemoveFragments_Params.encodedSize));
    builder.encodeStruct(TextFragmentReceiver_RemoveFragments_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  TextFragmentReceiverPtr.prototype.extractTextFragmentsMatches = function() {
    return TextFragmentReceiverProxy.prototype.extractTextFragmentsMatches
        .apply(this.ptr.getProxy(), arguments);
  };

  TextFragmentReceiverProxy.prototype.extractTextFragmentsMatches = function() {
    var params_ = new TextFragmentReceiver_ExtractTextFragmentsMatches_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTextFragmentReceiver_ExtractTextFragmentsMatches_Name,
          codec.align(TextFragmentReceiver_ExtractTextFragmentsMatches_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TextFragmentReceiver_ExtractTextFragmentsMatches_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TextFragmentReceiverPtr.prototype.getExistingSelectors = function() {
    return TextFragmentReceiverProxy.prototype.getExistingSelectors
        .apply(this.ptr.getProxy(), arguments);
  };

  TextFragmentReceiverProxy.prototype.getExistingSelectors = function() {
    var params_ = new TextFragmentReceiver_GetExistingSelectors_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTextFragmentReceiver_GetExistingSelectors_Name,
          codec.align(TextFragmentReceiver_GetExistingSelectors_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TextFragmentReceiver_GetExistingSelectors_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TextFragmentReceiver_GetExistingSelectors_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  TextFragmentReceiverPtr.prototype.extractFirstFragmentRect = function() {
    return TextFragmentReceiverProxy.prototype.extractFirstFragmentRect
        .apply(this.ptr.getProxy(), arguments);
  };

  TextFragmentReceiverProxy.prototype.extractFirstFragmentRect = function() {
    var params_ = new TextFragmentReceiver_ExtractFirstFragmentRect_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTextFragmentReceiver_ExtractFirstFragmentRect_Name,
          codec.align(TextFragmentReceiver_ExtractFirstFragmentRect_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TextFragmentReceiver_ExtractFirstFragmentRect_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TextFragmentReceiverStub(delegate) {
    this.delegate_ = delegate;
  }
  TextFragmentReceiverStub.prototype.cancel = function() {
    return this.delegate_ && this.delegate_.cancel && this.delegate_.cancel();
  }
  TextFragmentReceiverStub.prototype.requestSelector = function() {
    return this.delegate_ && this.delegate_.requestSelector && this.delegate_.requestSelector();
  }
  TextFragmentReceiverStub.prototype.removeFragments = function() {
    return this.delegate_ && this.delegate_.removeFragments && this.delegate_.removeFragments();
  }
  TextFragmentReceiverStub.prototype.extractTextFragmentsMatches = function() {
    return this.delegate_ && this.delegate_.extractTextFragmentsMatches && this.delegate_.extractTextFragmentsMatches();
  }
  TextFragmentReceiverStub.prototype.getExistingSelectors = function() {
    return this.delegate_ && this.delegate_.getExistingSelectors && this.delegate_.getExistingSelectors();
  }
  TextFragmentReceiverStub.prototype.extractFirstFragmentRect = function() {
    return this.delegate_ && this.delegate_.extractFirstFragmentRect && this.delegate_.extractFirstFragmentRect();
  }

  TextFragmentReceiverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTextFragmentReceiver_Cancel_Name:
      var params = reader.decodeStruct(TextFragmentReceiver_Cancel_Params);
      this.cancel();
      return true;
    case kTextFragmentReceiver_RemoveFragments_Name:
      var params = reader.decodeStruct(TextFragmentReceiver_RemoveFragments_Params);
      this.removeFragments();
      return true;
    default:
      return false;
    }
  };

  TextFragmentReceiverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTextFragmentReceiver_RequestSelector_Name:
      var params = reader.decodeStruct(TextFragmentReceiver_RequestSelector_Params);
      this.requestSelector().then(function(response) {
        var responseParams =
            new TextFragmentReceiver_RequestSelector_ResponseParams();
        responseParams.selector = response.selector;
        var builder = new codec.MessageV1Builder(
            kTextFragmentReceiver_RequestSelector_Name,
            codec.align(TextFragmentReceiver_RequestSelector_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TextFragmentReceiver_RequestSelector_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTextFragmentReceiver_ExtractTextFragmentsMatches_Name:
      var params = reader.decodeStruct(TextFragmentReceiver_ExtractTextFragmentsMatches_Params);
      this.extractTextFragmentsMatches().then(function(response) {
        var responseParams =
            new TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams();
        responseParams.text = response.text;
        var builder = new codec.MessageV1Builder(
            kTextFragmentReceiver_ExtractTextFragmentsMatches_Name,
            codec.align(TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTextFragmentReceiver_GetExistingSelectors_Name:
      var params = reader.decodeStruct(TextFragmentReceiver_GetExistingSelectors_Params);
      this.getExistingSelectors().then(function(response) {
        var responseParams =
            new TextFragmentReceiver_GetExistingSelectors_ResponseParams();
        responseParams.selectors = response.selectors;
        var builder = new codec.MessageV1Builder(
            kTextFragmentReceiver_GetExistingSelectors_Name,
            codec.align(TextFragmentReceiver_GetExistingSelectors_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TextFragmentReceiver_GetExistingSelectors_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kTextFragmentReceiver_ExtractFirstFragmentRect_Name:
      var params = reader.decodeStruct(TextFragmentReceiver_ExtractFirstFragmentRect_Params);
      this.extractFirstFragmentRect().then(function(response) {
        var responseParams =
            new TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams();
        responseParams.bounds = response.bounds;
        var builder = new codec.MessageV1Builder(
            kTextFragmentReceiver_ExtractFirstFragmentRect_Name,
            codec.align(TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateTextFragmentReceiverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTextFragmentReceiver_Cancel_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TextFragmentReceiver_Cancel_Params;
      break;
      case kTextFragmentReceiver_RequestSelector_Name:
        if (message.expectsResponse())
          paramsClass = TextFragmentReceiver_RequestSelector_Params;
      break;
      case kTextFragmentReceiver_RemoveFragments_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TextFragmentReceiver_RemoveFragments_Params;
      break;
      case kTextFragmentReceiver_ExtractTextFragmentsMatches_Name:
        if (message.expectsResponse())
          paramsClass = TextFragmentReceiver_ExtractTextFragmentsMatches_Params;
      break;
      case kTextFragmentReceiver_GetExistingSelectors_Name:
        if (message.expectsResponse())
          paramsClass = TextFragmentReceiver_GetExistingSelectors_Params;
      break;
      case kTextFragmentReceiver_ExtractFirstFragmentRect_Name:
        if (message.expectsResponse())
          paramsClass = TextFragmentReceiver_ExtractFirstFragmentRect_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTextFragmentReceiverResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTextFragmentReceiver_RequestSelector_Name:
        if (message.isResponse())
          paramsClass = TextFragmentReceiver_RequestSelector_ResponseParams;
        break;
      case kTextFragmentReceiver_ExtractTextFragmentsMatches_Name:
        if (message.isResponse())
          paramsClass = TextFragmentReceiver_ExtractTextFragmentsMatches_ResponseParams;
        break;
      case kTextFragmentReceiver_GetExistingSelectors_Name:
        if (message.isResponse())
          paramsClass = TextFragmentReceiver_GetExistingSelectors_ResponseParams;
        break;
      case kTextFragmentReceiver_ExtractFirstFragmentRect_Name:
        if (message.isResponse())
          paramsClass = TextFragmentReceiver_ExtractFirstFragmentRect_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TextFragmentReceiver = {
    name: 'blink.mojom.TextFragmentReceiver',
    kVersion: 0,
    ptrClass: TextFragmentReceiverPtr,
    proxyClass: TextFragmentReceiverProxy,
    stubClass: TextFragmentReceiverStub,
    validateRequest: validateTextFragmentReceiverRequest,
    validateResponse: validateTextFragmentReceiverResponse,
  };
  TextFragmentReceiverStub.prototype.validator = validateTextFragmentReceiverRequest;
  TextFragmentReceiverProxy.prototype.validator = validateTextFragmentReceiverResponse;
  exports.TextFragmentReceiver = TextFragmentReceiver;
  exports.TextFragmentReceiverPtr = TextFragmentReceiverPtr;
  exports.TextFragmentReceiverAssociatedPtr = TextFragmentReceiverAssociatedPtr;
})();