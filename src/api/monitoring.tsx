import client from './client';

// 드론 그룹 리스트 조회
export const getDroneGroupList = async () => {
  return await client.get(`/api/drone-group`);
};

// 드론 그룹 정보
export const getDroneGroupInfo = async (groupId: number, year: number) => {
  return await client.post(`/api/drone-group/info`, {
    groupId: groupId,
    year: year,
  });
};

// 드론 상태 정보
export const getDroneStateInfo = async (groupId: number, year: number) => {
  return await client.post(`/api/drone-group/avg`, {
    groupId: groupId,
    year: year,
  });
};

// 드론 그룹 내 드론 정보 조회
export const getDroneInfoList = async (groupId: number, filter: string) => {
  return await client.post(`/api/drone-group/drones`, {
    groupId: groupId,
    filter: filter,
  });
};
