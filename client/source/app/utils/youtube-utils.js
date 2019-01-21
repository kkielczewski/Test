const YOUTUBE_PATH = 'https://www.googleapis.com/youtube/v3';

const YOUTUBE_KEY = 'AIzaSyBAvkC4SNGj2oa19dL-AvWs7W5j-mLZJsk';

function checkStatus(response) {
  return response.status >= 200 && response.status < 300 ? Promise.resolve(response) : Promise.reject(new Error(response.statusText));
}

function getJson(response) {
  return response.json();
}

function getYoutube(path) {
  const source = `${YOUTUBE_PATH}/${path}`;
  return fetch(source, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(checkStatus)
    .then(getJson);
}

function postYoutube(path, data) {
  return fetch(`${YOUTUBE_PATH}/${path}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(checkStatus)
    .then(getJson);
}

function destroyYoutube(path, id) {
  let source;
  if (id) {
    source = `${YOUTUBE_PATH}/${path}/${id}`;
  } else {
    source = `${YOUTUBE_PATH}/${path}/${id}`;
  }
  return fetch(source, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(checkStatus);
}
/* eslint-disable */
async function getAllVideos(playlist) {
  const object = await getYoutube(`playlistItems?key=AIzaSyBAvkC4SNGj2oa19dL-AvWs7W5j-mLZJsk&playlistId=${playlist}&part=snippet&maxResults=50`)
    .then((data) => { return { token: data.nextPageToken, videos: data.items, totalCount: data.pageInfo.totalResults }; });
  let { videos } = object;
  let nextPage = object.token;
  const total = object.totalCount;
  for (let i = 0; i < Math.ceil((total - 50) / 50); i += 1) {
    let url = `playlistItems?key=AIzaSyBAvkC4SNGj2oa19dL-AvWs7W5j-mLZJsk&playlistId=${playlist}&part=snippet&maxResults=50&pageToken=` + nextPage;
    let tmp = await getYoutube(url).then((data) => { return { token: data.nextPageToken, videos: data.items }; });
    videos = videos.concat(tmp.videos);
    nextPage = tmp.token;
  }
  return videos;
}

async function getVideo(video) {
  const object = await getYoutube(`videos?key=AIzaSyBAvkC4SNGj2oa19dL-AvWs7W5j-mLZJsk&id=${video}&part=snippet`)
    .then((data) => { return data.items[0]; });
  return object;
}

async function getSomeVideos(playlist) {
  let object = await getYoutube(`playlistItems?key=AIzaSyBAvkC4SNGj2oa19dL-AvWs7W5j-mLZJsk&playlistId=${playlist}&part=snippet&maxResults=48`)
    .then((data) => { return { videos: data.items, totalCount: data.pageInfo.totalResults }; });
  return object;
}

async function getVideoStats(id) {
  const object = await getYoutube(`videos?key=AIzaSyBAvkC4SNGj2oa19dL-AvWs7W5j-mLZJsk&id=${id}&part=statistics`)
    .then((data) => { return { viewCount: data.items[0].statistics.viewCount, likeCount: data.items[0].statistics.likeCount, dislikeCount: data.items[0].statistics.dislikeCount }; });
  return object;
}
/* eslint-enable */

export {
  getYoutube,
  postYoutube,
  destroyYoutube,
  getAllVideos,
  getVideo,
  getSomeVideos,
  getVideoStats
};
