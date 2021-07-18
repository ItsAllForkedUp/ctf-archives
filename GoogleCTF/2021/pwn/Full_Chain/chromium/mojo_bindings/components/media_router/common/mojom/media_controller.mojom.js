// components/media_router/common/mojom/media_controller.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/media_router/common/mojom/media_controller.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mediaRouter.mojom');
  var media_status$ =
      mojo.internal.exposeNamespace('mediaRouter.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/media_router/common/mojom/media_status.mojom', 'media_status.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }



  function MediaController_Play_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Play_Params.prototype.initDefaults_ = function() {
  };
  MediaController_Play_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Play_Params.validate = function(messageValidator, offset) {
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

  MediaController_Play_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_Play_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Play_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_Play_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Play_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_Pause_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Pause_Params.prototype.initDefaults_ = function() {
  };
  MediaController_Pause_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Pause_Params.validate = function(messageValidator, offset) {
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

  MediaController_Pause_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_Pause_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Pause_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_Pause_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Pause_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_SetMute_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_SetMute_Params.prototype.initDefaults_ = function() {
    this.mute = false;
  };
  MediaController_SetMute_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_SetMute_Params.validate = function(messageValidator, offset) {
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

  MediaController_SetMute_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaController_SetMute_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_SetMute_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.mute = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaController_SetMute_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_SetMute_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.mute & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaController_SetVolume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_SetVolume_Params.prototype.initDefaults_ = function() {
    this.volume = 0;
  };
  MediaController_SetVolume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_SetVolume_Params.validate = function(messageValidator, offset) {
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

  MediaController_SetVolume_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaController_SetVolume_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_SetVolume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.volume =
        decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MediaController_SetVolume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_SetVolume_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.volume);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MediaController_Seek_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_Seek_Params.prototype.initDefaults_ = function() {
    this.time = null;
  };
  MediaController_Seek_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_Seek_Params.validate = function(messageValidator, offset) {
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


    // validate MediaController_Seek_Params.time
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MediaController_Seek_Params.encodedSize = codec.kStructHeaderSize + 8;

  MediaController_Seek_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_Seek_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.time =
        decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  MediaController_Seek_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_Seek_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.time);
  };
  function MediaController_NextTrack_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_NextTrack_Params.prototype.initDefaults_ = function() {
  };
  MediaController_NextTrack_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_NextTrack_Params.validate = function(messageValidator, offset) {
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

  MediaController_NextTrack_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_NextTrack_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_NextTrack_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_NextTrack_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_NextTrack_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MediaController_PreviousTrack_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MediaController_PreviousTrack_Params.prototype.initDefaults_ = function() {
  };
  MediaController_PreviousTrack_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MediaController_PreviousTrack_Params.validate = function(messageValidator, offset) {
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

  MediaController_PreviousTrack_Params.encodedSize = codec.kStructHeaderSize + 0;

  MediaController_PreviousTrack_Params.decode = function(decoder) {
    var packed;
    var val = new MediaController_PreviousTrack_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MediaController_PreviousTrack_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MediaController_PreviousTrack_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kMediaController_Play_Name = 1736507391;
  var kMediaController_Pause_Name = 1694602295;
  var kMediaController_SetMute_Name = 484902119;
  var kMediaController_SetVolume_Name = 2142887207;
  var kMediaController_Seek_Name = 521168912;
  var kMediaController_NextTrack_Name = 1314007929;
  var kMediaController_PreviousTrack_Name = 1457478134;

  function MediaControllerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MediaController,
                                                   handleOrPtrInfo);
  }

  function MediaControllerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MediaController, associatedInterfacePtrInfo);
  }

  MediaControllerAssociatedPtr.prototype =
      Object.create(MediaControllerPtr.prototype);
  MediaControllerAssociatedPtr.prototype.constructor =
      MediaControllerAssociatedPtr;

  function MediaControllerProxy(receiver) {
    this.receiver_ = receiver;
  }
  MediaControllerPtr.prototype.play = function() {
    return MediaControllerProxy.prototype.play
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.play = function() {
    var params_ = new MediaController_Play_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_Play_Name,
        codec.align(MediaController_Play_Params.encodedSize));
    builder.encodeStruct(MediaController_Play_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.pause = function() {
    return MediaControllerProxy.prototype.pause
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.pause = function() {
    var params_ = new MediaController_Pause_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_Pause_Name,
        codec.align(MediaController_Pause_Params.encodedSize));
    builder.encodeStruct(MediaController_Pause_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.setMute = function() {
    return MediaControllerProxy.prototype.setMute
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.setMute = function(mute) {
    var params_ = new MediaController_SetMute_Params();
    params_.mute = mute;
    var builder = new codec.MessageV0Builder(
        kMediaController_SetMute_Name,
        codec.align(MediaController_SetMute_Params.encodedSize));
    builder.encodeStruct(MediaController_SetMute_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.setVolume = function() {
    return MediaControllerProxy.prototype.setVolume
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.setVolume = function(volume) {
    var params_ = new MediaController_SetVolume_Params();
    params_.volume = volume;
    var builder = new codec.MessageV0Builder(
        kMediaController_SetVolume_Name,
        codec.align(MediaController_SetVolume_Params.encodedSize));
    builder.encodeStruct(MediaController_SetVolume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.seek = function() {
    return MediaControllerProxy.prototype.seek
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.seek = function(time) {
    var params_ = new MediaController_Seek_Params();
    params_.time = time;
    var builder = new codec.MessageV0Builder(
        kMediaController_Seek_Name,
        codec.align(MediaController_Seek_Params.encodedSize));
    builder.encodeStruct(MediaController_Seek_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.nextTrack = function() {
    return MediaControllerProxy.prototype.nextTrack
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.nextTrack = function() {
    var params_ = new MediaController_NextTrack_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_NextTrack_Name,
        codec.align(MediaController_NextTrack_Params.encodedSize));
    builder.encodeStruct(MediaController_NextTrack_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MediaControllerPtr.prototype.previousTrack = function() {
    return MediaControllerProxy.prototype.previousTrack
        .apply(this.ptr.getProxy(), arguments);
  };

  MediaControllerProxy.prototype.previousTrack = function() {
    var params_ = new MediaController_PreviousTrack_Params();
    var builder = new codec.MessageV0Builder(
        kMediaController_PreviousTrack_Name,
        codec.align(MediaController_PreviousTrack_Params.encodedSize));
    builder.encodeStruct(MediaController_PreviousTrack_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function MediaControllerStub(delegate) {
    this.delegate_ = delegate;
  }
  MediaControllerStub.prototype.play = function() {
    return this.delegate_ && this.delegate_.play && this.delegate_.play();
  }
  MediaControllerStub.prototype.pause = function() {
    return this.delegate_ && this.delegate_.pause && this.delegate_.pause();
  }
  MediaControllerStub.prototype.setMute = function(mute) {
    return this.delegate_ && this.delegate_.setMute && this.delegate_.setMute(mute);
  }
  MediaControllerStub.prototype.setVolume = function(volume) {
    return this.delegate_ && this.delegate_.setVolume && this.delegate_.setVolume(volume);
  }
  MediaControllerStub.prototype.seek = function(time) {
    return this.delegate_ && this.delegate_.seek && this.delegate_.seek(time);
  }
  MediaControllerStub.prototype.nextTrack = function() {
    return this.delegate_ && this.delegate_.nextTrack && this.delegate_.nextTrack();
  }
  MediaControllerStub.prototype.previousTrack = function() {
    return this.delegate_ && this.delegate_.previousTrack && this.delegate_.previousTrack();
  }

  MediaControllerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMediaController_Play_Name:
      var params = reader.decodeStruct(MediaController_Play_Params);
      this.play();
      return true;
    case kMediaController_Pause_Name:
      var params = reader.decodeStruct(MediaController_Pause_Params);
      this.pause();
      return true;
    case kMediaController_SetMute_Name:
      var params = reader.decodeStruct(MediaController_SetMute_Params);
      this.setMute(params.mute);
      return true;
    case kMediaController_SetVolume_Name:
      var params = reader.decodeStruct(MediaController_SetVolume_Params);
      this.setVolume(params.volume);
      return true;
    case kMediaController_Seek_Name:
      var params = reader.decodeStruct(MediaController_Seek_Params);
      this.seek(params.time);
      return true;
    case kMediaController_NextTrack_Name:
      var params = reader.decodeStruct(MediaController_NextTrack_Params);
      this.nextTrack();
      return true;
    case kMediaController_PreviousTrack_Name:
      var params = reader.decodeStruct(MediaController_PreviousTrack_Params);
      this.previousTrack();
      return true;
    default:
      return false;
    }
  };

  MediaControllerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateMediaControllerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMediaController_Play_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Play_Params;
      break;
      case kMediaController_Pause_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Pause_Params;
      break;
      case kMediaController_SetMute_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_SetMute_Params;
      break;
      case kMediaController_SetVolume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_SetVolume_Params;
      break;
      case kMediaController_Seek_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_Seek_Params;
      break;
      case kMediaController_NextTrack_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_NextTrack_Params;
      break;
      case kMediaController_PreviousTrack_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MediaController_PreviousTrack_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMediaControllerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var MediaController = {
    name: 'media_router.mojom.MediaController',
    kVersion: 0,
    ptrClass: MediaControllerPtr,
    proxyClass: MediaControllerProxy,
    stubClass: MediaControllerStub,
    validateRequest: validateMediaControllerRequest,
    validateResponse: null,
  };
  MediaControllerStub.prototype.validator = validateMediaControllerRequest;
  MediaControllerProxy.prototype.validator = null;
  exports.MediaController = MediaController;
  exports.MediaControllerPtr = MediaControllerPtr;
  exports.MediaControllerAssociatedPtr = MediaControllerAssociatedPtr;
})();