import Link from "next/link";
import React from "react";

const StyledLink = (props: typeof Link) => <Link
  className="text-primary underline" {...props} />

export default StyledLink;
