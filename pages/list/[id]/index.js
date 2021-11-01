import axios from 'axios';
import { useRouter } from "next/router";
import Meta from '../../../components/Meta';

const List = ({item}) => {
    // const router = useRouter();
    // const {id} = router.query;
    return(
        <div style={{padding: '3rem'}}>
            <Meta title={item.title.charAt(0).toUpperCase() + item.title.slice(1)} description={item.body}/>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </div>
    )
}

// Get data on request - This method will run on server side on every request (Otherwise we need to use useEffect)
export const getServerSideProps = async(context) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    return {
        props: {
            item: res.data
        }
    };
}

export default List;