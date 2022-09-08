import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import FormAddPhonebook from 'components/Phonebook/FormAddPhonebook/FormAddPhonebook';
import PhonebookList from 'components/Phonebook/PhonebookList/PhonebookList';
import styles from 'components/app.module.css';

import { useSelector } from 'react-redux';

const App = () => {
  const phonebook = useSelector(store => store.contacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(phonebook));
  }, [phonebook]);

  
  //   setPhonebook(prevPhonebook => {
  //     const newContact = {
  //       ...data,
  //       id: nanoid(),
  //     };
  //     return [...prevPhonebook, newContact];
  //   })
  // };

  

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  }

  
    // return Boolean(result);
  

  const getFilteredPhonebook = () => {
    if (!filter) {
      return phonebook;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredPhonebook = phonebook.filter(({ name, number }) => {
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();
      const result =
        normalizedName.includes(normalizedFilter) ||
        normalizedNumber.includes(normalizedFilter);
      return result;
    });

    return filteredPhonebook;
  }

  const filteredPhonebook = getFilteredPhonebook();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <FormAddPhonebook  />
        </div>
        <div>
          <PhonebookList
            items={filteredPhonebook}
          />
          <input
            name="filter"
            onChange={handleFilter}
            className={styles.filter}
            placeholder="Filter"
          />
        </div>
      </div>
    </div>
  );
}
export default App;