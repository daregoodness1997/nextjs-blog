import React from "react";
import Link from "next/link";
import { Card as CustomCard, CardHeader, CardBody, Image } from "@nextui-org/react";

interface Props {
  cover: string;
  title: string;
  summary?: string;
  author?: { img: string; name: string; role?: string };
  type?: "vertical" | "horizontal";
  link: string;
}
const Card: React.FC<Props> = ({ title, summary, cover, link }) => {
  return (
    <Link href={link}>
      <CustomCard className="py-4 h-full">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl  h-[200px]"
            src={cover}
            width={"100%"}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{title}</h4>
          <small className="text-default-500">{summary}</small>
        </CardHeader>
      </CustomCard>
    </Link>
  );
};

export default Card