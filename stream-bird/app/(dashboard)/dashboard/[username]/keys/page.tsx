import { Button } from "@/components/ui/button";
import UrlCard from "./_components/urlcard";
import { getStreamByUserId } from "@/dbconfig/stream-service";
import { getSelf } from "@/dbconfig/auth-service";
import KeyCard from "./_components/keycard";
import ConnectModal from "./_components/connectmodal";

const KeysPage = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self._id);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Keys & URLs</h1>
        <ConnectModal />
      </div>
      <div className="space-y-4">
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  );
};

export default KeysPage;
