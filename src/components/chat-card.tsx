import Avatar from "react-avatar";

type Props = {
  username: string;
  message: string;
  date: string;
};

function ChatCard({ username, message }: Props) {
  return (
    <div className="gap-3 bg-white shadow-4xl flex items-center justify-between  rounded-2xl p-3">
      <div className="flex items-center gap-3 w-full">
        <Avatar name={username} size="40" round />
        <div>
          <p className="font-bold text-sm text-primary">{username}</p>
          <p className="text-sm text-primary opacity-60 w-24 text-ellipsis text-nowrap overflow-hidden">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
