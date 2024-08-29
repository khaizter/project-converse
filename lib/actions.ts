"use server";

export const addUser = async (formData: FormData) => {
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  console.log(user);
};
