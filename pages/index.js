import SocialCardsList from '../components/socialCards/SocialCardsList'
import CardsPage from './cards/index';

import styles from '../styles/Home.module.css'

const defaultEndpoint = 'http://private-cc77e-aff.apiary-mock.com/posts';
export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  console.log("This is the data", data)
  return {
    props: {
      data
      //  {
      //   name: data.account_name,
      //   id: data.item_id,
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
