# @nearbyy/core

This is the core `@nearbyy` sdk package.

## Documentation

The full documentation for the Nearbyy platform can be found [here](https://docs.nearbyy.com).

## NearbyyClient

The NearbyyClient class is the main class of the Nearbyy SDK. It is used to upload and retrieve files from the Nearbyy platform.

## Constructor

Calling `new NearbyyClient()` will create a new instance of the NearbyyClient class.

```typescript title="NearbyyClient.ts"
interface NearbyyClientOptions {
  API_KEY: string;
  API_URL?: string;
  CLOUDFRONT_URL?: string;
}

constructor(options: NearbyyClientOptions)
```

### Parameters

- `options`: The options to use when creating the client.
  - `API_KEY`: Your API key. Neccessary for authenticating requests.
  - `API_URL?`: The URL of the Nearbyy API. Defaults to `https://nearbyy.com/api`.
  - `CLOUDFRONT_URL?`: The URL of the Nearbyy CDN. Defaults to `https://dzpv5o2pvfxys.cloudfront.net`.

## Methods

### uploadFiles

Uploads one or multiple files to the Nearbyy platform.

```typescript title="uploadFile.ts"
async uploadFile(body: { files: File[], tag: string } | { fileUrls: string[], tag: string }): Promise<FileEndpointPostResponse>
```

#### Parameters

- `body`: The body of the request.
  - `files`: An array of files to upload.
  - `fileUrls`: An array of URLs to upload.
  - `tag`: The tag to apply to the files, used for filtering on queries.

Note: You can either provide an array of files or an array of URLs, but not both.

#### Returns

- [`Promise<FileEndpointPostResponse>`](../../api-reference/types#fileendpointpostresponse): The response from the server.

### deleteFiles

Deletes one or multiple files from the Nearbyy platform.

```typescript title="deleteFiles.ts"
async deleteFiles(body: FileEndpointDeleteBody): Promise<FileEndpointDeleteResponse>
```

#### Parameters

- `body` - [`FileEndpointDeleteBody`](../../api-reference/types#fileendpointdeletebody): The body of the request.

### semanticSearch

Performs a semantic search on the Nearbyy platform.

```typescript title="queryDatabase.ts"
async semanticSearch(params: ChunkEndpointGetParams): Promise<ChunkEndpointGetResponse>
```

#### Parameters

- `params` - [`ChunkEndpointGetParams`](../../api-reference/types#chunkendpointgetparams): The parameters of the request.
  - `query`: The term or phrase to search for.
  - `limit`: The maximum number of chunks to return (between 1 and 100).
  - `tag?`: If provided, only chunks with this tag will be returned.

#### Returns

- [`Promise<ChunkEndpointGetResponse>`](../../api-reference/types#chunkendpointgetresponse): The response from the server.
