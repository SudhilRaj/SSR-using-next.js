import Link from 'next/link';
import ListStyles from '../styles/Lists.module.css';

const ListItem = ({list}) => {
    return(
        <Link href={`/list/${list.id}`}>
            <a className={ListStyles.card}>
                <h2>{list.title.slice(0, 12)}{'...'} &rarr;</h2>
                <p>{list.body.slice(0, 80)}{'...'}</p>
            </a>
        </Link>
    );
}

export default ListItem;