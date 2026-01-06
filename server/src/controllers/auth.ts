import { status } from "elysia";
import { authInterface } from "../interface/auth";
import { loginService } from "../services/auth";

export const login = async ({ body, jwt, cookie }: authInterface) => {
  try {
    if (!body) {
      return status(400, { message: "Request email and password is required" });
    }

    const payload = await loginService(body);
    if (payload?.error) {
      return status(400, payload.error);
    }

    if (!payload.data) {
      return status(404, { message: "Data not found" });
    }

    const payloadData = {
      id: payload.data.id,
      fullName: payload.data.fullName,
      email: payload.data.email,
      role: payload.data.role ?? "employee",
    };

    const token = await jwt.sign(payloadData, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    if (cookie.token) {
      cookie.token.value = token;
      cookie.token.httpOnly = true;
      cookie.token.secure = process.env.NODE_ENV === "production";
      cookie.token.sameSite =
        process.env.NODE_ENV === "production" ? "none" : "lax";
      cookie.token.maxAge = 60 * 60;
    }

    return status(200, payloadData);
  } catch (error: unknown) {
    console.error("error", error);
    return status(500, { message: "Failed to create user" });
  }
};

export const logout = async ({ cookie }: authInterface) => {
  try {
    if (cookie.token) {
      cookie.token.remove();
      delete cookie.token;
    }

    return status(200, { message: "Logout successfully" });
  } catch (error: unknown) {
    console.error("error", error);
    return status(500, { message: "Failed to logout" });
  }
};
