import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid"
import React from "react";

import { Button } from "./button";

type Props = {
  totalLikes: number;
  liked: boolean;
}

const LikeButton = ({ totalLikes = 0, liked = false }: Props) => {

  const icon = liked ? <SolidHeartIcon className="h-6 w-6" /> : <HeartIcon className="h-6 w-6" />;

  return (
    <Button
      className="self-end text-black md:self-start"
      variant="ghost" size="fit">
      {totalLikes}
      {icon}
    </Button>
  );
}

export default LikeButton;
