import { api } from "../api";

interface SecretKeyGeneratorResponse {
  secretKey: string;
}

interface CreateSecretKeyProp {
  title: string;
}
interface CreateSecretKeyResponse {
  id: string;
  title: string;
  secretKey: string;
  userId: string;
}

interface GetSecretKeyResponse {
  id: string;
  title: string;
  secretKey: string;
  userId: string;
}

interface UpdateSecretKeyProp {
  title: string;
}

interface UpdateSecretKeyResponse {
  id: string;
  title: string;
  secretKey: string;
  userId: string;
}

const skg = {
  SecretKeyGenerator: async () => {
    try {
      const response = await api.post("/skg/generate");
      return response.data as SecretKeyGeneratorResponse;
    } catch (error) {
      return console.log(error);
    }
  },
  CreateSecretKey: async (props: CreateSecretKeyProp) => {
    try {
      const response = await api.post("/skg", props);
      return response.data as CreateSecretKeyResponse;
    } catch (error) {
      return console.log(error);
    }
  },
  GetSecretKeys: async () => {
    try {
      const response = await api.get("/skg");
      return response.data as GetSecretKeyResponse[];
    } catch (error) {
      return console.log(error);
    }
  },
  GetSecretKey: async (id: string) => {
    try {
      const response = await api.get(`/skg/${id}`);
      return response.data as GetSecretKeyResponse;
    } catch (error) {
      return console.log(error);
    }
  },
  UpdateSecretKey: async (id: string, props: UpdateSecretKeyProp) => {
    try {
      const response = await api.put(`/skg/${id}`, props);
      return response.data as UpdateSecretKeyResponse;
    } catch (error) {
      return console.log(error);
    }
  },
  DeleteSecretKey: async (id: string) => {
    try {
      const response = await api.delete(`/skg/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};

export default skg;