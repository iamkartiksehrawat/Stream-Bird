"use server";

import UserModel from "@/model/UserModel";
import { revalidatePath } from "next/cache";
import { getSelf } from "@/dbconfig/auth-service";
import { User } from "@/model/UserModel";

export const updateUser = async (values: Partial<User>) => {
  try {
    const self = await getSelf();

    const validData = {
      bio: values.bio,
    };

    const user = await UserModel.findByIdAndUpdate(self._id, validData, {
      new: true,
    });

    revalidatePath(`/${self.username}`);
    revalidatePath(`/u/${self.username}`);

    const data = JSON.parse(JSON.stringify(user));

    return data;
  } catch (e) {
    console.log(e);
    return;
  }
};
