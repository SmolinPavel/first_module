import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";

import { Cat } from "components/Cat";

import { filter } from "store/cats";

import styles from "./CatList.module.scss";

const CatListComponent = ({ cats, filter, filterValue }) => {
  return (
    <div>
      <div className={styles.HeaderWrapper}>
        <h3>Cats</h3>
        <TextField
          value={filterValue}
          onChange={(e) => filter(e.target.value)}
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

const mstp = (state) => {
  const { filter: filterValue, items } = state.cats;
  const filteredCats = items.filter((cat) => cat.type.includes(filterValue));

  return {
    cats: filteredCats,
    filterValue,
  };
};

const mdtp = {
  filter,
};

export const CatList = connect(mstp, mdtp)(CatListComponent);
