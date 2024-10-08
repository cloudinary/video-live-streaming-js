/**
 * Video Live Streaming (Beta)
 * Use the Video Live Streaming API to create and manage your RTMP live streams. This includes managing outputs as well as manually starting and stopping streams. See the [live streaming guide](https://cloudinary.com/documentation/video_live_streaming) for information on how to use the Live Streaming API to stream video to your users.    **Note**: The Live Streaming API is currently in development and is available as a Public Beta, which means we value your feedback, so please feel free to [share any thoughts with us](https://support.cloudinary.com/hc/en-us/requests/new).    The API supports Basic Authentication using your Cloudinary API Key and API Secret (which can be found on the Dashboard page of your [Cloudinary Console](https://console.cloudinary.com/pm)). 
 */

import { RequestFile } from './models';

export class LiveStreamUpdatePayload {
    'name'?: string | null;
    'idleTimeoutSec'?: number | null;
    'maxRuntimeSec'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "idleTimeoutSec",
            "baseName": "idle_timeout_sec",
            "type": "number"
        },
        {
            "name": "maxRuntimeSec",
            "baseName": "max_runtime_sec",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return LiveStreamUpdatePayload.attributeTypeMap;
    }
}

