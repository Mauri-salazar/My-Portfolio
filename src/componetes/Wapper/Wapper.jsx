import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import english from '../../lang/en.json';
import spanish from '../../lang/es.json';



 export const Context = React.createContext();

const local = navigator.language ;

let lang ;

if(local === 'en') {
  lang = english ;
} else {
  lang = spanish ;
}


const Wrapper = (props) => {

  const [locale, setLocale] = useState(local);
  const [ messages , setMessages] = useState(lang);

  const selectLanguage = (e) => {
    const newLocale = e.target.value ;
    setLocale(newLocale);

    if (newLocale === 'en') {
      setMessages(english);
    } else {
      setMessages(spanish);
    }

  }

  return (
    <Context.Provider value={{locale, selectLanguage}}>
      <IntlProvider
        messages={messages}
        locale={locale}
      >
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper ;