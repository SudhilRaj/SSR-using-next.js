import axios from 'axios';
import { useRouter } from "next/router";

const List = ({item}) => {
    // const router = useRouter();
    // const {id} = router.query;
    return(
        <div style={{padding: '3rem'}}>
            {item.id}
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