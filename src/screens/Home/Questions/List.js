import React from "react";
import { Box, FlatList } from "native-base";
import Item from "./Item";

const List = ({ data }) => {
  return (
    <Box>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default List;
