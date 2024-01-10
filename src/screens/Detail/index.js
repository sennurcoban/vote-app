import { StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { GET_QUESTION_DETAIL } from './queries';
import { useQuery } from '@apollo/client';
import Loading from '../../components/Loading';
import { Box, Divider, Heading } from 'native-base';
import Form from './Form';
import Results from './Results/index';
import { auth } from '../../auth';

const Detail = ({route}) => {
  const {id} = route.params;
  const [isVoted, setIsVoted] = useState(false);

  const { loading, data} = useQuery(GET_QUESTION_DETAIL, {
    variables: {
      id,
      user_id: auth.currentUser?.uid
    },
    fetchPolicy: "network-only" // sorunun tekrar tekrar gelmesi lazım cache verisini getirmemesi lazım
    //(oy verdikten sonra tekrar anket ekranını getirmemesi için yaptık )
  })

  if (loading) {
    return <Loading />
  }

  const { text, options, answers } = data.questions_by_pk;
  return (
    <Box p="3">
      <Heading size={"md"}>{text}</Heading>
      <Divider my={2}/>
      {
        (!isVoted && answers.length < 1)? (
          <Form options={options} setIsVoted={setIsVoted} id={id}/>
        ) : (
          <Results id={id} />
        )
      }
    </Box>
  )
}

export default Detail;

const styles = StyleSheet.create({})