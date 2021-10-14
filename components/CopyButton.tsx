import { Button, ButtonProps } from "@chakra-ui/button";
import { useClipboard } from "@chakra-ui/hooks";
import React from "react";

type CopyButtonProps = {
  textToCopy: string;
  onCopied?: () => void;
} & ButtonProps;

export const CopyButton = (props: CopyButtonProps): JSX.Element => {
  const { textToCopy, onCopied, ...buttonProps } = props;
  const { hasCopied, onCopy } = useClipboard(textToCopy);

  return (
    <Button
      isDisabled={hasCopied}
      onClick={() => {
        onCopy();
        onCopied && onCopied();
      }}
      {...buttonProps}
    >
      {!hasCopied ? "Copy" : "Copied"}
    </Button>
  );
};
