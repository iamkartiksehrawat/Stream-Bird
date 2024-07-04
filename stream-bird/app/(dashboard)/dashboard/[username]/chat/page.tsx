import { getSelf } from "@/dbconfig/auth-service";
import { getStreamByUserId } from "@/dbconfig/stream-service";
import ToggleCard from "./_components/togglecard";

const Chatpage = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self._id);
  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-4">Chat settings</div>
      <div className="space-y-4">
        <ToggleCard
          label="Enable Chat"
          value={stream.isChatEnabled}
          field="isChatEnabled"
        />
        <ToggleCard
          label="Delay Chat"
          value={stream.isChatDelayed}
          field="isChatDelayed"
        />
        <ToggleCard
          label="User need to follow first to chat"
          value={stream.isChatFollowersOnly}
          field="isChatFollowersOnly"
        />
      </div>
    </div>
  );
};

export default Chatpage;
