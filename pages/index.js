import SocialCardsList from '../components/socialCards/SocialCardsList'
import CardsPage from './cards/index';

import styles from '../styles/Home.module.css'

const defaultEndpoint = 'http://private-cc77e-aff.apiary-mock.com/posts';
export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  // const dataArray = data.toArray();
  return {
    props: {
      data
      // {
      //   id: data.item_id.toString(),
      //   name: data.item_name
      // }
    }
  }
}

export default function Home({ data }) {
  console.log(data)
  return (
    <SocialCardsList items={data} />
  )
}
