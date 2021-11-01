import ListItem from '../components/ListItem';
import ListStyles from '../styles/Lists.module.css';

const Lists = ({lists}) => {
    return(
        <div className={ListStyles.grid}>
          {
            lists.map((list) => {
              return <ListItem list={list} key={list.id}/>
            })
          }
        </div>
    )
}

export default Lists;