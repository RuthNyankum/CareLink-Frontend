// //src/services/profile.js
// import { apiClient } from "./config";

// export const apiAddProfile = async (payload) => {
//   return apiClient.post("/profile", payload);
// };

// export const apiGetProfile = async () => {
//   return apiClient.get("/profile");
// };


// export const apiUpdateProfile = async (id, payload) => {
//     return apiClient.patch(`/profile/${id}`, payload);
//   };

import { apiClient } from "./config";

export const apiAddProfile = async (payload) => {
  return apiClient.post("/profile", payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const apiGetProfile = async () => {
  return apiClient.get("/profile");
};

export const apiUpdateProfile = async (id, payload) => {
  return apiClient.patch(`/profile/${id}`, payload);
};
