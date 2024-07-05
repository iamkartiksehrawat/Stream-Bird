import StreamPlayer from "@/components/stream-player";
import { getUserByUsername } from "@/dbconfig/user-service";
import { currentUser } from "@clerk/nextjs/server";

interface CreatorPageProps {
  params: {
    username: string;
  };
}

const CreatorPage = async ({ params }: CreatorPageProps) => {
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if (!user || user.exUserid !== externalUser?.id) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="pt-4">
      <StreamPlayer user={user} isFollowing stream={user.stream} />
    </div>
  );
};

export default CreatorPage;
