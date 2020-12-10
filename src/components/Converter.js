import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Converter = ({ language, text }) => {
  const [translation, setTranslation] = useState('');
  const [debouncedText, setDebouncedText] = useState(text)

  /**
   * Debounce text updates and delay the changes to reduce the API call rate.
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    },500);

    return () => {
      clearTimeout(timerId);
    }
  }, [ text ]);

  /**
   * Watch debouncedText and only do the API call wne it changes.
   */
  useEffect(() => {
    const translateApiCall = async () => {
        const { data, error } = await axios.post('https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debouncedText,
              target: language.value,
              key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
          },
        );

        if (error) {
          console.log('Error calling Google Translate API', error);

          return;
        }

        if (data) {
          setTranslation(data.data.translations[0].translatedText)
        }
    };

    translateApiCall();
  }, [ language, debouncedText ]);

  return (
    <div>
      <h1 className="ui header">
        {translation}
      </h1>
    </div>
  )
}

export default Converter;
