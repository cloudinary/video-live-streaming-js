# LiveStreamApi

All URIs are relative to *https://api.cloudinary.com/v2/CLOUD_NAME/video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateLiveStream**](LiveStreamApi.md#activateLiveStream) | **POST** /live_streams/{liveStreamId}/activate | Manually activate a live stream
[**createLiveStream**](LiveStreamApi.md#createLiveStream) | **POST** /live_streams | Create a new live stream
[**createLiveStreamOutput**](LiveStreamApi.md#createLiveStreamOutput) | **POST** /live_streams/{liveStreamId}/outputs | Create a new live stream output
[**deleteLiveStream**](LiveStreamApi.md#deleteLiveStream) | **DELETE** /live_streams/{liveStreamId} | Delete a live stream
[**deleteLiveStreamOutput**](LiveStreamApi.md#deleteLiveStreamOutput) | **DELETE** /live_streams/{liveStreamId}/outputs/{liveStreamOutputId} | Delete a live stream output
[**getLiveStream**](LiveStreamApi.md#getLiveStream) | **GET** /live_streams/{liveStreamId} | Get a single live stream
[**getLiveStreamOutput**](LiveStreamApi.md#getLiveStreamOutput) | **GET** /live_streams/{liveStreamId}/outputs/{liveStreamOutputId} | Get a single live stream output
[**getLiveStreamOutputs**](LiveStreamApi.md#getLiveStreamOutputs) | **GET** /live_streams/{liveStreamId}/outputs | Get a list of live stream outputs
[**getLiveStreams**](LiveStreamApi.md#getLiveStreams) | **GET** /live_streams | Get a list of live streams
[**idleLiveStream**](LiveStreamApi.md#idleLiveStream) | **POST** /live_streams/{liveStreamId}/idle | Manually idle a live stream
[**updateLiveStream**](LiveStreamApi.md#updateLiveStream) | **PATCH** /live_streams/{liveStreamId} | Update a live stream
[**updateLiveStreamOutput**](LiveStreamApi.md#updateLiveStreamOutput) | **PATCH** /live_streams/{liveStreamId}/outputs/{liveStreamOutputId} | Update a live stream output


# **activateLiveStream**
> MessageWrappedResponse activateLiveStream(liveStreamId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type ErrorWrappedResponse,
    type MessageWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";

// Example using parameters
apiInstance.activateLiveStream(liveStreamId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |


### Return type

**MessageWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createLiveStream**
> LiveStreamWrappedResponse createLiveStream()


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type ErrorWrappedResponse,
    type LiveStreamCreatePayload,
    type LiveStreamWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// LiveStreamCreatePayload (optional)
const liveStreamCreatePayload: LiveStreamCreatePayload = {
    name: "My first stream",
    input: {
      type: "rtmp",
    },
    idleTimeoutSec: 120,
    maxRuntimeSec: 10800,
  };

// Example using parameters
apiInstance.createLiveStream(liveStreamCreatePayload)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamCreatePayload** | **LiveStreamCreatePayload**|  |


### Return type

**LiveStreamWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | created live stream |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createLiveStreamOutput**
> LiveStreamOutputWrappedResponse createLiveStreamOutput(liveStreamId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type LiveStreamOutputWrappedResponse,
    type LiveStreamOutputCreatePayload,
    type ErrorWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";
// LiveStreamOutputCreatePayload (optional)
const liveStreamOutputCreatePayload: LiveStreamOutputCreatePayload = {
    name: "main stream",
    type: "hls",
    uri: "rtmp://a.rtmp.youtube.com/live2",
    streamKey: "f11c043da975e2a8ad9ebae0b6ec0bd7",
    vendor: "youtube",
    publicId: "main_stream_archive",
  };

// Example using parameters
apiInstance.createLiveStreamOutput(liveStreamId, liveStreamOutputCreatePayload)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |
 **liveStreamOutputCreatePayload** | **LiveStreamOutputCreatePayload**|  |


### Return type

**LiveStreamOutputWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | created live stream output |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteLiveStream**
> MessageWrappedResponse deleteLiveStream(liveStreamId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type ErrorWrappedResponse,
    type MessageWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";

// Example using parameters
apiInstance.deleteLiveStream(liveStreamId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |


### Return type

**MessageWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |
**404** | live stream not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteLiveStreamOutput**
> MessageWrappedResponse deleteLiveStreamOutput(liveStreamId, liveStreamOutputId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type ErrorWrappedResponse,
    type MessageWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";
// string | live stream output id
const liveStreamOutputId: string = "liveStreamOutputId_example";

// Example using parameters
apiInstance.deleteLiveStreamOutput(liveStreamId, liveStreamOutputId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |
 **liveStreamOutputId** | **string**| live stream output id |


### Return type

**MessageWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |
**404** | live stream output not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLiveStream**
> LiveStreamWrappedResponse getLiveStream(liveStreamId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type ErrorWrappedResponse,
    type LiveStreamWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";

// Example using parameters
apiInstance.getLiveStream(liveStreamId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |


### Return type

**LiveStreamWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a live stream |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |
**404** | live stream not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLiveStreamOutput**
> LiveStreamOutputWrappedResponse getLiveStreamOutput(liveStreamId, liveStreamOutputId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type LiveStreamOutputWrappedResponse,
    type ErrorWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";
// string | live stream output id
const liveStreamOutputId: string = "liveStreamOutputId_example";

// Example using parameters
apiInstance.getLiveStreamOutput(liveStreamId, liveStreamOutputId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |
 **liveStreamOutputId** | **string**| live stream output id |


### Return type

**LiveStreamOutputWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a live stream output |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |
**404** | live stream output not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLiveStreamOutputs**
> LiveStreamOutputsWrappedResponse getLiveStreamOutputs(liveStreamId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type LiveStreamOutputsWrappedResponse,
    type ErrorWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";

// Example using parameters
apiInstance.getLiveStreamOutputs(liveStreamId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |


### Return type

**LiveStreamOutputsWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of outputs for a live stream |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLiveStreams**
> LiveStreamsWrappedResponse getLiveStreams()


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type LiveStreamsWrappedResponse,
    type ErrorWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();


// Example using parameters
apiInstance.getLiveStreams()
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters
This endpoint does not need any parameter.


### Return type

**LiveStreamsWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of live streams |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **idleLiveStream**
> MessageWrappedResponse idleLiveStream(liveStreamId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type ErrorWrappedResponse,
    type MessageWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";

// Example using parameters
apiInstance.idleLiveStream(liveStreamId)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |


### Return type

**MessageWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLiveStream**
> LiveStreamWrappedResponse updateLiveStream(liveStreamId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type LiveStreamUpdatePayload,
    type ErrorWrappedResponse,
    type LiveStreamWrappedResponse,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";
// LiveStreamUpdatePayload (optional)
const liveStreamUpdatePayload: LiveStreamUpdatePayload = {
    name: "My first stream",
    idleTimeoutSec: 120,
    maxRuntimeSec: 10800,
  };

// Example using parameters
apiInstance.updateLiveStream(liveStreamId, liveStreamUpdatePayload)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |
 **liveStreamUpdatePayload** | **LiveStreamUpdatePayload**|  |


### Return type

**LiveStreamWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a live stream |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |
**404** | live stream not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLiveStreamOutput**
> LiveStreamOutputWrappedResponse updateLiveStreamOutput(liveStreamId, liveStreamOutputId)


### Example

```typescript
import {
    LiveStreamApi,
    ICloudinaryUrlConfig,
    type LiveStreamOutputWrappedResponse,
    type ErrorWrappedResponse,
    type LiveStreamOutputUpdatePayload,
} from '@cloudinary/video-live-streaming';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new LiveStreamApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new LiveStreamApi();

// string | live stream id
const liveStreamId: string = "liveStreamId_example";
// string | live stream output id
const liveStreamOutputId: string = "liveStreamOutputId_example";
// LiveStreamOutputUpdatePayload (optional)
const liveStreamOutputUpdatePayload: LiveStreamOutputUpdatePayload = {
    name: "main stream",
    uri: "rtmp://a.rtmp.youtube.com/live2/f11c043da975e2a8ad9ebae0b6ec0bd7",
    streamKey: "f11c043da975e2a8ad9ebae0b6ec0bd7",
    publicId: "main_stream_archive",
  };

// Example using parameters
apiInstance.updateLiveStreamOutput(liveStreamId, liveStreamOutputId, liveStreamOutputUpdatePayload)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| live stream id |
 **liveStreamOutputId** | **string**| live stream output id |
 **liveStreamOutputUpdatePayload** | **LiveStreamOutputUpdatePayload**|  |


### Return type

**LiveStreamOutputWrappedResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a live stream output |  -  |
**401** | authentication error |  -  |
**403** | authorization error |  -  |
**404** | live stream output not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

