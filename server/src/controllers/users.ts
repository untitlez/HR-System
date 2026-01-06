import { status } from "elysia";
import { usersInterface } from "../interface/users";
import {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  removeUser,
} from "../services/users";

export const listAll = async () => {
  try {
    const payload = await getAllUser();
    if (payload.error) {
      if (payload.error.code === "23505")
        return status(409, { message: "Information already exists" });
      return status(400, { message: "Invalid input" });
    }

    if (!payload.data) {
      return status(404, { message: "Data not found" });
    }

    return status(200, payload.data);
  } catch (error: unknown) {
    console.error("error", error);
    return status(500, { message: "Failed to fetch data" });
  }
};

export const list = async ({ params }: usersInterface) => {
  try {
    const { id } = params;
    if (!id) {
      return status(400, { message: "ID is required" });
    }

    const payload = await getUser(id);
    if (payload.error) {
      if (payload.error.code === "23505")
        return status(409, { message: "Information already exists" });
      return status(400, { message: "Invalid input" });
    }

    if (!payload.data) {
      return status(404, { message: "Data not found" });
    }

    return status(200, payload.data);
  } catch (error: unknown) {
    console.error("error", error);
    return status(500, { message: "Failed to fetch data" });
  }
};

export const create = async ({ body }: usersInterface) => {
  try {
    if (!body) {
      return status(400, { message: "Request body is required" });
    }

    const payload = await createUser(body);
    if (payload.error) {
      if (payload.error.code === "23505")
        return status(409, { message: "Information already exists" });
      return status(400, { message: "Invalid input" });
    }

    if (!payload.data) {
      return status(404, { message: "Data not found" });
    }

    return status(201, payload.data);
  } catch (error: unknown) {
    console.error("error", error);
    return status(500, { message: "Failed to create user" });
  }
};

export const update = async ({ params, body }: usersInterface) => {
  try {
    const { id } = params;
    if (!id) {
      return status(400, { message: "ID is required" });
    }

    if (!body) {
      return status(400, { message: "Request body is required" });
    }

    const payload = await updateUser({ id, body });
    if (payload.error) {
      if (payload.error.code === "23505")
        return status(409, { message: "Information already exists" });
      return status(400, { message: "Invalid input" });
    }

    if (!payload.data) {
      return status(404, { message: "Data not found" });
    }

    return status(200, payload.data);
  } catch (error: unknown) {
    console.error("error", error);
    return status(500, { message: "Failed to update user" });
  }
};

export const remove = async ({ params }: usersInterface) => {
  try {
    const { id } = params;
    if (!id) {
      return status(400, { message: "ID is required" });
    }

    const payload = await removeUser(id);
    if (payload.error) {
      if (payload.error.code === "23505")
        return status(409, { message: "Information already exists" });
      return status(400, { message: "Invalid input" });
    }

    if (!payload.data) {
      return status(404, { message: "Data not found" });
    }

    return status(204, { message: "Remove successfully" });
  } catch (error: unknown) {
    console.error("error", error);
    return status(500, { message: "Failed to remove user" });
  }
};
