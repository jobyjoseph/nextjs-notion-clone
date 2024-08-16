"use client";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const editor: BlockNoteEditor = useCreateBlockNote({
    editable,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    onEdit,
  });
  return <div>Editor</div>;
};
