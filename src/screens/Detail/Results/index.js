import { View } from 'react-native'
import React from 'react'
import { useSubscription } from '@apollo/client'
import { RESULTS_SUBSCRIPTION } from '../queries'
import Loading from '../../../components/Loading'
import { Spacer } from 'native-base'
import Item from './Item'

const Results = ({id}) => {
  const { loading, data } =useSubscription(RESULTS_SUBSCRIPTION, {
    variables: {
      id,
    }
  });

  if (loading) {
    return <Loading />
  }
  // console.log(data)
  
  const { options } = data.questions_by_pk;
  const total = options.reduce((total,item) => total + item.answers_aggregate.aggregate.count,0);

  return (
    <View>
      <Spacer />
      {
        options.map(item=> (
          <Item key={item.id} item={item} total={total} />
        ))
      }
    </View>
  )
}

export default Results;