import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import React, { memo, useCallback } from "react";
import useToggle from "./functions/useToggle";

const TodoItem = ({
  id,
  isChecked,
  content,
  onToggleChecked,
  onDelete,
  onChangeContent,
}) => {
  const { toggle: isEditing, setToggle, handleToggle } = useToggle();
  const handleEditContent = useCallback(
    (e) => {
      onChangeContent(id)(e.currentTarget.value);
    },
    [id]
  );
  const handleToggleChecked = useCallback(
    (e) => {
      onToggleChecked(id)(e.currentTarget.checked);
    },
    [id]
  );

  return (
    <Box display={"flex"} alignItems={"center"}>
      <Checkbox checked={isChecked} onChange={handleToggleChecked} />
      <div onDoubleClick={handleToggle}>
        {isEditing ? (
          <TextField
            autoFocus={true}
            value={content}
            onChange={handleEditContent}
            onBlur={() => setToggle(false)}
          />
        ) : (
          <p>{content}</p>
        )}
      </div>
      <Button onClick={() => onDelete(id)}>
        <DeleteOutlineOutlined />
      </Button>
    </Box>
  );
};

export default memo(TodoItem);
