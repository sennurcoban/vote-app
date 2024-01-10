import React from 'react'
import { IconButton, Spinner } from 'native-base'
import { useMutation } from '@apollo/client'
import { DELETE_QUESTION_MUTATION } from '../queries'
import Ionicons from "@expo/vector-icons/Ionicons";


const DeleteButton = ({id}) => {
    const [deleteQuestion, { loading }] = useMutation(DELETE_QUESTION_MUTATION, {
        variables: {
          id,
        },
      });
    
      const handleDelete = async () => {
        await deleteQuestion();
      };

      if (loading) {
        return <Spinner color={"warning.500"} mr={2} />
      }

  return (
        <IconButton
          onPress={handleDelete}
          disabled={loading}
          colorScheme="red"
          _icon={{
            as: Ionicons,
            name: "trash-outline",
          }}
        />
  )
}

export default DeleteButton