import axios from "axios";
import { Config } from "./config";
import { routes } from "./routes";

export const useSession = async () => {
  try {
    const { data } = await axios.get(Config.API_URL + routes.auth.session, {
      withCredentials: true,
    });
    return data;
  } catch {
    return null;
  }
};
