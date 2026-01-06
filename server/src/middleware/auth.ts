import { status } from "elysia";
import { authInterface } from "../interface/auth";

export const checkToken = async ({ cookie, jwt }: authInterface) => {
  const cookieToken = cookie.token.value;
  if (!cookieToken) {
    return status(404, { message: "Cookie not found" });
  }

  const payload = await jwt.verify(cookieToken, process.env.JWT_SECRET);
  if (!payload) {
    return status(401, { message: "Unauthorized" });
  }

  return payload;
};
