import { supabase } from "../db/supabase";
import { bodyInterface } from "../interface/auth";

export const loginService = async (body: bodyInterface) => {
  const { data, error } = await supabase
    .from("employee")
    .select()
    .eq("email", body.email)
    .maybeSingle();

  if (error)
    return {
      error: {
        message: error.message,
      },
    };
  return { data };
};