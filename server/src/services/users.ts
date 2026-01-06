import { supabase } from "../db/supabase";
import { bodyInterface } from "../interface/users";

export const getAllUser = async () => {
  const { data, error } = await supabase
    .from("employee")
    .select("*")
    .neq("role", "admin");
  if (error) return { error };
  return { data };
};

export const getUser = async (id: string) => {
  const { data, error } = await supabase
    .from("employee")
    .select()
    .eq("id", id)
    .maybeSingle();

  if (error) return { error };
  return { data };
};

export const createUser = async (body: bodyInterface) => {
  const { data, error } = await supabase.from("employee").insert(body).select();
  if (error) return { error };
  return { data };
};

export const updateUser = async ({
  id,
  body,
}: {
  id: string;
  body: bodyInterface;
}) => {
  const { data, error } = await supabase
    .from("employee")
    .update(body)
    .eq("id", id)
    .select();
  if (error) return { error };
  return { data };
};

export const removeUser = async (id: string) => {
  const { data, error } = await supabase
    .from("employee")
    .delete()
    .eq("id", id)
    .select();
  if (error) return { error };
  return { data };
};
