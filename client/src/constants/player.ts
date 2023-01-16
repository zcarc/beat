// -1 – 시작되지 않음
//  0 – 종료
//  1 – 재생 중
//  2 – 일시중지
//  3 – 버퍼링
//  5 – 동영상 신호

export const PLAYER_STATES = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
};
