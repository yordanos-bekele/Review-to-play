import { Heading } from "@chakra-ui/react";

interface Props {
  platformTextRecived: String | undefined;
  gameTextRecived: String | undefined;
}
const GameHeading = ({ platformTextRecived, gameTextRecived }: Props) => {
  const platformText = platformTextRecived ? platformTextRecived : "";
  const gameText = gameTextRecived ? gameTextRecived : "";

  return (
    <div className="p-4 mx-auto">
      <Heading as="h1" fontSize="5xl">
        {`${platformText} ${gameText} Games`}
      </Heading>
    </div>
  );
};

export default GameHeading;
