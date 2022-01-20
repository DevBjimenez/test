import React from 'react';
import {IconButton, Paper} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Post} from "../../hooks/usePost";

export interface IPostItem extends Post {
    type: 'FAVORITE' | 'ORIGINAL';
    onFavorite?: () => void;
    isFavorite?: boolean;
}

const PostItem = ({type, onFavorite, isFavorite, title, id, body}: IPostItem) => {

    return (
        <Paper variant="outlined">
            <h1>{title}</h1>
            <h2>{id}</h2>
            <h4>{body}</h4>
            {type == 'ORIGINAL' && !isFavorite &&
            <IconButton onClick={onFavorite}>
                <FavoriteBorderIcon/>
            </IconButton>}
        </Paper>
    );
};

export {PostItem};
