import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations';

const SearchBooks = () => {
    const saveBook = useMutation(SAVE_BOOK, {
        update(cache, { data: { saveBook } }) {}
    })
};

export default SearchBooks;