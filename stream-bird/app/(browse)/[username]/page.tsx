import { isFollowingUser } from "@/dbconfig/follow-service";
import { getUserByUsername } from "@/dbconfig/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_component/actions";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user._id);

  return (
    <div className="pt-4">
      <p> User : {user.username}</p>
      <p> User : {user._id}</p>
      <p> User : {`${isFollowing}`}</p>
      <Actions isFollowing={isFollowing} userId={user._id} />
    </div>
  );
};

export default UserPage;
