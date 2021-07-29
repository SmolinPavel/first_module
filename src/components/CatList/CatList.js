import { useDispatch, useSelector, connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

import { Cat } from "components/Cat";

import { filter, selectFilterValue, selectFilteredCats } from "store/cats";

import styles from "./CatList.module.scss";

export const CatListComponent = ({ filter }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => dispatch(filter(e.target.value));
  const handleIncrement = () => dispatch({ type: "@timer/increment" });

  const filterValue = useSelector(selectFilterValue);
  const cats = useSelector(selectFilteredCats);

  return (
    <div>
      <div className={styles.HeaderWrapper}>
        <h3>Cats</h3>
        <TextField
          value={filterValue}
          onChange={handleChange}
          label="Фильтровать"
        />
      </div>
      <div className={styles.Wrapper}>
        {cats.map((cat) => (
          <Cat key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

const mstp = (state) => ({
  cats: selectFilteredCats(state),
  filterValue: selectFilterValue(state),
});

const mdtp = (dispatch) => ({
  filter: (text) => dispatch(filter(text)),
});

export const CatList = connect(mstp, mdtp)(CatListComponent);
