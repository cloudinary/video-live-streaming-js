# Cloudinary Video Live Streaming (Beta)

Use the Video Live Streaming API to create and manage your RTMP live streams. This includes managing outputs as well as manually starting and stopping streams. See the [live streaming guide](https://cloudinary.com/documentation/video_live_streaming) for information on how to use the Live Streaming API to stream video to your users.

  **Note**: The Live Streaming API is currently in development and is available as a Public Beta, which means we value your feedback, so please feel free to [share any thoughts with us](https://support.cloudinary.com/hc/en-us/requests/new).

  The API supports Basic Authentication using your Cloudinary API Key and API Secret (which can be found on the Dashboard page of your [Cloudinary Console](https://console.cloudinary.com/pm)).


### API Endpoints

All URIs are relative to *https://api.cloudinary.com/v2/CLOUD_NAME/video*

| Class | Method | HTTP request | Description |
| ------------ | ------------- | ------------- | ------------- |
*LiveStreamApi* | [**activateLiveStream**](LiveStreamApi.md#activateLiveStream) | **POST** /live_streams/{liveStreamId}/activate | Manually activate a live stream
*LiveStreamApi* | [**createLiveStream**](LiveStreamApi.md#createLiveStream) | **POST** /live_streams | Create a new live stream
*LiveStreamApi* | [**createLiveStreamOutput**](LiveStreamApi.md#createLiveStreamOutput) | **POST** /live_streams/{liveStreamId}/outputs | Create a new live stream output
*LiveStreamApi* | [**deleteLiveStream**](LiveStreamApi.md#deleteLiveStream) | **DELETE** /live_streams/{liveStreamId} | Delete a live stream
*LiveStreamApi* | [**deleteLiveStreamOutput**](LiveStreamApi.md#deleteLiveStreamOutput) | **DELETE** /live_streams/{liveStreamId}/outputs/{liveStreamOutputId} | Delete a live stream output
*LiveStreamApi* | [**getLiveStream**](LiveStreamApi.md#getLiveStream) | **GET** /live_streams/{liveStreamId} | Get a single live stream
*LiveStreamApi* | [**getLiveStreamOutput**](LiveStreamApi.md#getLiveStreamOutput) | **GET** /live_streams/{liveStreamId}/outputs/{liveStreamOutputId} | Get a single live stream output
*LiveStreamApi* | [**getLiveStreamOutputs**](LiveStreamApi.md#getLiveStreamOutputs) | **GET** /live_streams/{liveStreamId}/outputs | Get a list of live stream outputs
*LiveStreamApi* | [**getLiveStreams**](LiveStreamApi.md#getLiveStreams) | **GET** /live_streams | Get a list of live streams
*LiveStreamApi* | [**idleLiveStream**](LiveStreamApi.md#idleLiveStream) | **POST** /live_streams/{liveStreamId}/idle | Manually idle a live stream
*LiveStreamApi* | [**updateLiveStream**](LiveStreamApi.md#updateLiveStream) | **PATCH** /live_streams/{liveStreamId} | Update a live stream
*LiveStreamApi* | [**updateLiveStreamOutput**](LiveStreamApi.md#updateLiveStreamOutput) | **PATCH** /live_streams/{liveStreamId}/outputs/{liveStreamOutputId} | Update a live stream output


### Models

 - [ErrorWrappedResponse](ErrorWrappedResponse.md)
 - [LiveStreamCreatePayload](LiveStreamCreatePayload.md)
 - [LiveStreamInputCreatePayload](LiveStreamInputCreatePayload.md)
 - [LiveStreamInputResponse](LiveStreamInputResponse.md)
 - [LiveStreamOutputCreatePayload](LiveStreamOutputCreatePayload.md)
 - [LiveStreamOutputResponse](LiveStreamOutputResponse.md)
 - [LiveStreamOutputUpdatePayload](LiveStreamOutputUpdatePayload.md)
 - [LiveStreamOutputWrappedResponse](LiveStreamOutputWrappedResponse.md)
 - [LiveStreamOutputsWrappedResponse](LiveStreamOutputsWrappedResponse.md)
 - [LiveStreamResponse](LiveStreamResponse.md)
 - [LiveStreamUpdatePayload](LiveStreamUpdatePayload.md)
 - [LiveStreamWrappedResponse](LiveStreamWrappedResponse.md)
 - [LiveStreamsWrappedResponse](LiveStreamsWrappedResponse.md)
 - [MessageWrappedResponse](MessageWrappedResponse.md)
 - [MessageWrappedResponseData](MessageWrappedResponseData.md)


## Installation
```bash
npm install @cloudinary/video-live-streaming
```

## Get Help
If you run into an issue or have a question, you can either:
- Issues related to the SDK: [Open a Github issue](https://github.com/cloudinary/media-editing-js/issues)
- Issues related to your account: [Open a support ticket](https://cloudinary.com/contact)

## Additional Resources
- [Cloudinary Transformation and REST API References](https://cloudinary.com/documentation/cloudinary_references): Comprehensive references, including syntax and examples for all SDKs.
- [MediaJams.dev](https://mediajams.dev/): Bite-size use-case tutorials written by and for Cloudinary Developers
- [DevJams](https://www.youtube.com/playlist?list=PL8dVGjLA2oMr09amgERARsZyrOz_sPvqw): Cloudinary developer podcasts on YouTube.
- [Cloudinary Academy](https://training.cloudinary.com/): Free self-paced courses, instructor-led virtual courses, and on-site courses.
- [Code Explorers and Feature Demos](https://cloudinary.com/documentation/code_explorers_demos_index): A one-stop shop for all code explorers, Postman collections, and feature demos found in the docs.
- [Cloudinary Roadmap](https://cloudinary.com/roadmap): Your chance to follow, vote, or suggest what Cloudinary should develop next.
- [Cloudinary Facebook Community](https://www.facebook.com/groups/CloudinaryCommunity): Learn from and offer help to other Cloudinary developers.
- [Cloudinary Account Registration](https://cloudinary.com/users/register/free): Free Cloudinary account registration.
- [Cloudinary Website](https://cloudinary.com)


## Licence
Released under the MIT license.
